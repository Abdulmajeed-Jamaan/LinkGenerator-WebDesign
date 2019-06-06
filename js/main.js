//-----------------------------------------------------------------------------
//----------------------- show (More Option)  pop up ---------------------------
//-----------------------------------------------------------------------------

window.addEventListener('click', outSidemodel);
function showModel() {
	var modelBack = document.getElementById('modelBack');

	modelBack.style.display = 'block';
}
function closeModelBtn() {
	var modelBack = document.getElementById('modelBack');

	modelBack.style.display = 'none';
}

function outSidemodel(e) {
	var modelBack = document.getElementById('modelBack');

	if (e.target == modelBack) {
		modelBack.style.display = 'none';
	}
}

//-----------------------------------------------------------------------------

//-----------------------------------------------------------------------------

//-----------------------------------------------------------------------------
//----------------------- show (RESET) conform pop up ---------------------------
//-----------------------------------------------------------------------------

function resetFields() {
	if (document.getElementById('textArea')) {
		document.getElementById('phone_number').value = '';
		document.getElementById('email').value = '';
		document.getElementById('textArea').value = '';

		update();
	} else {
		document.getElementById('url-input').value = '';
		document.getElementById('email').value = '';
	}
	$('#btn-resetAll').click();
}

function dontResetFields() {
	$('#btn-resetAll').click();
}

//-----------------------------------------------------------------------------

//-----------------------------------------------------------------------------
//----------------------- show (GENERATE) conform pop up ---------------------------
//-----------------------------------------------------------------------------

$('.popover-toggle').popover({
	html: true
});

$(document).on('click', '[data-dismiss=popover]', function() {
	$($(this).data('target')).click();
});

$('#btn-generateLink').popover();
$('#btn-resetAll').popover();

var section3 = document.getElementById('resultPage');

function hideSection3() {
	section3.style.display = 'none';
}

function generateLink() {
	section3.style.display = 'block';
	section3.scrollIntoView(true);
	$('#btn-generateLink').click();
}

function dontGenerateLink() {
	section3.style.display = 'none';
	$('#btn-generateLink').click();
}
//-----------------------------------------------------------------------------

//-----------------------------------------------------------------------------
//--------------------------- toggle preview type ------ ----------------------
//-----------------------------------------------------------------------------
var preview = document.getElementById('dropdown-menu2');
var shown_preview = false;

var senderView = document.getElementById('right_message');
var resieverView = document.getElementById('left_message');

var senderViewText = document.getElementById('right_message_text');
var resieverViewText = document.getElementById('left_message_text');

function previewTypes() {
	if (shown_preview) {
		preview.style.display = 'none';
		shown_preview = false;
	} else {
		preview.style.display = 'block';
		shown_preview = true;
	}
}

function viewAsSender() {
	preview.style.display = 'none';

	senderView.style.display = 'flex';
	resieverView.style.display = 'none';
	shown_preview = false;
}

function viewAsResiever() {
	preview.style.display = 'none';

	senderView.style.display = 'none';
	resieverView.style.display = 'flex';
	shown_preview = false;
}

//-----------------------------------------------------------------------------
//---------------------------- show Text on phone -----------------------------
//-----------------------------------------------------------------------------

var TAGS = [ [ '*', 'b' ], [ '_', 'i' ], [ '~', 's' ], [ '```', 'code' ] ];
var selectionStart = -1,
	selectionEnd = -1;

function whatsappTextSelected() {
	var textarea = document.getElementById('textArea');

	selectionStart = textarea.selectionStart;
	selectionEnd = textarea.selectionEnd;
	update();
}
function format(t) {
	var textarea = document.getElementById('textArea');

	var e = TAGS[t][0],
		n = textarea.value;
	n = n.substring(0, selectionStart) + e + n.substring(selectionStart, selectionEnd) + e + n.substring(selectionEnd);
	textarea.value = n;
	selectionStart = selectionEnd = -1;
	update();
}
function update() {
	var textarea = document.getElementById('textArea');

	selectionStart = textarea.selectionStart;
	selectionEnd = textarea.selectionEnd;

	var t = selectionStart === selectionEnd ? true : false;

	var e = textarea.value.replace(/&/g, '&').replace(/>/g, '>').replace(/</g, '&lt;').replace(/\n/g, '<br />');
	for (var n = 0; n < TAGS.length; n++) {
		var o = e.indexOf(TAGS[n][0]),
			a = e.indexOf(TAGS[n][0], o + 1);
		while (o > -1 && a > -1) {
			e =
				e.substring(0, o) +
				'<' +
				TAGS[n][1] +
				'>' +
				e.substring(o + TAGS[n][0].length, a) +
				'</' +
				TAGS[n][1] +
				'>' +
				e.substring(a + TAGS[n][0].length);
			o = e.indexOf(TAGS[n][0], a + 1);
			a = e.indexOf(TAGS[n][0], o + 1);
		}
	}
	senderViewText.innerHTML = e.length > 0 ? e : '<font >عرض النص هنا</font>';
	resieverViewText.innerHTML = e.length > 0 ? e : '<font >عرض النص هنا</font>';
}

function showMobileNumber() {
	var mobileField = document.getElementById('phone_numberfield');
	var phoneInput = document.getElementById('phone_number');
	var countryKey = document.getElementById('countryKey');

	if (phoneInput.value.length <= 1) {
		mobileField.innerHTML = countryKey.value + ' ...';
	} else {
		mobileField.innerHTML = countryKey.value + ' ' + phoneInput.value;
	}
}

//-----------------------------------------------------------------------------

//-----------------------------------------------------------------------------
//-------- show menu types and form changeing between whats and short ---------
//-----------------------------------------------------------------------------

var shown_menu = false;

function linkTypes() {
	var menu = document.getElementById('dropdown-menu');

	if (shown_menu) {
		menu.style.display = 'none';
		shown_menu = false;
	} else {
		menu.style.display = 'block';
		shown_menu = true;
	}
}

//-----------------------------------------------------------------------------

//-----------------------------------------------------------------------------
//---------------------------- Language Transform -----------------------------
//-----------------------------------------------------------------------------
