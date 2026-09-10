import React from "react";
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
    id: "#intro",
    name: "The Problem",
  },
  {
    id: "#research",
    name: "What is knowledge",
  },
  {
    id: "#insight",
    name: "The Nature of Knowledge",
  },
  {
    id: "#design",
    name: "Design",
  },
  {
    id: "#impact",
    name: "Outcome / Impact",
  },
];

const TOKEN_KEY = "aireadiness_token";

// Lets case-study.json mark bold words with **like this** without embedding HTML.
function renderRichText(text) {
  if (!text) return text;
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, i) => {
    const match = part.match(/^\*\*([^*]+)\*\*$/);
    return match ? <strong key={i}>{match[1]}</strong> : part;
  });
}

class AIReadiness extends React.Component {
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
    fetch("/api/aireadiness/content", {
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
    return `/api/aireadiness/image?file=${encodeURIComponent(filename)}&token=${encodeURIComponent(this.state.token)}`;
  }

  render() {
    const pagination = this.props.pagination;
    const { authed, checking, content } = this.state;
    return (
      <>
        <ScrollToTopOnMount />
        <div className='project_head_container'>
          <section className='project_head'>
            <h1>Knowledge for Tableau Agent</h1>
            <h3>Help teams to build and maintain knowledge for AI/BI Agent.</h3>
            <div className='project_info'>
              March 2026 - Present, Work Project
            </div>
          </section>
        </div>

        {!authed && !checking && (
          <PasswordGate
            onSuccess={this.handleGateSuccess}
            authEndpoint='/api/aireadiness/auth'
            tokenStorageKey={TOKEN_KEY}
          />
        )}

        {authed && content && (
          <>
            <div className='project_separator_transparent'>
              <img
                className='project_headerImg'
                src={
                  process.env.PUBLIC_URL + "/images/AIReadiness/head-img.jpg"
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
                      <li style={{ fontSize: "inherit", margin: 0 }}>
                        Design - Started in Mar. 2026
                      </li>
                      <li style={{ fontSize: "inherit", margin: 0 }}>
                        1st SP - Business Preference Editor (MVP) in authoring -
                        GA in Oct. 2026
                      </li>
                      <li style={{ fontSize: "inherit", margin: 0 }}>
                        2nd SP - Visibility for AI & Business Preference Inline
                        Editor in authoring - Planned for Jan. 2027
                      </li>
                      <li style={{ fontSize: "inherit", margin: 0 }}>
                        Other features are on the future roadmap
                      </li>
                    </ul>
                  </div>
                </Col>
                <Col sm={12} md={4}>
                  <div className='project_overview_title'>Teammates</div>
                  <div className='project_overview_content'>
                    I collaborated with a senior product designer, various
                    product managers on the original brainstorming of the
                    project. I worked with 1 scrum team on the first ship point.
                    The project has also gotten feedback and inputs from various
                    product designers and managers on the Tableau and Tableau
                    Next teams.
                  </div>
                </Col>
              </Row>
            </div>

            <div className='project_separator' id='solution'>
              <div className='project_separator_inner_wrapper'>
                <h2>Solution</h2>
                <h5>Final Design</h5>
                <Row>
                  {content.solution.items.map((item, i) => (
                    <Col xs={4} key={i}>
                      <ImageZoom
                        image={{
                          src: this.imageUrl(item.image),
                          alt: "",
                          className: "project_illustration",
                        }}
                      />
                      <div className='project_caption text-center'>
                        <strong>{item.title}</strong>: {item.desc}
                      </div>
                    </Col>
                  ))}
                </Row>
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
                    <section className='project_body' id='intro'>
                      <div id='scrollstart'></div>
                      <h2>The Problem</h2>
                      <h5>AI Agent has the Numbers, not the Knowledge</h5>
                      <p>{renderRichText(content.intro.lead)}</p>
                      {content.intro.list.map((item, i) => (
                        <div className='project_quote_sm' key={i}>
                          <div className='project_quote_sm_wrapper'>
                            <div className='project_quote_sm_text'>
                              "{renderRichText(item)}"
                            </div>
                          </div>
                        </div>
                      ))}
                      {content.intro.paragraphs.map((p, i) => (
                        <p key={i}>{renderRichText(p)}</p>
                      ))}
                    </section>

                    <section className='project_body' id='research'>
                      <h2>Research</h2>
                      <h5>What is "Knowledge"?</h5>
                      <p>
                        {renderRichText(content.research.before)}
                        <i>{renderRichText(content.research.italic)}</i>
                        {renderRichText(content.research.after)}
                      </p>
                      <ImageZoom
                        image={{
                          src: this.imageUrl(content.research.image),
                          alt: "",
                          className: "project_illustration",
                        }}
                      />
                      <div className='p_caption'>
                        {renderRichText(content.research.imageCaption)}
                      </div>
                    </section>

                    <section className='project_body' id='insight'>
                      <h2>Research</h2>
                      <h5>The Nature of "Knowledge"</h5>
                      <p>{renderRichText(content.insight.paragraph1)}</p>

                      <div
                        style={{
                          display: "flex",
                          flexWrap: "wrap",
                          gap: "24px",
                          marginTop: "40px",
                          marginBottom: "40px",
                        }}
                      >
                        {content.insight.cards.map((card, i) => (
                          <div
                            key={i}
                            style={{
                              flex: "1 1 0",
                              minWidth: "400px",
                              display: "flex",
                              flexDirection: "column",
                            }}
                          >
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "8px",
                                width: "100%",
                              }}
                            >
                              <h6 style={{ margin: 0 }}>{card.title}</h6>
                              <p className='p_small' style={{ margin: 0 }}>
                                {renderRichText(card.desc)}
                              </p>
                            </div>
                            <ImageZoom
                              image={{
                                src: this.imageUrl(card.image),
                                alt: "",
                                className: "project_illustration",
                              }}
                            />
                            <div className='p_caption'>
                              {renderRichText(card.imageCaption)}
                            </div>
                          </div>
                        ))}
                      </div>

                      <p>{renderRichText(content.insight.paragraph2)}</p>

                      <p>{renderRichText(content.insight.paragraph3)}</p>
                    </section>

                    <section className='project_body' id='design'>
                      <h2>Design</h2>
                      <h5>
                        How might we help teams build and maintain the knowledge
                        for AI?
                      </h5>

                      <h6>3 Persona 3 Workflows</h6>
                      <p>{renderRichText(content.design.personasIntro)}</p>
                      <div
                        style={{
                          display: "flex",
                          flexWrap: "wrap",
                          gap: "24px",
                          marginTop: "16px",
                        }}
                      >
                        {content.design.personas.map((persona, i) => (
                          <div
                            key={i}
                            style={{
                              flex: "1 1 220px",
                              display: "flex",
                              flexDirection: "column",
                            }}
                          >
                            <div className='project_overview_title'>
                              {persona.role}
                            </div>
                            <div className='p_small'>
                              {renderRichText(persona.desc)}
                            </div>
                            <ImageZoom
                              image={{
                                src: this.imageUrl(persona.image),
                                alt: "",
                                className: "project_illustration",
                              }}
                            />
                            <div className='p_caption'>
                              {renderRichText(persona.imageCaption)}
                            </div>
                          </div>
                        ))}
                      </div>

                      <h6>See Every Layer in One Place</h6>
                      <p>{renderRichText(content.design.layer.desc)}</p>
                      <ImageZoom
                        image={{
                          src: this.imageUrl(content.design.layer.image),
                          alt: "",
                          className: "project_illustration",
                        }}
                      />
                      <div className='p_caption'>
                        {renderRichText(content.design.layer.imageCaption)}
                      </div>

                      <h6>Bootstrap with Upload and AI Suggestions</h6>
                      <p>{renderRichText(content.design.bootstrap.desc)}</p>
                      {content.design.bootstrap.images.map((img, i) => (
                        <React.Fragment key={i}>
                          <ImageZoom
                            image={{
                              src: this.imageUrl(img),
                              alt: "",
                              className: "project_illustration",
                            }}
                          />
                          <div className='p_caption'>
                            {renderRichText(
                              content.design.bootstrap.imageCaptions[i],
                            )}
                          </div>
                        </React.Fragment>
                      ))}

                      <h6>Share to Co-Review</h6>
                      <p>{renderRichText(content.design.share.desc)}</p>
                      <ImageZoom
                        image={{
                          src: this.imageUrl(content.design.share.image),
                          alt: "",
                          className: "project_illustration",
                        }}
                      />
                      <div className='p_caption'>
                        {renderRichText(content.design.share.imageCaption)}
                      </div>

                      <h6>Keep Knowledge Fresh</h6>
                      <p>{renderRichText(content.design.maintain.desc)}</p>
                      {content.design.maintain.images.map((img, i) => (
                        <React.Fragment key={i}>
                          <ImageZoom
                            image={{
                              src: this.imageUrl(img),
                              alt: "",
                              className: "project_illustration",
                            }}
                          />
                          <div className='p_caption'>
                            {renderRichText(
                              content.design.maintain.imageCaptions[i],
                            )}
                          </div>
                        </React.Fragment>
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

export default AIReadiness;
