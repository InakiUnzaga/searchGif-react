import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock("../../src/hooks/useFetchGifs");

describe("Pruebas en <GifGrid/>", () => {
  const category = "Naruto";

  test("debe de mostar el loading inicialmente", () => {
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true,
    });

    render(<GifGrid category={category} />);

    expect(screen.getByText("Cargando..."));
    expect(screen.getByText(category));
  });

  test("debe de mostar items cuando se cargan las imagenes", () => {
    const gifs = [
      {
        id: "ABC",
        title: "naruto",
        url: "https://localhost/saitama.jpg",
      },
      {
        id: "CBA",
        title: "Saitama",
        url: "https://lalala/saitama.jpg",
      },
    ];
    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: true,
    });

    render(<GifGrid category={category} />);

    
    expect(screen.getAllByRole("img").length).toBe(2)
  });
});
