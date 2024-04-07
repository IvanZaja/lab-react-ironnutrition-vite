import { Card } from "antd";
import { DeleteOutlined } from '@ant-design/icons';
const { Meta } = Card;

function FoodBox({ foodList, deleteFood }) {
  return (
    <div>
        {foodList.map(food => (
            <div style={{margin:'10px'}} key={food.id}>
                <Card style={{ width: 300}} cover={<img alt="example" src={food.image} />} actions={[ <DeleteOutlined onClick={() => deleteFood(food)} key="delete" /> ]}>
                    <Meta title={food.name} description={`Calories: ${food.calories}`}/>
                    <p>Servings: {food.servings}</p>
                    <p><b>Total Calories: {food.servings * food.calories}</b> kcal</p>
                </Card>
            </div>
        ))}
    </div>
    
  )
}

export default FoodBox;