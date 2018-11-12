import React, { Component } from "react"

// TabBar component renders Types of list to be rendered,
// Whether list if for now showing or top rated movies
class TabBar extends Component {
	constructor(props) {
		super(props)

		//bind events
		this.onTabChange = this.onTabChange.bind(this)
		this.state = { selectedType: this.props.selectedType }
	}

	onTabChange(event) {
		const selectedType = event.target.getAttribute("data-type")

		this.setState({selectedType: selectedType})
		
		// Let the parent know about the changes
		if (this.props.onTabSelected) {
		  this.props.onTabSelected(selectedType)
		}
	}
	
	render() {
		const { selectedType } = this.state,
			isNowShowingSelected = selectedType === "now_showing",
			isTopRatedSelected = selectedType === "top_rated"

			return (
				<div>
				<span data-type="now_showing" onClick={this.onTabChange} className={`tab ${isNowShowingSelected ? "selected" : ""}`}>Now Showing</span>
				<span data-type="top_rated" onClick={this.onTabChange} className={`tab ${isTopRatedSelected ? "selected" : ""}`}>Top Rated</span>
				</div>
			);

	}
}

export default TabBar