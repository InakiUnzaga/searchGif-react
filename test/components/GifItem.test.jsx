import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe("Prueba en <gifItem/>", () => {
  const title = "Naruto";
  const url = "https://naruto.com/";

  test("Prueba de snapshot", () => {
    const { container } = render(<GifItem title={title} url={url} />);

    expect(container).toMatchSnapshot();
  });

  test("debe de mostrar la imagen con el url y el alt indicado", () => {
    render(<GifItem title={title} url={url} />);

    // expect(screen.getByRole("img").src).toBe(url);

    const { src, alt } = screen.getByRole("img");
    expect(src).toBe(url);
    expect(alt).toBe(title);
  });

  test("debe de mostar el titulo en el componente", () => {
    render(<GifItem title={title} url={url} />);
    expect(screen.getByText(title)).toBeTruthy()
  });
});
