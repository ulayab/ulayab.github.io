import React from "react"
import styled from "styled-components"
import {Link} from "gatsby"

export default function Profile() {
	return(
		<Wrapper>
			<div className="row">
				<div className="avatar" style={{ marginRight: 10}}/>
				<p>Ula Chao</p>
			</div>
			<p>Front-end Developer. </p>
			<p>Taiwan</p>
			<p>gary0626@gmail.com</p>
			<p></p>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	& .avatar {
		background-color: #eee;
		width: 50px;
		height: 50px;
		border-radius: 25px;
	}
`
