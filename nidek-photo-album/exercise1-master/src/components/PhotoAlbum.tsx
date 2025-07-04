import React, { useReducer } from "react";
import { Album } from "../model/Album";
import { Loading } from "./Loading";
import { User } from "../model/User";
import "../styles/photoAlbumStyle.scss";
import { Photo } from "../model/Photo";
import { Photos } from "./Photos";

/** Photo Album function component */
export const PhotoAlbum: React.FC = (): JSX.Element => {
  /** all i need to publish from custom hook */
  const [
    albumData,
    isLoading,
    searchValue,
    setSearchValue,
    fetchAlbumAndUsers,
    userData,
    getUsernameById,
    filterResults,
    setFilterResults,
    handleSortByTitle,
    typeSort,
    isLoadingPhotos,
    fetchPhotosByAlbumId,
    photosData,
    filteredPhotos,
    selectAlbum,
    selectedAlbumId,
    state,
  ] = usePhotoAlbum();

  /**
   * use effect hook.
   * In this area call the function to load results from web API
   * No added elements in array of dependencies to activate this effect only once
   */
  React.useEffect(() => {
    fetchAlbumAndUsers();
  }, []);

  /** Effect to filter albums by searchValue */
  React.useEffect(() => {
    const lowerCaseQuery = searchValue.toLowerCase();
    setFilterResults(
      albumData.filter((item: Album) =>
        item.title.toLowerCase().includes(lowerCaseQuery)
      )
    );
  }, [searchValue, albumData]);

  /** use effect to manage selected album */
  React.useEffect(() => {
    state.selectedAlbumId !== -1 && fetchPhotosByAlbumId();
  }, [state.selectedAlbumId]);

  return (
    <div className="photo-album-container">
      {/** if i still waiting response then show loading component */}
      {isLoading ? (
        <Loading></Loading>
      ) : (
        <div className="content-app">
          <div className="input-search-container">
            <input
              type="text"
              placeholder="Filter .."
              value={searchValue}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setSearchValue(e.target.value)
              }
            />
          </div>
          <div className="grid-and-detail-container">
            <div className="album-area section">
              <div className="album-results-area">
                {/* photo album table */}
                {filterResults && filterResults.length == 0 ? (
                  <div className="no-results">No results</div>
                ) : (
                  <table className="my-table">
                    <thead className="my-thead">
                      <tr className="my-thead-tr">
                        <th>Owner</th>
                        <th
                          className="sortable-col"
                          onClick={handleSortByTitle}
                        >
                          Title{" "}
                          {typeSort !== ""
                            ? typeSort === "asc"
                              ? "▲"
                              : "▼"
                            : ""}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {filterResults.map((album: Album) => (
                        <tr
                          key={album.id}
                          className={"item-row " + "album-" + album.id}
                          onClick={() => selectAlbum(album.id)}
                        >
                          <td>{getUsernameById(album.userId).name}</td>
                          <td>{album.title}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>
            </div>
            {isLoadingPhotos ? (
              <Loading></Loading>
            ) : (
              <Photos photosList={photosData}></Photos>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

/*
 * custom hook for photo album component
 */
function usePhotoAlbum(): [
  Album[],
  boolean,
  string,
  React.Dispatch<React.SetStateAction<string>>,
  any,
  User[],
  any,
  Album[],
  React.Dispatch<React.SetStateAction<Album[]>>,
  any,
  string,
  boolean,
  any,
  Photo[],
  Photo[],
  any,
  number,
  any
] {
  const [albumData, setAlbumData] = React.useState<Album[]>([]);
  const [filterResults, setFilterResults] = React.useState<Album[]>(albumData);
  const [photosData, setPhotosData] = React.useState<Photo[]>([]);
  const [filteredPhotos, setFilteredPhotos] =
    React.useState<Photo[]>(photosData);
  const [userData, setUserData] = React.useState<User[]>([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [isLoadingPhotos, setIsLoadingPhotos] = React.useState<boolean>(false);
  const [searchValue, setSearchValue] = React.useState<string>("");
  const [typeSort, setTypeSort] = React.useState<string>("");
  const [selectedAlbumId, setSelectedAlbumId] = React.useState<number>(-1);

  const initialState = {
    albumData: [],
    filterResults: [],
    photosData: [],
    filteredPhotos: [],
    userData: [],
    isLoading: false,
    isLoadingPhotos: false,
    searchValue: "",
    typeSort: "",
    selectedAlbumId: -1,
  };

  const reducer = (state: any, action: { type: string; payload?: string }) => {
    console.log("reducer", action);
    switch (action.type) {
      case "selectedAlbumId":
        return { ...state, selectedAlbumId: action.payload };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const getUsernameById = (id: number): User | undefined => {
    return userData.find((user: User) => {
      return user.id === id;
    });
  };

  const selectAlbum = (id: number) => {
    const prevSelected = document.getElementsByClassName("selected");
    if (prevSelected && prevSelected.length > 0) {
      for (let i = 0; i < prevSelected.length; i++) {
        prevSelected[i].setAttribute(
          "class",
          prevSelected[i].className.replace("selected", "").trim()
        );
      }
    }
    const albumsSelected = document.getElementsByClassName("album-" + id);
    if (albumsSelected && albumsSelected.length > 0) {
      albumsSelected[0].setAttribute(
        "class",
        albumsSelected[0].className + " selected"
      );
    }

    // setSelectedAlbumId(id);
    dispatch({ type: "selectedAlbumId", payload: String(id) });
  };

  const fetchAlbumAndUsers = async () => {
    setIsLoading(true);
    try {
      // Use Promise.all to execute parallel fetch
      const [respAlbum, respUsers] = await Promise.all([
        fetch("https://jsonplaceholder.typicode.com/albums"),
        fetch("https://jsonplaceholder.typicode.com/users"),
      ]);

      // Check if are OK
      if (!respAlbum.ok || !respUsers.ok) {
        throw new Error("Error...");
      }

      // json data
      const albums = await respAlbum.json();
      const users = await respUsers.json();

      setAlbumData(albums);
      setUserData(users);
    } catch (error) {
      // setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchPhotosByAlbumId = async () => {
    setIsLoadingPhotos(true);
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/album/" +
          state.selectedAlbumId +
          "/photos"
      );
      if (!response.ok) {
        throw new Error("Errore nella fetch dei dati");
      }
      const jsonPhotosData = await response.json();
      setPhotosData(jsonPhotosData);
    } catch (error) {
      alert("I'm sorry. There is an error on fetching data");
    } finally {
      setIsLoadingPhotos(false);
    }
  };

  const handleSortByTitle = () => {
    /*
     * 1. spread filtered results to create a copy of album's array
     * 2. sort the copy of array by title
     * 3. set sortedAlbums and reverse of type sort
     */
    const sortedAlbums = [...filterResults].sort((a, b) => {
      if (a.title < b.title) return typeSort === "asc" ? -1 : 1;
      if (a.title > b.title) return typeSort === "asc" ? 1 : -1;
      return 0;
    });
    setFilterResults(sortedAlbums);
    setTypeSort(typeSort === "asc" ? "desc" : "asc"); // Change order on next click on th
  };

  return [
    albumData,
    isLoading,
    searchValue,
    setSearchValue,
    fetchAlbumAndUsers,
    userData,
    getUsernameById,
    filterResults,
    setFilterResults,
    handleSortByTitle,
    typeSort,
    isLoadingPhotos,
    fetchPhotosByAlbumId,
    photosData,
    filteredPhotos,
    selectAlbum,
    selectedAlbumId,
    state,
  ];
}
