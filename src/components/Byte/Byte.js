// @flow
import React from "react";
import Sidebar from "./Sidebar/Sidebar";
import Content from "./Content/Content";
import { Loader } from "../Loader/Loader";

// Redux
import { connect } from "react-redux";
import { initConsumableByte } from "../../actions";

// Apollo
import { Query } from "react-apollo";
import gql from "graphql-tag";

// $FlowFixMe
import "./Byte.scss";

const Byte = ({ dispatch }) => {
  let query = `query {
        byte(id: "1") {
          id, 
          name,
          description,
          date,
          creator {
            name
          },
          materials {
            youtubeVideo
          },
          sections {
              id,
              name,
              description,
              videoIn,
              videoOut,
              questions {
                  text,
                  answerId,
                  options {
                      id,
                      text
                  }
              }
          },
        }
      }`;

  return (
    <Query
      query={gql`
        ${query}
      `}
    >
      {({ loading, error, data }) => {
        if (loading) return <Loader text="Loading byte..." />;
        if (error) return <p>Error :( {error}</p>;

        dispatch(initConsumableByte(data.byte));

        return (
          <div className="byte">
            <Sidebar />
            <Content />
          </div>
        );
      }}
    </Query>
  );
};

export default connect()(Byte);
