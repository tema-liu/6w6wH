import { useState } from "react";
import styled from "styled-components";
import { IconImg } from "../../component/LayoutComponents";
import tagIcon from "../../assets/tag.png";

const FilterBar = styled.div`
  display: flex;
  align-items: center;
  margin-left: -8px;
  position: sticky;
  padding-bottom: 24px;
  bottom: 72px;
`;

const FilterButton = styled.button<{ active?: boolean }>`
  background-color: ${({ theme }) => theme.colors.dark};
  opacity: ${(props) => (props.active ? 0.75 : 0.5)};
  color: ${({ theme }) => theme.colors.light};
  padding: 13px 8px;
  border-radius: 0 4px 4px 0;
  font-size: 17px;
  line-height: 22px;
  letter-spacing: -0.41px;
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: opacity 0.25s ease;
`;
const IconBg = styled.div`
  padding: 12px;
  opacity: 0.75;
  background-color: ${({ theme }) => theme.colors.dark};
`;

const FilterColumn = () => {
  const [activeFilter, setActiveFilter] = useState<string>("relevance");

  const handleFilterClick = (filter: string) => {
    setActiveFilter(filter);
  };

  return (
    <FilterBar>
      <IconBg>
        <IconImg src={tagIcon} alt="tag" /> {/* 替代的濾鏡圖標 */}
      </IconBg>

      <FilterButton
        active={activeFilter === "relevance"}
        onClick={() => handleFilterClick("relevance")}
      >
        relevance ↑
      </FilterButton>
      <FilterButton
        active={activeFilter === "star"}
        onClick={() => handleFilterClick("star")}
      >
        star ↑
      </FilterButton>
      <FilterButton
        active={activeFilter === "distance"}
        onClick={() => handleFilterClick("distance")}
      >
        distance ↑
      </FilterButton>
    </FilterBar>
  );
};
export default FilterColumn;
