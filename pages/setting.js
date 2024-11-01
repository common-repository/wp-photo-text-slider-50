function wp_50_submit()
{
	if(document.wp_50_form.wp_50_path.value=="")
	{
		alert(wp_50_adminscripts.wp_50_path);
		document.wp_50_form.wp_50_path.focus();
		return false;
	}
	else if(document.wp_50_form.wp_50_type.value=="")
	{
		alert(wp_50_adminscripts.wp_50_type);
		document.wp_50_form.wp_50_type.focus();
		return false;
	}
	else if(document.wp_50_form.wp_50_status.value=="")
	{
		alert(wp_50_adminscripts.wp_50_status);
		document.wp_50_form.wp_50_status.focus();
		return false;
	}
	else if(document.wp_50_form.wp_50_order.value=="")
	{
		alert(wp_50_adminscripts.wp_50_order);
		document.wp_50_form.wp_50_order.focus();
		return false;
	}
	else if(isNaN(document.wp_50_form.wp_50_order.value))
	{
		alert(wp_50_adminscripts.wp_50_order);
		document.wp_50_form.wp_50_order.focus();
		return false;
	}
}

function wp_50_delete(id)
{
	if(confirm(wp_50_adminscripts.wp_50_delete))
	{
		document.frm_wp_50_display.action="options-general.php?page=wp-photo-text-slider-50&ac=del&did="+id;
		document.frm_wp_50_display.submit();
	}
}	

function wp_50_redirect()
{
	window.location = "options-general.php?page=wp-photo-text-slider-50";
}

function wp_50_help()
{
	window.open("http://www.gopiplus.com/work/2011/06/02/wordpress-plugin-wp-photo-slider-50/");
}