import placeholder_grey from '../../images/placeholder-grey.png'

export default {
	title: "Document Links",
	logoTop: { src: placeholder_grey, width: "45%" },
	logoBottom: { src: placeholder_grey, width: "60%" },
	nav: [
		{
			text: "Section 1", 
			children: [
				{ window: "external", text: "Link 1", link: "http://www.example.com" },
				{ window: "external", text: "Link 2", link: "http://www.example.com" },
				{ window: "external", text: "Link 3", link: "http://www.example.com" },
			]
		},
		{
			text: "Section 2", 
			children: [
				{ window: "external", text: "Link 4" },
				{ window: "external", text: "Link 5" },
				{ window: "external", text: "Link 6", link: "http://www.example.com" },
				{ window: "external", text: "Link 7", link: "http://www.example.com" },
				{ window: "external", text: "Link 8", link: "http://www.example.com" },
			]
		}
	]
}
