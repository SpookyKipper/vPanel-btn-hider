function sidebarhide() {
	if (document.getElementById("sidebar") != null) {

		var sidebar = document.getElementById("sidebar"); //.style.display = "none"; //Remove Sidebar
		sidebar.parentNode.removeChild(sidebar);
		var mblesidebar = document.getElementById("btnSideBarToggle"); //.style.display = "none"; //Remove Sidebar Button on Mobile
		mblesidebar.parentNode.removeChild(mblesidebar);

		document.getElementById("imgPoweredByCpanel").style.display = "none"; //


	} else {
		setTimeout(sidebarhide, 100);
	}
}

function customisations() {


	if (document.getElementById("item_attracta_seotips") != null) {

		var element1 = document.querySelector("#software-body > div:nth-child(3)"); // hide SEO Tools - remove to unhide (its so old and outdated and 2012)
		element1.parentNode.removeChild(element1);



		var element5 = document.querySelector("#software-body > div:nth-child(1)"); // hide sitebuilder - remove to unhide (although it was shut down)
		element5.parentNode.removeChild(element5);




		var element11 = document.querySelector("#email-body > div:nth-child(5)"); // Webmail
		element11.parentNode.removeChild(element11);

		var element9 = document.querySelector("#email-body > div:nth-child(2)"); // ^^^
		element9.parentNode.removeChild(element9);

		var element7 = document.querySelector("#email-body > div:nth-child(1)"); // hide emailaccounts - remove to unhide (although it is paid)
		element7.parentNode.removeChild(element7);




		var element13 = document.querySelector("#databases-body > div:nth-child(4)"); // hide postgresql databases - remove to unhide (although it is paid)
		element13.parentNode.removeChild(element13);

		var element16 = document.querySelector("#databases-body > div:nth-child(3)"); // hide remotemysql - remove to unhide (it is paid, not applicable in free hosting)
		element16.parentNode.removeChild(element16);



		var element19 = document.querySelector("#preferences-body > div:nth-child(3)"); // hide change email - remove to unhide
		element19.parentNode.removeChild(element19);

		var element17 = document.querySelector("#preferences-body > div:nth-child(2)"); // hide change language - remove to unhide
		element17.parentNode.removeChild(element17);

		var element18 = document.querySelector("#preferences-body > div:nth-child(1)"); // hide change password - remove to unhide
		element18.parentNode.removeChild(element18);

		var element21 = document.querySelector("#metrics-body > div:nth-child(4)"); // hide access logs (its trash and no use) - remove to unhide
		element21.parentNode.removeChild(element21);


		var element20 = document.querySelector("#metrics-body > div:nth-child(2)"); // hide error logs (its trash and no use) - remove to unhide
		element20.parentNode.removeChild(element20);


		var element22 = document.querySelector("#soft_div-body > div"); // hide duplicated softaculous - remove to unhide
		element22.parentNode.removeChild(element22);

		var element23 = document.querySelector("#boxes > div:nth-child(11)"); // hide duplicated softaculous - remove to unhide
		element23.parentNode.removeChild(element23);



		document.getElementById("item_file_manager").href = document.getElementById("item_file_manager").href.replace("http://", "https://");
		// ^^^ Replace File manager link to https


	} else {
		setTimeout(customisations, 100);
	}
}

function AddonDomainsHideSiteBuilderBtn() {
	const queryString = window.location.search;
	const urlParams = new URLSearchParams(queryString);
	const page = urlParams.get('option');



	if (page == "domains") {

		const btn = document.querySelectorAll('#subdomaintbl > tbody > tr > td > .btn-primary');
		console.log(btn.length);
		for (let i = 0; i < btn.length * 2; i++) {
			//if (btn.item(i).value == "SiteBuilder" || btn.item(i).value == "Site Builder") {
			btn.item(i).parentNode.removeChild(btn.item(i));
			//}
			i = i + 1;

		}
	} else if (page == "subdomains") {

		const btn = document.querySelectorAll("#subdomaintbl > tbody:nth-child(2) > tr > td > input.btn.btn-primary");
		console.log(btn.length);
		for (let i = 0; i < btn.length; i++) {
			//if (btn.item(i).value == "SiteBuilder" || btn.item(i).value == "Site Builder") {
			btn.item(i).parentNode.removeChild(btn.item(i));
			//}
		}
	}
}





setTimeout(sidebarhide, 100);
setTimeout(customisations, 100);
setTimeout(AddonDomainsHideSiteBuilderBtn, 100);
