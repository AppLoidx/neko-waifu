import { Button } from "flowbite-react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import CardDev from "./components/CardDev";
export default function App() {
	return (
		<div>
			<h1 className="bg-red-300">Neko Waifu ^_^</h1>
			{/* Routes nest inside one another. Nested route paths build upon
            parent route paths, and nested route elements render inside
            parent route elements. See the note about <Outlet> below. */}
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="card" element={<CardDev/>} />
				</Route>
			</Routes>
		</div>
	);
}

function Layout() {
	return (
		<div>

			{/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
			<Outlet />
		</div>
	);
}

function Home() {
	return (
		<div>
			<h2>Home</h2>
            <Button color="dark" pill>Nyaaan!</Button>
		</div>
	);
}
