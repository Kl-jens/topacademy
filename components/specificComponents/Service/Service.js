﻿import React, { Component } from "react";
import css from "./service.module.scss";
import Headermenu from "../../genericComponents/Headermenu/Headermenu";
import Hero from "../../genericComponents/Hero/Hero";
import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import { RichTextToHTML } from "../../../functions/storyBlokRichTextRenderer";
import moment from 'moment'; // If you're using moment.js

export default class service extends Component {

	constructor(props) {
		super(props);
		this.props.blok.title = this.props.blok.firstname + " " + this.props.blok.lastname
		this.props.blok.tagline = "Location: " + this.props.blok.location;
	}

	render() {
		return (
			<div {...storyblokEditable(this.props.blok)}>
				<Headermenu blok={this.props.menu.content}></Headermenu>

				<main>
					<Hero blok={this.props.blok} contentTypeTag="course" />
					<div className={css["service-page__main-content"]}>
					<div id="service-page__short-description" key="service-page__short-description" className={css["service-page__short-description"]}>
							<section className={css["rich-text-section--with-navigator"]}>
								<h2 className={css["rich-text-section__title"]}>Date of Birth</h2>
								<div className={css["rich-text-section__rich-text"]}>{RichTextToHTML({ document: moment(this.props.blok.dateofbirth).format('YYYY-MM-DD') })}</div>
							</section>
						</div>
						<div id="service-page__short-description" key="service-page__short-description" className={css["service-page__short-description"]}>
							<section className={css["rich-text-section--with-navigator"]}>
								<h2 className={css["rich-text-section__title"]}>My Life</h2>
								<div className={css["rich-text-section__rich-text"]}>{RichTextToHTML({ document: this.props.blok.bio })}</div>
							</section>
						</div>
						<div id="service-page__short-description" key="service-page__short-description" className={css["service-page__short-description"]}>
							<section className={css["rich-text-section--with-navigator"]}>
							<h2 className={css["rich-text-section__title"]}>Experience</h2>
								{this.props.blok.experiences && this.props.blok.experiences.map((nestedBlok) => (
									<StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
								))}
							</section>
						</div>
					</div>

				</main>
			</div>
		);

	}
}