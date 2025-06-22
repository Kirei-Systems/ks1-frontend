import Button from "./button";

const links = [
	{
		label: "Home",
		url: "/",
	},
	{
		label: "About Us",
		url: "/about-us",
	},
];

export default function Nav() {
	return (
		<nav className="max-md:hidden md:sticky z-100 top-0 w-full p-4 bg-primary flex flex-row">
			<ul className="flex flex-row space-x-2">
				{links.map(({ label, url }) => NavItem(url, label))}
			</ul>
		</nav>
	);
}

function NavItem(url: string, label: string) {
	return (
		<li key={label}>
			<Button className="text-sky-50 p-1 text-lg btn btn-ghost">
				<a href={url}>{label}</a>
			</Button>
		</li>
	);
}
