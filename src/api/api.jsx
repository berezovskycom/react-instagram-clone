const UsersAPI = {
	users: [
		{
			id: 1,
			nickname: "samburskaya",
			title: "НАСТАСЬЯ СамбурскАя",
			desc: "Светская Илита. Сотрудничество +7(495)6423022",
			img: "https://instagram.fhen1-1.fna.fbcdn.net/vp/6858da136f5534d98ad8bb8a9496e181/5AEB7821/t51.2885-19/s150x150/26222770_2098374907063995_1280005532446359552_n.jpg",
			link: "https://www.instagram.com/samburskaya/"
		},
		{
			id: 2,
			nickname: "borodylia",
			title: "Ксения Бородина",
			desc: "Сотрудничество: ведение мероприятий - Табриз: +79852267676, pr@tabriz.ru; Реклама 🦁- Лев: +79263224344, borodina.pr@gmail.com; TV HOST, blogger ❤",
			img: "https://instagram.fhen1-1.fna.fbcdn.net/vp/2bb9da584eee059b7804ef0ef97731bd/5B2461EB/t51.2885-19/s150x150/25036406_134060023940474_5620353272507269120_n.jpg",
			link: "https://www.instagram.com/borodylia/"
		},
		{
			id: 3,
			nickname: "victoriassecret",
			title: "Victoria's Secret",
			desc: "The official account for Victoria's Secret.",
			img: "https://instagram.fhen1-1.fna.fbcdn.net/vp/68821e50b5c20e6282e7f8306ef378b4/5AE478A1/t51.2885-19/11373751_810224469095258_1164651624_a.jpg",
			link: "https://www.instagram.com/victoriassecret/"
		},
		{
			id: 4,
			nickname: "kourtneykardash",
			title: "Kourtney Kardashian",
			desc: "",
			img: "https://instagram.fhen1-1.fna.fbcdn.net/vp/a40cf4501b8c34955f5d340683975356/5B06CCBE/t51.2885-19/s150x150/17662225_236384403500667_2148968091776712704_a.jpg",
			link: "https://www.instagram.com/kourtneykardash/"
		},
		{
			id: 5,
			nickname: "instagram",
			title: "Instagram",
			desc: "Discovering — and telling — stories from around the world. Curated by Instagram’s community team.",
			img: "https://instagram.fhen1-1.fna.fbcdn.net/vp/77b28f9baf682fad4965464924ee7157/5B002F5B/t51.2885-19/s150x150/14719833_310540259320655_1605122788543168512_a.jpg",
			link: "https://www.instagram.com/instagram/"
		},
		{
			id: 6,
			nickname: "theellenshow",
			title: "Ellen",
			desc: "",
			img: "https://instagram.fhen1-1.fna.fbcdn.net/vp/6d89021efcc365ff4d825a4c667731ca/5B1E8C92/t51.2885-19/s150x150/24845855_807839982735833_7481075328681508864_n.jpg",
			link: "https://www.instagram.com/theellenshow/"
		},
		{
			id: 7,
			nickname: "marvel",
			title: "Marvel Entertainment",
			desc: "The official Instagram for Marvel comics, movies, games, and more.",
			img: "https://instagram.fhen1-1.fna.fbcdn.net/vp/4649cb5f4c6c01c16d8618ab04086838/5AF45F29/t51.2885-19/11007912_807640775983280_1278253375_a.jpg",
			link: "https://www.instagram.com/marvel/"
		},
		{
			id: 8,
			nickname: "katyperry",
			title: "KATY PERRY",
			desc: "",
			img: "https://instagram.fhen1-1.fna.fbcdn.net/vp/c8a71f6e7f9f81c6b42bfba19aadc291/5B2504A6/t51.2885-19/s150x150/21107657_1953700014876535_7007316203727224832_a.jpg",
			link: "https://www.instagram.com/katyperry/"
		},
		{
			id: 9,
			nickname: "lesia_nikituk",
			title: "Леся Никитюк",
			desc: "Official page Any questions: +380(98) 46 306 48 Pr. Диана lesianikitiuk@gmail.com",
			img: "https://instagram.fhen1-1.fna.fbcdn.net/vp/a32e78b311421a28e4f6bae1ad6d249f/5AE28A78/t51.2885-19/s150x150/24845134_1787546507984144_2641009835948113920_n.jpg",
			link: "https://www.instagram.com/lesia_nikituk/"
		},
		{
			id: 10,
			nickname: "kateclapp",
			title: "Kate Clapp / Катя Клэп",
			desc: "Epic Russian🗿 http://www.youtube.com/user/FoggyDisaster http://www.youtube.com/user/TheKateClapp kateclappmail@gmail.com",
			img: "https://instagram.fhen1-1.fna.fbcdn.net/vp/e553b76e01ac3476b7ab84eed6cc83a3/5AED6C01/t51.2885-19/s150x150/16790128_1642993126007004_5915586945022427136_a.jpg",
			link: "https://www.instagram.com/kateclapp/"
		}										
	],
	all: function() { return this.users},
	get: function(id) {
		const isUser = u => u.id === id;
		return this.users.find(isUser);
	}
};

const ProfileAPI = {
	profilePics: [
		{
			id: 6,
			src: 'https://instagram.fhen1-1.fna.fbcdn.net/vp/b48e071b4ab55e0a41718bdf85a04f81/5B026C20/t51.2885-15/s640x640/sh0.08/e35/c0.134.1080.1080/24845213_1478190562300196_1277547406698741760_n.jpg',
			link: 'https://www.instagram.com/p/Bcc0hnmgsqS/?taken-by=kevin',
			desc: '',
			likes: '5,591',
			comments: '196'
		},	
		{
			id: 5,
			src: 'https://instagram.fhen1-1.fna.fbcdn.net/vp/ce053b69cc6a61c192d84c4244e5df73/5B078C0D/t51.2885-15/s640x640/sh0.08/e35/c0.124.1080.1080/19533540_1990764704480206_118407231828918272_n.jpg',
			link: 'https://www.instagram.com/p/BVv55XSAeiG/?taken-by=kevin',
			desc: '',
			likes: '4,323',
			comments: '120'		
		},
		{
			id: 1,
			src: 'https://instagram.fhen1-1.fna.fbcdn.net/vp/19546bc3e57993895a9d38e8f474915c/5AEFCF47/t51.2885-15/s640x640/sh0.08/e35/21107495_115210579144394_4771526615077224448_n.jpg',
			link: 'https://www.instagram.com/p/BYJ9F4rACF5/?taken-by=kevin',
			likes: '2.912',
			comments: '103'			
		}	
	],
	all: function() { return this.profilePics },
	get: function(id) {
		const isPic = p => p.id === id;
		return this.profilePics.find(isPic);
	}	
}

const ExploreAPI = {
	explorePicsOne: [
		{
			id: 9,
			src: 'https://instagram.fhen1-1.fna.fbcdn.net/vp/d382ee42cc1fdff4de323f191a1d31b5/5B26C66D/t51.2885-15/s640x640/sh0.08/e35/c0.135.1080.1080/26869638_183287242425124_884986042929643520_n.jpg',
			link: 'https://www.instagram.com/verge/?hl=en',
			likes: '5,645',
			comments: '48'
		},
		{
			id: 8,
			src: 'https://instagram.fhen1-1.fna.fbcdn.net/vp/c71bed7f159e91108e2461b8ce0ebf60/5B02A4C7/t51.2885-15/s640x640/sh0.08/e35/c0.135.1080.1080/26073394_404121360042787_1631304359423770624_n.jpg',
			link: 'https://www.instagram.com/p/Bd8ia5OBne_/?hl=en&taken-by=ford',
			likes: '126k',
			comments: '964'
		},
		{
			id: 7,
			src: 'https://instagram.fhen1-1.fna.fbcdn.net/vp/79b04874c1f995764114afd2e9f9ad00/5B039BD8/t51.2885-15/s640x640/sh0.08/e35/26340787_2026488744232085_9125941120356843520_n.jpg',
			link: 'https://www.instagram.com/p/BeV8mCqFvFi/?hl=en&taken-by=katyperry',
			likes: '195k',
			comments: '1,123'
		}
	],
	explorePicsTwo: [
		{
			id: 6,
			src: 'https://instagram.fhen1-1.fna.fbcdn.net/vp/49126a6b06ae96753d7093802775f3b5/5B019826/t51.2885-15/s640x640/sh0.08/e35/c0.134.1080.1080/24846064_138465986937521_8637211723683594240_n.jpg',
			link: 'https://www.instagram.com/p/BdD6fIcBqe4/?hl=en&taken-by=sanfrancisco',
			likes: '7,808',
			comments: '33'
		},
		{
			id: 5,
			src: 'https://instagram.fhen1-1.fna.fbcdn.net/vp/1831b4a50277effec83e8af68be0b498/5AE2465C/t51.2885-15/s640x640/sh0.08/e35/c0.135.1080.1080/26152500_2093319120888249_7498323118478327808_n.jpg',
			link: 'https://www.instagram.com/p/BdWevhWndqW/?hl=en&taken-by=skrillex',
			likes: '198k',
			comments: '1,288'
		},
		{
			id: 4,
			src: 'https://instagram.fhen1-1.fna.fbcdn.net/vp/133fb618c6e85c693597ba6dbefaef27/5AF19BE7/t51.2885-15/s640x640/sh0.08/e35/c0.105.1080.1080/23735447_156326088311575_7650069256553365504_n.jpg',
			link: 'https://www.instagram.com/p/BbubYOFBy_3/?hl=en&taken-by=margotrobbie',
			likes: '1m',
			comments: '5,755'
		}
	],
	explorePicsThree: [
		{
			id: 3,
			src: 'https://instagram.fhen1-1.fna.fbcdn.net/vp/b654ef6ef2acdef3b5fa2fc5160b8b6f/5AE48811/t51.2885-15/s640x640/sh0.08/e35/c0.117.937.937/25011618_1818723398200725_6940556945770151936_n.jpg',
			link: 'https://www.instagram.com/p/Bc9JLK8Bktz/?hl=en&taken-by=yungspliff',
			likes: '8,303',
			comments: '149'
		},
		{
			id: 2,
			src: 'https://instagram.fhen1-1.fna.fbcdn.net/vp/a42852d55914ae16d5ccc95592957f38/5B1E296D/t51.2885-15/s640x640/sh0.08/e35/26285295_1944537679097300_831045819242119168_n.jpg',
			link: 'https://www.instagram.com/p/BeE0uliH0Q2/?hl=en&taken-by=adidasoriginals',
			likes: '108k',
			comments: '662'
		},
		{
			id: 1,
			src: 'https://instagram.fhen1-1.fna.fbcdn.net/vp/dc5208ae22e8fd369bbc8c46e7d0ce8d/5B212B90/t51.2885-15/s640x640/sh0.08/e35/c0.135.1080.1080/26276490_159091898209858_8516621162409623552_n.jpg',
			link: 'https://www.instagram.com/p/BeQwpQJF_Fp/?hl=en&taken-by=ddlovato',
			likes: '1.4m',
			comments: '9,625'
		}														
	],
	allOne: function() { return this.explorePicsOne},
	allTwo: function() { return this.explorePicsTwo},
	allThree: function() { return this.explorePicsThree},

	discoverBlock: [
		{
			id: 1,
			nickname: "victoriassecret",
			title: "Victoria's Secret",
			desc: "The official account for Victoria's Secret.",
			img: "https://instagram.fhen1-1.fna.fbcdn.net/vp/68821e50b5c20e6282e7f8306ef378b4/5AE478A1/t51.2885-19/11373751_810224469095258_1164651624_a.jpg",
			link: "https://www.instagram.com/victoriassecret/"
		},
		{
			id: 2,
			nickname: "kourtneykardash",
			title: "Kourtney Kardashian",
			desc: "",
			img: "https://instagram.fhen1-1.fna.fbcdn.net/vp/a40cf4501b8c34955f5d340683975356/5B06CCBE/t51.2885-19/s150x150/17662225_236384403500667_2148968091776712704_a.jpg",
			link: "https://www.instagram.com/kourtneykardash/"
		},
		{
			id: 3,
			nickname: "instagram",
			title: "Instagram",
			desc: "Discovering — and telling — stories from around the world. Curated by Instagram’s community team.",
			img: "https://instagram.fhen1-1.fna.fbcdn.net/vp/77b28f9baf682fad4965464924ee7157/5B002F5B/t51.2885-19/s150x150/14719833_310540259320655_1605122788543168512_a.jpg",
			link: "https://www.instagram.com/instagram/"
		}
	],
	allDiscover: function() { return this.discoverBlock }
}

export { UsersAPI, ProfileAPI, ExploreAPI };