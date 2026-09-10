import React, { useState } from "react";
import { Form, Alert, Button } from "react-bootstrap";

/**
 * Reusable password gate: an intro line, a password input, and a submit
 * button that unlocks content on success. Endpoint, copy, and storage key
 * are all props so this can front any password-protected page, not just
 * this one case study.
 */
function PasswordGate({
  onSuccess,
  description = "This case study is password-protected. Enter the guest password to view it.",
  buttonLabel = "View Project",
  authEndpoint = "/api/aireadiness/auth",
  tokenStorageKey = "aireadiness_token",
}) {
  const [password, setPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [pressed, setPressed] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch(authEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      if (res.status === 200) {
        const { token } = await res.json();
        sessionStorage.setItem(tokenStorageKey, token);
        onSuccess(token);
        return;
      }
      if (res.status === 401) {
        setError("Incorrect password. Please try again.");
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch {
      setError("Something went wrong. Please try again.");
    }
    setSubmitting(false);
  };

  const releasePress = () => setPressed(false);

  return (
    <div className="project_overview_container auth-gate">
      <Form onSubmit={handleSubmit} style={{ maxWidth: "360px" }}>
        <Form.Group>
          <Form.Label>{description}</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoFocus
            disabled={submitting}
          />
        </Form.Group>
        {error && <Alert variant="danger">{error}</Alert>}
        <Button
          type="submit"
          className="auth-gate-button"
          disabled={submitting || !password}
          onMouseDown={() => setPressed(true)}
          onMouseUp={releasePress}
          onMouseLeave={releasePress}
          onTouchStart={() => setPressed(true)}
          onTouchEnd={releasePress}
          onTouchCancel={releasePress}
        >
          <img
            className="auth-gate-button-icon"
            src={
              process.env.PUBLIC_URL +
              (pressed || submitting
                ? "/icons/lock_open_right.svg"
                : "/icons/lock_open.svg")
            }
            alt=""
          />
          {submitting ? "Checking..." : buttonLabel}
        </Button>
      </Form>
    </div>
  );
}

export default PasswordGate;
