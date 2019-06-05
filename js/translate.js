var dictionary = {
	ar: {
		site_name: 'تكَّه',
		result_message: 'هذا هو رابطك',
		result_close: 'العودة لانشاء الرابط',

		email_input: 'الايميل',
		email_option_send: 'ارسال الرابط الى',
		email_option_not_send: 'عدم ارسال الرابط',
		btn_moreOptions: 'خيارات اكثر',
		moreOptions_title: 'خيارات',
		moreOptions_subTitle: 'رابط خاص',
		customLink_info: 'استخدم "-" او "_" بدلا من المسافة',
		btn_customLink: 'حفظ التغييرات',
		btn_resetAll: 'مسح الكل',
		conform_resetAll: 'هل تود مسح جميع البيانات؟',
		btn_generateLink: 'انشاء الرابط',
		conform_generateLink: 'سوف يتم انشاء الرابط هل تود الاستمرار؟',
		yes: 'نعم',
		no: 'لا',
		btn_preview: 'اسلوب العرض',
		sender_preview: 'مرسل',
		reciever_preview: 'مستقبل',
		view_message_text: 'عرض النص هنا',
		//_______________________WhatsApp Page___________________
		title_whatsApp: `لنبني<strong> رابط</strong>
		<br>
		<span id="linkType" class="whatsApp" onclick="linkTypes()">الواتس اب</span> الخاص بك.
		<div id="dropdown-menu" class="dropdown-menu">
		<ul>
		<li data-language="sub-title-short"><a href="short.html">مختصر</a></li>
		</ul>
		</div>`,

		phone_input: 'رقم الهاتف',
		text_input: 'اكتب رسالتك هنا',

		//_______________________Short Page___________________
		title_short: `لنبني<strong> رابط</strong>
		<br>
		<span id="linkType" class="whatsApp" onclick="linkTypes()" style="color:#39065a;">مختصر</span> خاص بك.
		<div id="dropdown-menu" class="dropdown-menu">
		<ul>
		<li data-language="sub-title-short"><a href="whatsapp.html">الواتس اب</a></li>
		</ul>
		</div>`,

		url_input: 'ادخل الرابط'
	}
};

function whatsApp_AR_Lang() {
	// ----------- styling --------------
	$('#mainContainer').addClass('container-AR');
	$('[data-language=title]').css('direction', 'rtl');
	$('#mainContainer').addClass('container-AR');
	$('.email-sending').addClass('email-sending-AR');
	$('[data-language=email-input]').css('direction', 'rtl');
	$('[data-language=textarea-input]').css('direction', 'rtl');
	$('.btns').addClass('btns-AR');
	$('.modelContainer').addClass('modelContainer-AR');
	$('.modelheader').addClass('modelheader-AR');
	$('.saveChangesContainer').addClass('saveChangesContainer-AR');
	$('#right_message_text').css('textAlign', 'right');
	$('#left_message_text').css('textAlign', 'right');

	// ----------- translating --------------
	$('#lang').attr('data-calllang', 'en').text('EN');
	$('[data-language=title]').html(dictionary.ar.title_whatsApp);

	$('[data-language=email-option-send]').text(dictionary.ar.email_option_send);
	$('[data-language=email-option-not-send]').text(dictionary.ar.email_option_not_send);
	$('[data-language=email-input]').attr('placeholder', dictionary.ar.email_input);

	$('[data-language=phone-input]').attr('placeholder', dictionary.ar.phone_input);

	$('[data-language=textarea-input]').attr('placeholder', dictionary.ar.text_input);

	$('[data-language=btn-moreOptions]').text(dictionary.ar.btn_moreOptions);
	$('[data-language=moreOptions-title]').text(dictionary.ar.moreOptions_title);
	$('[data-language=moreOptions-subTitle]').text(dictionary.ar.moreOptions_subTitle);
	$('[data-language=customLink-info]').text(dictionary.ar.customLink_info);
	$('[data-language=btn-customLink]').text(dictionary.ar.btn_customLink);

	$('[data-language=btn-resetAll]').text(dictionary.ar.btn_resetAll);
	$('[data-language=conform-resetAll]').text(dictionary.ar.conform_resetAll);

	$('[data-language=btn-generateLink]').text(dictionary.ar.btn_generateLink);
	$('[data-language=conform-generateLink]').text(dictionary.ar.conform_generateLink);

	$('[data-language=btn-yes]').text(dictionary.ar.yes);
	$('[data-language=btn-no]').text(dictionary.ar.no);

	$('[data-language=btn-preview]').text(dictionary.ar.btn_preview);
	$('[data-language=sender-view]').text(dictionary.ar.sender_preview);
	$('[data-language=reciever-view]').text(dictionary.ar.reciever_preview);
	$('#right_message_text').text(dictionary.ar.view_message_text);
	$('#left_message_text').text(dictionary.ar.view_message_text);

	$('[data-language=site-name]').text(dictionary.ar.site_name);
	$('[data-language=result-message]').text(dictionary.ar.result_message);
	$('[data-language=result-close]').text(dictionary.ar.result_close);
}

function short_AR_Lang() {
	// ----------- styling --------------
	$('#mainContainer').addClass('container-AR');
	$('[data-language=title]').css('direction', 'rtl');
	$('#mainContainer').addClass('container-AR');
	$('.email-sending').addClass('email-sending-AR');
	$('[data-language=email-input]').css('direction', 'rtl');
	$('[data-language=url-input]').css('direction', 'rtl');
	$('.btns').addClass('btns-AR');
	$('.modelContainer').addClass('modelContainer-AR');
	$('.modelheader').addClass('modelheader-AR');
	$('.saveChangesContainer').addClass('saveChangesContainer-AR');
	$('#right_message_text').css('textAlign', 'right');
	$('#left_message_text').css('textAlign', 'right');

	// ----------- translating --------------
	$('#lang').attr('data-calllang', 'en').text('EN');
	$('[data-language=title]').html(dictionary.ar.title_short);

	$('[data-language=email-option-send]').text(dictionary.ar.email_option_send);
	$('[data-language=email-option-not-send]').text(dictionary.ar.email_option_not_send);
	$('[data-language=email-input]').attr('placeholder', dictionary.ar.email_input);

	$('[data-language=url-input]').attr('placeholder', dictionary.ar.url_input);

	$('[data-language=btn-moreOptions]').text(dictionary.ar.btn_moreOptions);
	$('[data-language=moreOptions-title]').text(dictionary.ar.moreOptions_title);
	$('[data-language=moreOptions-subTitle]').text(dictionary.ar.moreOptions_subTitle);
	$('[data-language=customLink-info]').text(dictionary.ar.customLink_info);
	$('[data-language=btn-customLink]').text(dictionary.ar.btn_customLink);

	$('[data-language=btn-resetAll]').text(dictionary.ar.btn_resetAll);
	$('[data-language=conform-resetAll]').text(dictionary.ar.conform_resetAll);

	$('[data-language=btn-generateLink]').text(dictionary.ar.btn_generateLink);
	$('[data-language=conform-generateLink]').text(dictionary.ar.conform_generateLink);

	$('[data-language=btn-yes]').text(dictionary.ar.yes);
	$('[data-language=btn-no]').text(dictionary.ar.no);

	$('[data-language=btn-preview]').text(dictionary.ar.btn_preview);
	$('[data-language=sender-view]').text(dictionary.ar.sender_preview);
	$('[data-language=reciever-view]').text(dictionary.ar.reciever_preview);
	$('#right_message_text').text(dictionary.ar.view_message_text);
	$('#left_message_text').text(dictionary.ar.view_message_text);

	$('[data-language=site-name]').text(dictionary.ar.site_name);
	$('[data-language=result-message]').text(dictionary.ar.result_message);
	$('[data-language=result-close]').text(dictionary.ar.result_close);
}
