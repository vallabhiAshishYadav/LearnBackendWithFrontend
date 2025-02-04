import { useState } from "react";

const FamilyCategoryItems = () => {
    const families = [
        { id: 1, name: "Electronics" },
        { id: 2, name: "Furniture" },
    ];

    const categories = [
        { id: 1, familyId: 1, name: "Mobile Phones" },
        { id: 2, familyId: 1, name: "Laptops" },
        { id: 3, familyId: 2, name: "Chairs" },
        { id: 4, familyId: 2, name: "Tables" },
    ];

    const items = [
        { id: 1, categoryId: 1, familyId: 1, name: "iPhone 14" },
        { id: 2, categoryId: 1, familyId: 1, name: "Samsung Galaxy S23" },
        { id: 3, categoryId: 2, familyId: 1, name: "MacBook Air" },
        { id: 4, categoryId: 3, familyId: 2, name: "Office Chair" },
        { id: 5, categoryId: 4, familyId: 2, name: "Dining Table" },
    ];

    const [selectedFamily, setSelectedFamily] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState(null);

    const filteredCategories = categories.filter(
        (cat) => cat.familyId === selectedFamily
    );
    const filteredItems = items.filter(
        (item) => item.categoryId === selectedCategory && item.familyId === selectedFamily
    );

    return (
        <div className="flex h-screen">
            {/* Family Section */}
            <div className="w-1/4 bg-gray-100 p-4 overflow-y-auto">
                <h1 className="text-xl font-bold mb-4">Families</h1>
                <div className="flex flex-col gap-2">
                    {families.map((family) => (
                        <button
                            key={family.id}
                            className={`w-full text-left px-4 py-2 rounded ${selectedFamily === family.id ? "bg-blue-600 text-white" : "bg-white border"
                                }`}
                            onClick={() => {
                                setSelectedFamily(family.id);
                                setSelectedCategory(null);
                            }}
                        >
                            {family.name}
                        </button>
                    ))}
                </div>
            </div>

            {/* Category Section */}
            {selectedFamily && (
                <div className="w-1/4 bg-gray-50 p-4 overflow-y-auto">
                    <h2 className="text-lg font-semibold mb-4">Categories</h2>
                    <div className="flex flex-col gap-2">
                        {filteredCategories.map((category) => (
                            <button
                                key={category.id}
                                className={`w-full text-left px-4 py-2 rounded ${selectedCategory === category.id ? "bg-green-600 text-white" : "bg-white border"
                                    }`}
                                onClick={() => setSelectedCategory(category.id)}
                            >
                                {category.name}
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {/* Items Section */}
            {selectedCategory && (
                <div className="w-1/2 bg-white p-4 overflow-y-auto">
                    <h2 className="text-lg font-semibold mb-4">Items</h2>
                    <ul className="flex flex-col gap-2">
                        {filteredItems.map((item) => (
                            <li key={item.id} className="p-2 bg-gray-100 rounded border">
                                {item.name}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default FamilyCategoryItems;
