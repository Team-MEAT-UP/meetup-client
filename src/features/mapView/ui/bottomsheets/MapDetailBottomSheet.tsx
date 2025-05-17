import { useState } from "react";
import { SnapBottomSheet } from "@/shared/ui";
import { useEventStore } from "@/shared/stores";
import { TransferType } from "../../model";
import { CarDetail, FixedButton, Path, TransferDetail } from "./detailContents";

export const MapDetailBottomSheet = () => {
  const detailEventData = useEventStore(state => state.detailEventData);
  const eventData = useEventStore(state => state.eventData);
  const [type, setType] = useState<TransferType>(detailEventData?.isTransit ? "subway" : "car");

  if (!detailEventData || !eventData) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <SnapBottomSheet minHeightVh={30}>
        <SnapBottomSheet.Header />
        <TransferDetail
          type={type}
          averageDuration={type === "car" ? detailEventData.drivingRoute[0].duration : detailEventData.totalTime}
          startPoint={detailEventData.startName}
          endPoint={eventData.meetingPoint.endStationName}
        />
        <SnapBottomSheet.Content>
          {type === "subway" ? (
            <Path
              startPoint={detailEventData.startName}
              endPoint={eventData.meetingPoint.endStationName}
              transferInfo={detailEventData.transitRoute}
            />
          ) : (
            <CarDetail
              driveDistance={detailEventData.drivingRoute[0].distance}
              toll={detailEventData.drivingRoute[0].toll}
              taxiToll={detailEventData.drivingRoute[0].taxi}
              parking={eventData.parkingLot}
            />
          )}
          <FixedButton type={type} setType={setType} isMe={detailEventData.isMe} />
        </SnapBottomSheet.Content>
      </SnapBottomSheet>
    </>
  );
};
