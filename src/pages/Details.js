import React, { useMemo, useCallback } from "react";
import Card from "react-bootstrap/Card";
import { useLocation } from "react-router-dom";
import { List, WindowScroller } from "react-virtualized";
import "react-virtualized/styles.css";
const Details = () => {
  const location = useLocation();

  const memoizedData = useMemo(
    () => location.state.data,
    [location.state.data]
  );


  const memoizedRowRenderer = useCallback(
    ({ index, key, style }) => (
      <Card
        key={key + index}
        style={{
          ...style,
          backgroundColor: index % 2 === 0 ? "#EEE" : "#FFF",
          marginTop: "20px",
        }}
      >
        <Card.Body>
          <Card.Title>
            {"course👉" +
              memoizedData[index].ubc_dept +
              memoizedData[index].ubc_id}
          </Card.Title>
          <Card.Text>{"average grade is " + memoizedData[index].ubc_avg}</Card.Text>
        </Card.Body>
      </Card>
    ),
    [memoizedData]
  );

  return (
    <div>
      <div className="d-flex justify-content-around" >
      <WindowScroller>
          {({ height, isScrolling, onChildScroll, scrollTop }) => (
            <List
              autoHeight
              height={height}
              isScrolling={isScrolling}
              onScroll={onChildScroll}
              scrollTop={scrollTop}
              width={1300}
              rowCount={memoizedData.length}
              rowHeight={80}
              data={memoizedData}
              style={{ margin: '10px' }}
              rowRenderer={memoizedRowRenderer}
            />
          )}
        </WindowScroller>
      </div>
    </div>
  );
};

export default Details;
