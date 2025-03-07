import { PieChart, Pie, Cell, Legend, Tooltip, LabelList } from "recharts";

function Chart({ data }) {
  const updatedData = data.map(item => ({
    ...item,
    full_name: `${item.first_name} ${item.last_name}`,
  }));

  const getRandomColor = (index) => {
    const hue = (index * 137.5) % 360;
    return `hsl(${hue}, 70%, 60%)`;
  };

  return (
    <PieChart width={500} height={300}>
      <Pie
        data={updatedData}
        cx="40%"
        cy="50%"
        labelLine={false}
        outerRadius={115}
        innerRadius={65}
        fill="#8884d8"
        dataKey="participation"
        nameKey="full_name"
        paddingAngle={1}
      >
        {updatedData.map((_, index) => (
          <Cell key={`cell-${index}`} fill={getRandomColor(index)} />
        ))}
      </Pie>
      <Tooltip />
      <Legend 
        layout="vertical" 
        align="right" 
        verticalAlign="middle" 
        iconType="square"
        iconSize={20}
        wrapperStyle={{ lineHeight: "40px", fontWeight: "bold" }}
      />
    </PieChart>
  );
}

export default Chart;
