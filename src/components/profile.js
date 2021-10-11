import React from "react"
import styled from "styled-components"
import {Link} from "gatsby"
import { FontAwesomeIcon as Fa } from '@fortawesome/react-fontawesome';
import { faUserCircle, faAt, faMapMarkerAlt, faLink, faAddressCard, faRss } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

let config = {
	comment: '',
	name: 'Ula Chao',
	company: '',
	location: 'Taiwan',
	email: 'gary0626@gmail.com',
	website: '',
	linkedin: '',
	facebook: '',
	instagram: 'http://instagram.com/ulayab',
	github: 'https://github.com/ulayab'
}
export default function Profile() {
	const { comment, name, company, location, email, website, linkedin, facebook, instagram, github } = config;

	return(
		<Wrapper>
			<div className="bio">
				{!comment ? null : <span className="comment">{comment}</span>}
	
				{!name ? null : (
					<div className="bio-item name">
						<div className="icon-wrap">
							<Fa icon={faUserCircle} />
						</div>
						<span>{name}</span>
					</div>
				)}
	
				{!company ? null : (
					<div className="bio-item company">
						<div className="icon-wrap">
							<Fa icon={faAddressCard} />
						</div>
						<span>{company}</span>
					</div>
				)}
	
				{!location ? null : (
					<div className="bio-item location">
						<div className="icon-wrap">
							<Fa icon={faMapMarkerAlt} />
						</div>
						<span>{location}</span>
					</div>
				)}
	
				{!email ? null : (
					<div className="bio-item email">
						<div className="icon-wrap">
							<Fa icon={faAt} />
						</div>
						<a href={`mailto:${email}`}>{email}</a>
					</div>
				)}
	
				{!website ? null : (
					<div className="bio-item website">
						<div className="icon-wrap">
							<Fa icon={faLink} />
						</div>
	
						<a href={website} target="_blank" rel="noopener noreferrer">
							{website}
						</a>
					</div>
				)}
	
				<div className="social">
					<a href={`${config.siteUrl}/rss`} target="_blank" rel="noopener noreferrer">
						<Fa icon={faRss} className="rss" />
					</a>
	
					{!linkedin ? null : (
						<a href={linkedin} target="_blank" rel="noopener noreferrer">
							<Fa icon={faLinkedin} className="linkedin" />
						</a>
					)}
	
					{!facebook ? null : (
						<a href={facebook} target="_blank" rel="noopener noreferrer">
							<Fa icon={faFacebook} className="facebook" />
						</a>
					)}
					{!instagram ? null : (
						<a href={instagram} target="_blank" rel="noopener noreferrer">
							<Fa icon={faInstagram} className="instagram" />
						</a>
					)}
					{!github ? null : (
						<a href={github} target="_blank" rel="noopener noreferrer">
							<Fa icon={faGithub} className="github" />
						</a>
					)}
				</div>
			</div>
		</Wrapper>
		);
}

const Wrapper = styled.div`
	& .avatar {
		background-color: #eee;
		width: 50px;
		height: 50px;
		border-radius: 25px;
	}

	.bio {
  min-width: 14rem;
  width: 14rem;
  margin-left: 2rem;

  p,
  span {
    display: block;
    margin: 0;
    font-size: 0.9rem;
  }

  .bio-item {
    margin-bottom: 0.8rem;
    display: flex;
    font-size: 0.9rem;

    .icon-wrap {
      display: inline-flex;
      font-size: 0.9rem;
      margin-right: 0.4rem;
      min-width: 1.1rem;
      width: 1.1rem;
      justify-content: center;

      svg {
        height: 0.9rem;
        margin-top: 1px;
        opacity: 0.9;
      }
    }

    & > :nth-child(2) {
      line-height: 1.1;
      overflow: hidden;
    }

    &.name,
    &.company,
    &.location {
      cursor: default;
    }
  }

  .comment {
    margin-bottom: 1rem;
  }

  .social {
    display: flex;
    margin-left: 0.2rem;
    margin-top: 2rem;

    a {
      display: inline-flex;
      font-size: 1.3rem;
      margin-right: 0.5rem;

      .linkedin,
      .facebook,
      .instagram,
      .github,
      .rss {
        width: 1.2rem;
        transition: color 0.3s;
      }

      &:hover {
        .rss {
          color: rgb(226, 143, 72) !important;
        }
        .linkedin {
          color: #0077b5 !important;
        }
        .facebook {
          color: #1877f2 !important;
        }
        .instagram {
          color: #e4405f !important;
        }
        .github {
          color: #999 !important;
        }
      }
    }
  }
}

`
