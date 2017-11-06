export default ({ markup }) => {
	return `<!doctype html>
<html>
<head>
</head>
<body>
	<div id="app">${markup}</div>
	<script src="/public/client.js" async></script>
</body>
</html>`;
};
