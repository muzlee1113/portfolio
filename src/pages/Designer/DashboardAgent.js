import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import ScrollToTopOnMount from "../../components/ScrollToTopOnMount";
import BackToTopBtn from "../../components/BackToTopBtn";
import ProjectPagination from "../../components/ProjectPagination";
import ProjectContentNav from "../../components/ProjectContentNav";
import PasswordGate from "../../components/PasswordGate";
import ImageZoom from "react-medium-image-zoom";

const contents = [
  {
    id: "#overview",
    name: "Project Overview",
  },
  {
    id: "#solution",
    name: "Solution",
  },
  {
    id: "#problem",
    name: "The Problem",
  },
  {
    id: "#personas",
    name: "Strategy",
  },
  {
    id: "#design-bu",
    name: "Design for Business User",
  },
  {
    id: "#design-datapro",
    name: "Design for Data Pro",
  },
  {
    id: "#impact",
    name: "Outcome / Impact",
  },
];

const TOKEN_KEY = "dashboardagent_token";

// Lets case-study.json mark bold words with **like this** without embedding HTML.
function renderRichText(text) {
  if (!text) return text;
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, i) => {
    const match = part.match(/^\*\*([^*]+)\*\*$/);
    return match ? <strong key={i}>{match[1]}</strong> : part;
  });
}

// Stands in for an image/gif until the real asset is dropped into
// server-content/dashboardagent/images and wired up.
function Placeholder({ children, gif }) {
  return (
    <p className='project_quote_sm_text'>
      [{gif ? "GIF" : "Image"} placeholder — {children} — to be added]
    </p>
  );
}

function Caption({ children }) {
  if (!children) return null;
  return <div className='p_caption'>{children}</div>;
}

// Left column is a static image; right column (gif or code) is clamped to
// match its rendered height and scrolls internally if it's taller.
function TwoColumnMedia({
  leftImageSrc,
  leftContent,
  rightLabel,
  rightImageSrc,
  rightCode,
  fixedHeight,
}) {
  const leftRef = useRef(null);
  const [measuredHeight, setMeasuredHeight] = useState(null);
  const height = fixedHeight || measuredHeight;

  useEffect(() => {
    if (fixedHeight) return undefined;
    const el = leftRef.current;
    if (!el) return undefined;
    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setMeasuredHeight(entry.contentRect.height);
      }
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, [fixedHeight]);

  return (
    <div style={{ display: "flex", gap: "45px", alignItems: "flex-start" }}>
      <div style={{ flex: 1 }} ref={leftRef}>
        {leftContent ? (
          leftContent
        ) : (
          <ImageZoom
            image={{
              src: leftImageSrc,
              alt: "",
              className: "project_illustration_notop",
            }}
          />
        )}
      </div>
      <div style={{ flex: 1 }}>
        {rightLabel && (
          <div
            style={{
              fontFamily: "proxima-nova, sans-serif",
              fontWeight: 700,
              fontSize: "16px",
              marginTop: "24px",
              marginBottom: "8px",
            }}
          >
            {rightLabel}
          </div>
        )}
        <div
          style={{
            height: height ? `${height}px` : "auto",
            overflowY: "auto",
          }}
        >
          {rightImageSrc && (
            <div className='media_frame media_frame_fitheight'>
              <ImageZoom
                image={{
                  src: rightImageSrc,
                  alt: "",
                  className: "project_illustration_fitheight",
                }}
              />
            </div>
          )}
          {rightCode && (
            <pre
              style={{
                background: "rgba(0, 0, 0, 0.04)",
                padding: "16px",
                borderRadius: "6px",
                fontSize: "12px",
                lineHeight: "1.5",
                whiteSpace: "pre-wrap",
                wordBreak: "break-word",
                margin: 0,
                height: "100%",
                boxSizing: "border-box",
              }}
            >
              {rightCode}
            </pre>
          )}
        </div>
      </div>
    </div>
  );
}

function Quote({ text, attribution }) {
  return (
    <div className='project_quote_sm'>
      <div className='project_quote_sm_wrapper'>
        <div className='project_quote_sm_text'>
          "{text}" — {attribution}
        </div>
      </div>
    </div>
  );
}

class DashboardAgent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      authed: false,
      checking: true,
      content: null,
      token: null,
    };
    this.handleGateSuccess = this.handleGateSuccess.bind(this);
  }

  componentDidMount() {
    const token = sessionStorage.getItem(TOKEN_KEY);
    if (token) {
      this.loadContent(token);
    } else {
      this.setState({ checking: false });
    }
  }

  loadContent(token) {
    this.setState({ checking: true });
    fetch("/api/dashboardagent/content", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => {
        if (res.status === 200) {
          return res.json().then((content) => {
            this.setState({ authed: true, checking: false, content, token });
          });
        }
        sessionStorage.removeItem(TOKEN_KEY);
        this.setState({
          authed: false,
          checking: false,
          content: null,
          token: null,
        });
      })
      .catch(() => {
        this.setState({
          authed: false,
          checking: false,
          content: null,
          token: null,
        });
      });
  }

  handleGateSuccess(token) {
    this.loadContent(token);
  }

  imageUrl(filename) {
    return `/api/dashboardagent/image?file=${encodeURIComponent(filename)}&token=${encodeURIComponent(this.state.token)}`;
  }

  render() {
    const pagination = this.props.pagination;
    const { authed, checking, content } = this.state;
    return (
      <>
        <ScrollToTopOnMount />
        <div className='project_head_container'>
          <section className='project_head'>
            <h1>Conversational Analytics: Tableau Agent in Dashboards</h1>
            <h3>
              Start a conversation with your dashboard: conversational
              analytics that deliver insights & win trust.
            </h3>
            <div className='project_info'>
              Work Project, Nov. 2025 - Present
            </div>
          </section>
        </div>

        {!authed && !checking && (
          <PasswordGate
            onSuccess={this.handleGateSuccess}
            description='This case study is password-protected. Enter the guest password to view it.'
            authEndpoint='/api/dashboardagent/auth'
            tokenStorageKey={TOKEN_KEY}
          />
        )}

        {authed && content && (
          <>
            <div className='project_separator_transparent'>
              <img
                className='project_headerImg'
                src={
                  process.env.PUBLIC_URL +
                  "/images/DashboardAgent/head-img.jpg"
                }
                alt=''
              />
            </div>

            <div className='project_overview_container' id='overview'>
              <Row>
                <Col sm={12} md={4}>
                  <div className='project_overview_title'>Background</div>
                  <div className='project_overview_content'>
                    {renderRichText(content.background)}
                  </div>
                </Col>
                <Col sm={12} md={4}>
                  <div className='project_overview_title'>Project Timeline</div>
                  <div className='project_overview_content'>
                    <ul
                      style={{
                        fontSize: "inherit",
                        lineHeight: "inherit",
                        fontFamily: "inherit",
                        color: "inherit",
                        listStylePosition: "inside",
                        paddingLeft: 0,
                      }}
                    >
                      {content.timeline.map((item, i) => (
                        <li key={i} style={{ fontSize: "inherit", margin: 0 }}>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Col>
                <Col sm={12} md={4}>
                  <div className='project_overview_title'>Teammates</div>
                  <div className='project_overview_content'>
                    {content.teammates}
                  </div>
                </Col>
              </Row>
            </div>

            <div className='project_separator' id='solution'>
              <div className='project_separator_inner_wrapper'>
                <h2>Solution</h2>
                <h5>Final Design</h5>
                <div style={{ display: "flex", alignItems: "center" }}>
                  {content.solution.items.map((item, i) => (
                    <React.Fragment key={i}>
                      {i > 1 && (
                        <div
                          style={{
                            width: "1px",
                            height: "60px",
                            backgroundColor: "#e5ded6",
                            margin: "0 24px",
                          }}
                        />
                      )}
                      <div style={{ flex: 1, textAlign: "center" }}>
                        {item.image ? (
                          <ImageZoom
                            image={{
                              src: this.imageUrl(item.image),
                              alt: "",
                              className: "project_illustration",
                            }}
                          />
                        ) : (
                          <Placeholder>{item.imagePlaceholder}</Placeholder>
                        )}
                        <div className='project_caption text-center'>
                          <strong>{item.title}</strong>
                          {item.desc ? `: ${item.desc}` : ""}
                        </div>
                      </div>
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>

            <div className='project_overall_container'>
              <Row>
                <Col md={12} lg={3}>
                  <ProjectContentNav
                    contents={contents}
                    pagination={pagination}
                  />
                </Col>
                <Col md={12} lg={9}>
                  <div className='project_container'>
                    <section className='project_body' id='problem'>
                      <div id='scrollstart'></div>
                      <h2>The Problem</h2>
                      <h5>Data is everywhere, but the answer is out of reach</h5>
                      <p>{renderRichText(content.problem.paragraph)}</p>
                      {content.problem.image ? (
                        <ImageZoom
                          image={{
                            src: this.imageUrl(content.problem.image),
                            alt: "",
                            className: "project_illustration",
                          }}
                        />
                      ) : (
                        <Placeholder>
                          {content.problem.imagePlaceholder}
                        </Placeholder>
                      )}
                      <Caption>{content.problem.imageCaption}</Caption>
                    </section>

                    <section className='project_body' id='personas'>
                      <h2>Strategy</h2>
                      <h5>Personas & Design Principles</h5>
                      <p>{renderRichText(content.personas.intro)}</p>
                      {content.personas.image ? (
                        <ImageZoom
                          image={{
                            src: this.imageUrl(content.personas.image),
                            alt: "",
                            className: "project_illustration",
                          }}
                        />
                      ) : (
                        <Placeholder>
                          {content.personas.imagePlaceholder}
                        </Placeholder>
                      )}
                      <Caption>{content.personas.imageCaption}</Caption>
                    </section>

                    <section className='project_body' id='design-bu'>
                      <h2>Design for Business User</h2>
                      <h5>One Answer, Two Ways to Take it in</h5>

                      <p>
                        {renderRichText(
                          content.designForBU.researchFindings.intro
                        )}
                      </p>
                      {content.designForBU.researchFindings.image ? (
                        <ImageZoom
                          image={{
                            src: this.imageUrl(
                              content.designForBU.researchFindings.image
                            ),
                            alt: "",
                            className: "project_illustration",
                          }}
                        />
                      ) : (
                        <Placeholder>
                          {
                            content.designForBU.researchFindings
                              .imagePlaceholder
                          }
                        </Placeholder>
                      )}
                      <Caption>
                        {content.designForBU.researchFindings.imageCaption}
                      </Caption>
                      <p>{content.designForBU.researchFindings.question}</p>

                      <h6 style={{ margin: "48px 0 20px" }}>
                        {content.designForBU.graspInsights.heading}
                      </h6>
                      {content.designForBU.graspInsights.image ? (
                        <ImageZoom
                          image={{
                            src: this.imageUrl(
                              content.designForBU.graspInsights.image
                            ),
                            alt: "",
                            className: "project_illustration",
                          }}
                        />
                      ) : (
                        <Placeholder>
                          {content.designForBU.graspInsights.imagePlaceholder}
                        </Placeholder>
                      )}
                      <Caption>
                        {content.designForBU.graspInsights.imageCaption}
                      </Caption>
                      {content.designForBU.graspInsights.paragraphs.map(
                        (p, i) => (
                          <p key={i}>{renderRichText(p)}</p>
                        ),
                      )}

                      <h6 style={{ margin: "48px 0 20px" }}>
                        {content.designForBU.buildTrust.heading}
                      </h6>
                      <p>{content.designForBU.buildTrust.intro}</p>
                      {content.designForBU.buildTrust.image ? (
                        <ImageZoom
                          image={{
                            src: this.imageUrl(
                              content.designForBU.buildTrust.image
                            ),
                            alt: "",
                            className: "project_illustration",
                          }}
                        />
                      ) : (
                        <Placeholder>
                          {content.designForBU.buildTrust.imagePlaceholder}
                        </Placeholder>
                      )}
                      <Caption>
                        {content.designForBU.buildTrust.imageCaption}
                      </Caption>
                      {content.designForBU.buildTrust.moments.map(
                        (moment, i) => (
                          <div key={i} style={{ marginTop: "24px" }}>
                            <div className='project_overview_title'>
                              {i + 1}. {moment.title}
                            </div>
                            {moment.paragraphs &&
                              moment.paragraphs.map((p, j) => (
                                <p key={j}>{renderRichText(p)}</p>
                              ))}
                            {moment.quote && (
                              <Quote
                                text={moment.quote.text}
                                attribution={moment.quote.attribution}
                              />
                            )}
                            {moment.columns && (
                              <div
                                style={{
                                  display: "flex",
                                  gap: "45px",
                                  alignItems: "flex-start",
                                  marginTop: "16px",
                                }}
                              >
                                {moment.columns.map((col, k) => (
                                  <div key={k} style={{ flex: 1 }}>
                                    {col.gif ? (
                                      <div className='media_frame media_frame_bordered'>
                                        <ImageZoom
                                          image={{
                                            src: this.imageUrl(col.gif),
                                            alt: "",
                                            className:
                                              "project_illustration_bordered",
                                          }}
                                        />
                                      </div>
                                    ) : (
                                      col.gifPlaceholder && (
                                        <Placeholder gif>
                                          {col.gifPlaceholder}
                                        </Placeholder>
                                      )
                                    )}
                                    {col.gifCaption && (
                                      <Caption>{col.gifCaption}</Caption>
                                    )}
                                  </div>
                                ))}
                              </div>
                            )}
                            {moment.leftImage && (
                              <div style={{ marginTop: "16px" }}>
                                <TwoColumnMedia
                                  leftImageSrc={this.imageUrl(
                                    moment.leftImage
                                  )}
                                  rightLabel={moment.rightLabel}
                                  rightImageSrc={
                                    moment.rightImage
                                      ? this.imageUrl(moment.rightImage)
                                      : null
                                  }
                                  rightCode={moment.rightCode}
                                />
                                <Caption>{moment.imageCaption}</Caption>
                              </div>
                            )}
                            {!moment.leftImage && moment.image && (
                              <>
                                <ImageZoom
                                  image={{
                                    src: this.imageUrl(moment.image),
                                    alt: "",
                                    className: "project_illustration",
                                  }}
                                />
                                <Caption>{moment.imageCaption}</Caption>
                              </>
                            )}
                            {!moment.leftImage &&
                              !moment.image &&
                              moment.imagePlaceholder && (
                                <>
                                  <Placeholder>
                                    {moment.imagePlaceholder}
                                  </Placeholder>
                                  <Caption>{moment.imageCaption}</Caption>
                                </>
                              )}
                            {moment.paragraphs2 &&
                              moment.paragraphs2.map((p, j) => (
                                <p key={j}>{renderRichText(p)}</p>
                              ))}
                            {moment.gif && (
                              <>
                                <div className='media_frame media_frame_bordered'>
                                  <ImageZoom
                                    image={{
                                      src: this.imageUrl(moment.gif),
                                      alt: "",
                                      className: "project_illustration_bordered",
                                    }}
                                  />
                                </div>
                                <Caption>{moment.gifCaption}</Caption>
                              </>
                            )}
                            {!moment.gif && moment.gifPlaceholder && (
                              <>
                                <Placeholder gif>
                                  {moment.gifPlaceholder}
                                </Placeholder>
                                <Caption>{moment.gifCaption}</Caption>
                              </>
                            )}
                          </div>
                        ),
                      )}

                      <h6 style={{ margin: "48px 0 20px" }}>
                        {content.designForBU.otherExplorations.heading}
                      </h6>
                      {content.designForBU.otherExplorations.points.map(
                        (point, i) =>
                          point.layout === "twoColumn" ? (
                            <div key={i} style={{ marginTop: "24px" }}>
                              <div className='project_overview_title'>
                                {i + 1}. {point.title}
                              </div>
                              <div style={{ marginTop: "16px" }}>
                                <TwoColumnMedia
                                  leftContent={
                                    point.paragraph1 && (
                                      <p>
                                        {renderRichText(point.paragraph1)}
                                      </p>
                                    )
                                  }
                                  rightImageSrc={
                                    point.image
                                      ? this.imageUrl(point.image)
                                      : null
                                  }
                                  fixedHeight={500}
                                />
                                {point.imageCaption && (
                                  <Caption>{point.imageCaption}</Caption>
                                )}
                              </div>
                            </div>
                          ) : (
                            <div key={i} style={{ marginTop: "24px" }}>
                              <div className='project_overview_title'>
                                {i + 1}. {point.title}
                              </div>
                              {point.paragraphs &&
                                point.paragraphs.map((p, j) => (
                                  <p key={j}>{renderRichText(p)}</p>
                                ))}
                              {point.paragraph1 && (
                                <p>{renderRichText(point.paragraph1)}</p>
                              )}
                              {point.columns && (
                                <div
                                  style={{
                                    display: "flex",
                                    gap: "45px",
                                    alignItems: "flex-start",
                                    marginTop: "16px",
                                  }}
                                >
                                  {point.columns.map((col, k) => (
                                    <div key={k} style={{ flex: 1 }}>
                                      {col.gif ? (
                                        <div className='media_frame media_frame_bordered'>
                                          <ImageZoom
                                            image={{
                                              src: this.imageUrl(col.gif),
                                              alt: "",
                                              className:
                                                "project_illustration_bordered",
                                            }}
                                          />
                                        </div>
                                      ) : (
                                        col.gifPlaceholder && (
                                          <Placeholder gif>
                                            {col.gifPlaceholder}
                                          </Placeholder>
                                        )
                                      )}
                                      {col.gifCaption && (
                                        <Caption>{col.gifCaption}</Caption>
                                      )}
                                    </div>
                                  ))}
                                </div>
                              )}
                              {point.image ? (
                                <ImageZoom
                                  image={{
                                    src: this.imageUrl(point.image),
                                    alt: "",
                                    className: "project_illustration",
                                  }}
                                />
                              ) : (
                                point.imagePlaceholder && (
                                  <Placeholder>
                                    {point.imagePlaceholder}
                                  </Placeholder>
                                )
                              )}
                              {point.imageCaption && (
                                <Caption>{point.imageCaption}</Caption>
                              )}
                              {point.paragraph2 && (
                                <p>{renderRichText(point.paragraph2)}</p>
                              )}
                              {point.gif ? (
                                <div className='media_frame media_frame_bordered'>
                                  <ImageZoom
                                    image={{
                                      src: this.imageUrl(point.gif),
                                      alt: "",
                                      className: "project_illustration_bordered",
                                    }}
                                  />
                                </div>
                              ) : (
                                point.gifPlaceholder && (
                                  <Placeholder gif>
                                    {point.gifPlaceholder}
                                  </Placeholder>
                                )
                              )}
                              {point.gifCaption && (
                                <Caption>{point.gifCaption}</Caption>
                              )}
                            </div>
                          ),
                      )}
                    </section>

                    <section className='project_body' id='design-datapro'>
                      <h2>Design for Data Pro</h2>
                      <h5>Make Enablement & Enhancement Zero Friction</h5>
                      <p>{renderRichText(content.designForDataPro.intro)}</p>
                      {content.designForDataPro.sections.map((sec, i) => (
                        <div key={i} style={{ marginTop: "24px" }}>
                          {sec.label && (
                            <div className='project_overview_title'>
                              {sec.label}
                            </div>
                          )}
                          {sec.paragraphs &&
                            sec.paragraphs.map((p, j) => (
                              <p key={j}>{renderRichText(p)}</p>
                            ))}
                          {sec.gif && (
                            <>
                              <div
                                className='media_frame media_frame_bordered'
                                style={{ marginTop: "24px" }}
                              >
                                <ImageZoom
                                  image={{
                                    src: this.imageUrl(sec.gif),
                                    alt: "",
                                    className: "project_illustration_bordered",
                                  }}
                                />
                              </div>
                              {sec.gifCaption && (
                                <Caption>{sec.gifCaption}</Caption>
                              )}
                            </>
                          )}
                          {sec.blocks &&
                            sec.blocks.map((block, j) => (
                              <div
                                key={j}
                                style={{
                                  marginTop: "24px",
                                  marginBottom: "24px",
                                }}
                              >
                                {block.paragraph && (
                                  <p>{renderRichText(block.paragraph)}</p>
                                )}
                                {block.columns ? (
                                  <div
                                    style={{
                                      display: "flex",
                                      gap: "45px",
                                      alignItems: "flex-start",
                                      marginTop: "24px",
                                    }}
                                  >
                                    {block.columns.map((col, k) => (
                                      <div
                                        key={k}
                                        style={{ flex: col.flex || 1 }}
                                      >
                                        {col.label && (
                                          <div
                                            style={{
                                              fontFamily:
                                                "proxima-nova, sans-serif",
                                              fontWeight: 700,
                                              fontSize: "16px",
                                              marginBottom: "8px",
                                            }}
                                          >
                                            {col.label}
                                          </div>
                                        )}
                                        {col.gif || col.image ? (
                                          col.noBorder ? (
                                            <ImageZoom
                                              image={{
                                                src: this.imageUrl(
                                                  col.gif || col.image
                                                ),
                                                alt: "",
                                                className:
                                                  "project_illustration",
                                              }}
                                            />
                                          ) : (
                                            <div className='media_frame media_frame_bordered'>
                                              <ImageZoom
                                                image={{
                                                  src: this.imageUrl(
                                                    col.gif || col.image
                                                  ),
                                                  alt: "",
                                                  className:
                                                    "project_illustration_bordered",
                                                }}
                                              />
                                            </div>
                                          )
                                        ) : (
                                          col.gifPlaceholder && (
                                            <Placeholder gif={!!col.gif}>
                                              {col.gifPlaceholder}
                                            </Placeholder>
                                          )
                                        )}
                                        {(col.gifCaption || col.imgCaption) && (
                                          <Caption>
                                            {col.gifCaption || col.imgCaption}
                                          </Caption>
                                        )}
                                      </div>
                                    ))}
                                  </div>
                                ) : (
                                  <>
                                    {block.label && (
                                      <div
                                        style={{
                                          fontFamily:
                                            "proxima-nova, sans-serif",
                                          fontWeight: 700,
                                          fontSize: "16px",
                                          marginTop: "24px",
                                          marginBottom: "8px",
                                        }}
                                      >
                                        {block.label}
                                      </div>
                                    )}
                                    {block.gif ? (
                                      block.noBorder ? (
                                        <ImageZoom
                                          image={{
                                            src: this.imageUrl(block.gif),
                                            alt: "",
                                            className: "project_illustration",
                                          }}
                                        />
                                      ) : (
                                        <div className='media_frame media_frame_bordered'>
                                          <ImageZoom
                                            image={{
                                              src: this.imageUrl(block.gif),
                                              alt: "",
                                              className:
                                                "project_illustration_bordered",
                                            }}
                                          />
                                        </div>
                                      )
                                    ) : (
                                      block.gifPlaceholder && (
                                        <Placeholder gif>
                                          {block.gifPlaceholder}
                                        </Placeholder>
                                      )
                                    )}
                                    {block.gifCaption && (
                                      <Caption>{block.gifCaption}</Caption>
                                    )}
                                  </>
                                )}
                              </div>
                            ))}
                          {sec.columns && (
                            <div
                              style={{
                                display: "flex",
                                gap: "45px",
                                alignItems: "flex-start",
                                marginTop: "16px",
                              }}
                            >
                              {sec.columns.map((col, k) => (
                                <div key={k} style={{ flex: 1 }}>
                                  {col.gif ? (
                                    col.noBorder ? (
                                      <ImageZoom
                                        image={{
                                          src: this.imageUrl(col.gif),
                                          alt: "",
                                          className: "project_illustration",
                                        }}
                                      />
                                    ) : (
                                      <div className='media_frame media_frame_bordered'>
                                        <ImageZoom
                                          image={{
                                            src: this.imageUrl(col.gif),
                                            alt: "",
                                            className:
                                              "project_illustration_bordered",
                                          }}
                                        />
                                      </div>
                                    )
                                  ) : (
                                    col.gifPlaceholder && (
                                      <Placeholder gif>
                                        {col.gifPlaceholder}
                                      </Placeholder>
                                    )
                                  )}
                                  {col.gifCaption && (
                                    <Caption>{col.gifCaption}</Caption>
                                  )}
                                </div>
                              ))}
                            </div>
                          )}
                          {sec.outroBefore && (
                            <p style={{ marginTop: "24px" }}>
                              {sec.outroBefore}
                              <Link to={sec.outroLinkUrl}>
                                {sec.outroLinkText}
                              </Link>
                              {sec.outroAfter}
                            </p>
                          )}
                        </div>
                      ))}
                    </section>

                    <section className='project_body' id='impact'>
                      <h2>Outcome / Impact</h2>
                      {content.impact.paragraphs.map((p, i) => (
                        <p key={i}>{renderRichText(p)}</p>
                      ))}
                    </section>
                  </div>
                </Col>
              </Row>
            </div>
            <BackToTopBtn contents={contents} pagination={pagination} />
          </>
        )}

        <ProjectPagination pagination={pagination} />
      </>
    );
  }
}

export default DashboardAgent;
