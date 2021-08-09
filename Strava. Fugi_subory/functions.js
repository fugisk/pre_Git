function colour(el)
{
	el.className = "hover";
}

function decolour(el)
{
	el.className = "";
}

function viewDetail(url)
{
	document.location.href = url;
}

function changeIcon (el, openTitle, closeTitle )
{
	if ( el.className.search('open') !== -1 )
	{
		el.className	= el.className.replace('open', 'close');
		el.title			= closeTitle;
	}
	else
	{
		el.className	= el.className.replace('close', 'open')
		el.title			= openTitle;
	}
}

function logoCentering()
{

	var rbcLogo = document.getElementById("rbcSystemIdentifierLogo");

	if ( rbcLogo.parentNode.className == "image" )
	{

		var elImg = rbcLogo.firstChild;

		if (elImg && elImg.offsetHeight == 0)
		{
			Event.observe(window, 'load', function (e)
				{
					setTimeout(logoCentering, 1000);
				}

			);
			return false;
		}

		offsetTop = parseInt(( 73 - elImg.offsetHeight ) / 2 );
		if ( offsetTop > 0 )
		{
			rbcLogo.parentNode.style.overflow = "visible";
			rbcLogo.firstChild.style.position = "relative";
			rbcLogo.firstChild.style.top = offsetTop + "px";
		}
	}
}
