import React from "react";
import Tag from "../Tag/Tag";

export const TagsUI = ({ Tags, activeTab, hFilterChange, register }) => {
  return (
    <>
      {Tags.map((tag, index) => {
        return (
          <React.Fragment key={index}>
            {activeTab === tag.name ? (
              <div className='tags active-tags'>
                {tag.items.map((item) => {
                  return (
                    <Tag
                      key={item.id}
                      displayName={item.display_name}
                      name={item.name}
                      register={register}
                      hFilterChange={hFilterChange}
                    />
                  );
                })}
              </div>
            ) : (
              <div className='tags'>
                {tag.items.map((item) => {
                  return (
                    <Tag
                      key={item.id}
                      displayName={item.display_name}
                      name={item.name}
                      register={register}
                      hFilterChange={hFilterChange}
                    />
                  );
                })}
              </div>
            )}
          </React.Fragment>
        );
      })}
    </>
  );
};
