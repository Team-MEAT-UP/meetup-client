import { createBrowserRouter } from "react-router-dom";
import DetailPage from "@/pages/DetailPage";
import FindPage from "@/pages/FindPage";
import HistoryPage from "@/pages/HistoryPage";
import MainPage from "@/pages/MainPage";
import MapViewPage from "@/pages/MapViewPage";
import PlacePage from "@/pages/PlacePage";
import ReviewPage from "@/pages/ReviewPage";
import VisitedPage from "@/pages/VisitedPage";
import MyPage from "@/pages/MyPage";
import NotVisitedPage from "@/pages/NotVisitedPage";

export const router = createBrowserRouter([
  { path: "/", element: <MainPage /> },
  { path: "/detail", element: <DetailPage /> },
  { path: "/find", element: <FindPage /> },
  { path: "/history", element: <HistoryPage /> },
  { path: "/mapView", element: <MapViewPage /> },
  { path: "/my", element: <MyPage /> },
  { path: "/place", element: <PlacePage /> },
  { path: "/review/:id", element: <ReviewPage /> },
  { path: "/visited/:id", element: <VisitedPage /> },
  { path: "/notvisited/:id", element: <NotVisitedPage /> },
]);
