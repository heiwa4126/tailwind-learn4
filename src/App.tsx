import { useState } from "react";
import "./App.css";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<h1>tailwind-learn4</h1>
			<button className="btn1" type="button" onClick={() => setCount((count) => count + 1)}>
				count is {count}
			</button>
			<p className="font-noto">
				TailWindCSS v4 で Google Fonts を使う練習。 効果がわかりやすいように、フォントを
				<ul>
					<li>
						Serif は{" "}
						<a href="https://fonts.google.com/specimen/Kaisei+Decol" className="font-serif">
							Kaisei Decol
						</a>{" "}
						(デフォルト)
					</li>
					<li>
						Sans-Serif は{" "}
						<a href="https://fonts.google.com/specimen/Dela+Gothic+One" className="font-sans">
							Dela Gothic One
						</a>{" "}
						(ブラウザの横幅を縮めるとレスポンシブデザインで変わります)
					</li>
				</ul>
				にしてあります (この部分だけ Noto)。
			</p>
			<p>
				人類社会のすべての構成員の固有の尊厳と平等で譲ることのできない権利とを承認することは、世界における自由、正義及び平和の基礎であるので、
				人権の無視及び軽侮が、人類の良心を踏みにじった野蛮行為をもたらし、言論及び信仰の自由が受けられ、恐怖及び欠乏のない世界の到来が、一般の人々の最高の願望として宣言されたので、
				人間が専制と圧迫とに対する最後の手段として反逆に訴えることがないようにするためには、法の支配によって人権保護することが肝要であるので、
				諸国間の友好関係の発展を促進することが、肝要であるので、
				国際連合の諸国民は、国際連合憲章において、基本的人権、人間の尊厳及び価値並びに男女の同権についての信念を再確認し、かつ、一層大きな自由のうちで社会的進歩と生活水準の向上とを促進することを決意したので、
				加盟国は、国際連合と協力して、人権及び基本的自由の普遍的な尊重及び遵守の促進を達成することを誓約したので、
				これらの権利及び自由に対する共通の理解は、この誓約を完全にするためにもっとも重要であるので、
				よって、ここに、国際連合総会は、
				社会の各個人及び各機関が、この世界人権宣言を常に念頭に置きながら、加盟国自身の人民の間にも、また、加盟国の管轄下にある地域の人民の間にも、これらの権利と自由との尊重を指導及び教育によって促進すること並びにそれらの普遍的かつ効果的な承認と遵守とを国内的及び国際的な漸進的措置によって確保することに努力するように、すべての人民とすべての国とが達成すべき共通の基準として、この世界人権宣言を公布する。
			</p>
		</>
	);
}

export default App;
