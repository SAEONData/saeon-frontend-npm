import placeholder_grey from '../images/placeholder-grey.png'

export default {
	title: "Document Links",
	logoTop: { src: placeholder_grey, width: "45%" },
	logoBottom: { src: placeholder_grey, width: "60%" },
	nav: [
		{
			id: 1, text: "Section 1", children: [
				{ id: 11, window: "modal", text: "Link 1", link: "http://www.example.com" },
				{ id: 12, window: "modal", text: "Link 2", link: "http://www.example.com" },
				{ id: 13, window: "modal", text: "Link 3", link: "http://www.example.com" },
			]
		},
		{
			id: 2, text: "Section 2", children: [
				{ id: 21, window: "modal", text: "Link 4" },
				{ id: 22, window: "modal", text: "Link 5" },
				{ id: 22, window: "modal", text: "Link 6", link: "http://www.example.com" },
				{ id: 22, window: "modal", text: "Link 7", link: "http://www.example.com" },
				{ id: 22, window: "modal", text: "Link 8", link: "http://www.example.com" },
			]
		}
	]
}
