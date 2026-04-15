/* ============================================
   FitFuel — Gym Diet Plan Maker
   Application Logic
   ============================================ */
// ==================== FOOD DATABASE ====================
const FOOD_DB = [
    // Protein
    { id: 1, name: "Chicken Breast", category: "protein", emoji: "🍗", cal: 165, protein: 31, carbs: 0, fat: 3.6 },
    { id: 2, name: "Eggs (whole)", category: "protein", emoji: "🥚", cal: 155, protein: 13, carbs: 1.1, fat: 11 },
    { id: 3, name: "Egg Whites", category: "protein", emoji: "🥚", cal: 52, protein: 11, carbs: 0.7, fat: 0.2 },
    { id: 4, name: "Whey Protein", category: "supplements", emoji: "💊", cal: 400, protein: 80, carbs: 8, fat: 6 },
    { id: 5, name: "Paneer", category: "protein", emoji: "🧀", cal: 265, protein: 18.3, carbs: 1.2, fat: 20.8 },
    { id: 6, name: "Salmon", category: "protein", emoji: "🐟", cal: 208, protein: 20, carbs: 0, fat: 13 },
    { id: 7, name: "Tuna (canned)", category: "protein", emoji: "🐟", cal: 116, protein: 26, carbs: 0, fat: 1 },
    { id: 8, name: "Tofu", category: "protein", emoji: "🫘", cal: 76, protein: 8, carbs: 1.9, fat: 4.8 },
    { id: 9, name: "Greek Yogurt", category: "dairy", emoji: "🥛", cal: 59, protein: 10, carbs: 3.6, fat: 0.7 },
    { id: 10, name: "Cottage Cheese", category: "dairy", emoji: "🧀", cal: 98, protein: 11.1, carbs: 3.4, fat: 4.3 },
    { id: 11, name: "Turkey Breast", category: "protein", emoji: "🍗", cal: 135, protein: 30, carbs: 0, fat: 1 },
    { id: 12, name: "Shrimp", category: "protein", emoji: "🦐", cal: 99, protein: 24, carbs: 0.2, fat: 0.3 },
    { id: 13, name: "Lean Beef", category: "protein", emoji: "🥩", cal: 250, protein: 26, carbs: 0, fat: 15 },
    { id: 14, name: "Chicken Thigh", category: "protein", emoji: "🍗", cal: 209, protein: 26, carbs: 0, fat: 10.9 },

    // Carbs
    { id: 15, name: "White Rice", category: "carbs", emoji: "🍚", cal: 130, protein: 2.7, carbs: 28, fat: 0.3 },
    { id: 16, name: "Brown Rice", category: "carbs", emoji: "🍚", cal: 112, protein: 2.6, carbs: 23.5, fat: 0.9 },
    { id: 17, name: "Oats", category: "carbs", emoji: "🥣", cal: 389, protein: 16.9, carbs: 66.3, fat: 6.9 },
    { id: 18, name: "Sweet Potato", category: "carbs", emoji: "🍠", cal: 86, protein: 1.6, carbs: 20.1, fat: 0.1 },
    { id: 19, name: "Whole Wheat Bread", category: "carbs", emoji: "🍞", cal: 247, protein: 13, carbs: 41, fat: 3.4 },
    { id: 20, name: "Pasta (cooked)", category: "carbs", emoji: "🍝", cal: 131, protein: 5, carbs: 25, fat: 1.1 },
    { id: 21, name: "Quinoa", category: "carbs", emoji: "🌾", cal: 120, protein: 4.4, carbs: 21.3, fat: 1.9 },
    { id: 22, name: "Potato", category: "carbs", emoji: "🥔", cal: 77, protein: 2, carbs: 17, fat: 0.1 },
    { id: 23, name: "Corn", category: "carbs", emoji: "🌽", cal: 96, protein: 3.4, carbs: 21, fat: 1.5 },
    { id: 24, name: "Chapati / Roti", category: "carbs", emoji: "🫓", cal: 297, protein: 9.8, carbs: 50, fat: 7.5 },

    // Fats
    { id: 25, name: "Peanut Butter", category: "fats", emoji: "🥜", cal: 588, protein: 25, carbs: 20, fat: 50 },
    { id: 26, name: "Almonds", category: "fats", emoji: "🥜", cal: 579, protein: 21.2, carbs: 21.6, fat: 49.9 },
    { id: 27, name: "Olive Oil", category: "fats", emoji: "🫒", cal: 884, protein: 0, carbs: 0, fat: 100 },
    { id: 28, name: "Avocado", category: "fats", emoji: "🥑", cal: 160, protein: 2, carbs: 8.5, fat: 14.7 },
    { id: 29, name: "Walnuts", category: "fats", emoji: "🥜", cal: 654, protein: 15.2, carbs: 13.7, fat: 65.2 },
    { id: 30, name: "Coconut Oil", category: "fats", emoji: "🥥", cal: 862, protein: 0, carbs: 0, fat: 100 },
    { id: 31, name: "Ghee / Butter", category: "fats", emoji: "🧈", cal: 717, protein: 0.3, carbs: 0, fat: 81 },
    { id: 32, name: "Flax Seeds", category: "fats", emoji: "🌱", cal: 534, protein: 18.3, carbs: 28.9, fat: 42.2 },
    { id: 33, name: "Chia Seeds", category: "fats", emoji: "🌱", cal: 486, protein: 16.5, carbs: 42.1, fat: 30.7 },

    // Vegetables
    { id: 34, name: "Broccoli", category: "vegetables", emoji: "🥦", cal: 34, protein: 2.8, carbs: 7, fat: 0.4 },
    { id: 35, name: "Spinach", category: "vegetables", emoji: "🥬", cal: 23, protein: 2.9, carbs: 3.6, fat: 0.4 },
    { id: 36, name: "Cucumber", category: "vegetables", emoji: "🥒", cal: 15, protein: 0.7, carbs: 3.6, fat: 0.1 },
    { id: 37, name: "Bell Pepper", category: "vegetables", emoji: "🫑", cal: 31, protein: 1, carbs: 6, fat: 0.3 },
    { id: 38, name: "Tomato", category: "vegetables", emoji: "🍅", cal: 18, protein: 0.9, carbs: 3.9, fat: 0.2 },
    { id: 39, name: "Carrot", category: "vegetables", emoji: "🥕", cal: 41, protein: 0.9, carbs: 10, fat: 0.2 },
    { id: 40, name: "Green Beans", category: "vegetables", emoji: "🫛", cal: 31, protein: 1.8, carbs: 7, fat: 0.2 },
    { id: 41, name: "Mushrooms", category: "vegetables", emoji: "🍄", cal: 22, protein: 3.1, carbs: 3.3, fat: 0.3 },

    // Fruits
    { id: 42, name: "Banana", category: "fruits", emoji: "🍌", cal: 89, protein: 1.1, carbs: 22.8, fat: 0.3 },
    { id: 43, name: "Apple", category: "fruits", emoji: "🍎", cal: 52, protein: 0.3, carbs: 13.8, fat: 0.2 },
    { id: 44, name: "Blueberries", category: "fruits", emoji: "🫐", cal: 57, protein: 0.7, carbs: 14.5, fat: 0.3 },
    { id: 45, name: "Strawberries", category: "fruits", emoji: "🍓", cal: 32, protein: 0.7, carbs: 7.7, fat: 0.3 },
    { id: 46, name: "Orange", category: "fruits", emoji: "🍊", cal: 47, protein: 0.9, carbs: 11.8, fat: 0.1 },
    { id: 47, name: "Mango", category: "fruits", emoji: "🥭", cal: 60, protein: 0.8, carbs: 15, fat: 0.4 },

    // Dairy
    { id: 48, name: "Whole Milk", category: "dairy", emoji: "🥛", cal: 61, protein: 3.2, carbs: 4.8, fat: 3.3 },
    { id: 49, name: "Skimmed Milk", category: "dairy", emoji: "🥛", cal: 34, protein: 3.4, carbs: 5, fat: 0.1 },
    { id: 50, name: "Cheddar Cheese", category: "dairy", emoji: "🧀", cal: 403, protein: 25, carbs: 1.3, fat: 33 },

    // Supplements
    { id: 51, name: "Casein Protein", category: "supplements", emoji: "💊", cal: 370, protein: 75, carbs: 10, fat: 3 },
    { id: 52, name: "Mass Gainer", category: "supplements", emoji: "💊", cal: 400, protein: 25, carbs: 65, fat: 5 },
    { id: 53, name: "BCAA Powder", category: "supplements", emoji: "💊", cal: 10, protein: 2.5, carbs: 0, fat: 0 },
    { id: 54, name: "Creatine", category: "supplements", emoji: "💊", cal: 0, protein: 0, carbs: 0, fat: 0 },

    // Indian Foods
    { id: 55, name: "Poha", category: "indian", emoji: "🍛", cal: 130, protein: 2.7, carbs: 26, fat: 3.8 },
    { id: 56, name: "Idli", category: "indian", emoji: "🫓", cal: 58, protein: 1.9, carbs: 10.9, fat: 0.4 },
    { id: 57, name: "Dosa (Plain)", category: "indian", emoji: "🥞", cal: 168, protein: 3.9, carbs: 30, fat: 3.7 },
    { id: 58, name: "Masala Dosa", category: "indian", emoji: "🥞", cal: 210, protein: 5.5, carbs: 36, fat: 6.0 },
    { id: 59, name: "Upma", category: "indian", emoji: "🍲", cal: 156, protein: 4.5, carbs: 26, fat: 4.0 },
    { id: 60, name: "Naan", category: "indian", emoji: "🫓", cal: 317, protein: 9.4, carbs: 56, fat: 6.8 },
    { id: 61, name: "Aloo Paratha", category: "indian", emoji: "🫓", cal: 320, protein: 7.0, carbs: 48, fat: 11 },
    { id: 62, name: "Plain Paratha", category: "indian", emoji: "🫓", cal: 297, protein: 7.4, carbs: 44, fat: 10.1 },
    { id: 63, name: "Puri", category: "indian", emoji: "🫓", cal: 340, protein: 7.0, carbs: 45, fat: 14 },
    { id: 64, name: "Butter Chicken", category: "indian", emoji: "🍗", cal: 150, protein: 12, carbs: 6.0, fat: 9.0 },
    { id: 65, name: "Dal Tadka", category: "indian", emoji: "🍲", cal: 94, protein: 5.4, carbs: 12, fat: 2.8 },
    { id: 66, name: "Rajma", category: "indian", emoji: "🫘", cal: 127, protein: 8.7, carbs: 22.8, fat: 0.5 },
    { id: 67, name: "Chole (Chickpea Curry)", category: "indian", emoji: "🫘", cal: 164, protein: 8.9, carbs: 27, fat: 2.6 },
    { id: 68, name: "Moong Dal", category: "indian", emoji: "🫘", cal: 105, protein: 7.5, carbs: 18, fat: 0.4 },
    { id: 69, name: "Toor Dal", category: "indian", emoji: "🫘", cal: 114, protein: 7.0, carbs: 20, fat: 0.4 },
    { id: 70, name: "Chana Dal", category: "indian", emoji: "🫘", cal: 120, protein: 7.6, carbs: 20, fat: 1.0 },
    { id: 71, name: "Palak Paneer", category: "indian", emoji: "🧀", cal: 185, protein: 11, carbs: 7.0, fat: 13 },
    { id: 72, name: "Paneer Tikka", category: "indian", emoji: "🧀", cal: 290, protein: 20, carbs: 8.0, fat: 20 },
    { id: 73, name: "Tandoori Chicken", category: "indian", emoji: "🍗", cal: 170, protein: 25, carbs: 4.0, fat: 6.0 },
    { id: 74, name: "Mutton Curry", category: "indian", emoji: "🥩", cal: 190, protein: 18, carbs: 5.0, fat: 11 },
    { id: 75, name: "Egg Bhurji", category: "indian", emoji: "🥚", cal: 175, protein: 11, carbs: 3.0, fat: 13 },
    { id: 76, name: "Fish Curry (Indian)", category: "indian", emoji: "🐟", cal: 135, protein: 14, carbs: 5.0, fat: 6.5 },
    { id: 77, name: "Chicken Biryani", category: "indian", emoji: "🍚", cal: 170, protein: 10, carbs: 22, fat: 5.0 },
    { id: 78, name: "Veg Biryani", category: "indian", emoji: "🍚", cal: 130, protein: 4.0, carbs: 25, fat: 2.5 },
    { id: 79, name: "Khichdi", category: "indian", emoji: "🍲", cal: 124, protein: 4.6, carbs: 23, fat: 1.4 },
    { id: 80, name: "Aloo Gobi", category: "indian", emoji: "🥔", cal: 77, protein: 2.5, carbs: 10, fat: 3.5 },
    { id: 81, name: "Sambar", category: "indian", emoji: "🍲", cal: 47, protein: 2.5, carbs: 7.0, fat: 1.2 },
    { id: 82, name: "Pav Bhaji", category: "indian", emoji: "🍞", cal: 210, protein: 5.0, carbs: 32, fat: 7.5 },
    { id: 83, name: "Vada Pav", category: "indian", emoji: "🍞", cal: 289, protein: 7.0, carbs: 43, fat: 9.8 },
    { id: 84, name: "Samosa", category: "indian", emoji: "🔺", cal: 265, protein: 5.0, carbs: 31, fat: 14 },
    { id: 85, name: "Dhokla", category: "indian", emoji: "🟨", cal: 160, protein: 5.8, carbs: 28, fat: 3.3 },
    { id: 86, name: "Raita", category: "indian", emoji: "🥛", cal: 59, protein: 2.8, carbs: 6.0, fat: 2.5 },
    { id: 87, name: "Sweet Lassi", category: "indian", emoji: "🥛", cal: 84, protein: 3.0, carbs: 11, fat: 3.2 },
    { id: 88, name: "Mango Lassi", category: "indian", emoji: "🥭", cal: 108, protein: 3.0, carbs: 18, fat: 3.0 },
    { id: 89, name: "Masala Chai", category: "indian", emoji: "☕", cal: 38, protein: 1.5, carbs: 5.5, fat: 1.0 },
    { id: 90, name: "Sabudana Khichdi", category: "indian", emoji: "🍚", cal: 205, protein: 2.5, carbs: 40, fat: 5.0 },
    { id: 91, name: "Mixed Sprouts", category: "indian", emoji: "🌱", cal: 40, protein: 4.0, carbs: 6.0, fat: 0.4 },
    { id: 92, name: "Coconut Chutney", category: "indian", emoji: "🥥", cal: 190, protein: 2.0, carbs: 11, fat: 16 },
    { id: 93, name: "Mint Chutney", category: "indian", emoji: "🌿", cal: 65, protein: 3.0, carbs: 10, fat: 1.5 },
    { id: 94, name: "Sheera / Halwa", category: "indian", emoji: "🍮", cal: 370, protein: 5.0, carbs: 55, fat: 14 },
];

// ==================== EXERCISE DATABASE ====================
const EXERCISE_DB = [
    // === CHEST ===
    { id: 'e1', name: 'Push-Ups', muscle: 'chest', difficulty: 'beginner', equipment: 'Bodyweight', sets: 3, reps: '12-15', emoji: '🧑‍💻', description: 'Standard push-ups on yoga mat' },
    { id: 'e2', name: 'Wide Push-Ups', muscle: 'chest', difficulty: 'beginner', equipment: 'Yoga Mat', sets: 3, reps: '10-12', emoji: '💪', description: 'Wider hand placement to target outer chest' },
    { id: 'e3', name: 'Dumbbell Chest Press', muscle: 'chest', difficulty: 'intermediate', equipment: 'Dumbbells', sets: 4, reps: '10-12', emoji: '🏋️', description: 'Lying on floor or ball, press dumbbells up' },
    { id: 'e4', name: 'Dumbbell Fly', muscle: 'chest', difficulty: 'intermediate', equipment: 'Exercise Ball', sets: 3, reps: '10-12', emoji: '🦸', description: 'Lying on exercise ball, open arms wide' },
    { id: 'e5', name: 'Decline Push-Ups', muscle: 'chest', difficulty: 'advanced', equipment: 'Exercise Ball', sets: 3, reps: '10-12', emoji: '🔻', description: 'Feet on exercise ball, hands on floor' },
    { id: 'e6', name: 'Diamond Push-Ups', muscle: 'chest', difficulty: 'advanced', equipment: 'Yoga Mat', sets: 3, reps: '8-10', emoji: '💎', description: 'Hands form diamond shape, targets inner chest' },

    // === TRICEPS ===
    { id: 'e7', name: 'Tricep Dips (Floor)', muscle: 'triceps', difficulty: 'beginner', equipment: 'Yoga Mat', sets: 3, reps: '12-15', emoji: '👋', description: 'Sit on mat, hands behind, dip down' },
    { id: 'e8', name: 'Dumbbell Tricep Kickback', muscle: 'triceps', difficulty: 'intermediate', equipment: 'Dumbbells', sets: 3, reps: '12 each', emoji: '💪', description: 'Bent over, extend arm back with dumbbell' },
    { id: 'e9', name: 'Overhead Tricep Extension', muscle: 'triceps', difficulty: 'intermediate', equipment: 'Dumbbells', sets: 3, reps: '10-12', emoji: '🏋️', description: 'Hold dumbbell overhead with both hands, lower behind head' },
    { id: 'e10', name: 'Close-Grip Push-Ups', muscle: 'triceps', difficulty: 'beginner', equipment: 'Yoga Mat', sets: 3, reps: '10-12', emoji: '✊', description: 'Hands close together under chest' },
    { id: 'e11', name: 'Skull Crushers', muscle: 'triceps', difficulty: 'advanced', equipment: 'Dumbbells', sets: 4, reps: '10-12', emoji: '💥', description: 'Lying down, lower dumbbells to either side of head' },
    { id: 'e12', name: 'Ball Tricep Extension', muscle: 'triceps', difficulty: 'advanced', equipment: 'Exercise Ball', sets: 3, reps: '10-12', emoji: '⚽', description: 'Arms on ball, body straight, extend elbows' },

    // === BACK ===
    { id: 'e13', name: 'Dumbbell Bent-Over Row', muscle: 'back', difficulty: 'beginner', equipment: 'Dumbbells', sets: 3, reps: '12 each', emoji: '🚣', description: 'Bend at hips, row dumbbell up to hip' },
    { id: 'e14', name: 'Superman Hold', muscle: 'back', difficulty: 'beginner', equipment: 'Yoga Mat', sets: 3, reps: '15-20s hold', emoji: '🦸‍♂️', description: 'Lying face down, lift arms and legs off mat' },
    { id: 'e15', name: 'Reverse Fly', muscle: 'back', difficulty: 'intermediate', equipment: 'Dumbbells', sets: 3, reps: '12-15', emoji: '🦵', description: 'Bent over, raise arms out to sides' },
    { id: 'e16', name: 'Renegade Row', muscle: 'back', difficulty: 'advanced', equipment: 'Dumbbells', sets: 3, reps: '8 each', emoji: '🔥', description: 'Plank position, row one dumbbell at a time' },
    { id: 'e17', name: 'Dumbbell Pullover', muscle: 'back', difficulty: 'intermediate', equipment: 'Exercise Ball', sets: 3, reps: '10-12', emoji: '🏋️', description: 'Lie on ball, lower dumbbell behind head in arc' },
    { id: 'e18', name: 'Good Mornings', muscle: 'back', difficulty: 'advanced', equipment: 'Dumbbells', sets: 3, reps: '10-12', emoji: '🌞', description: 'Dumbbells on shoulders, hinge at hips' },

    // === BICEPS ===
    { id: 'e19', name: 'Dumbbell Bicep Curl', muscle: 'biceps', difficulty: 'beginner', equipment: 'Dumbbells', sets: 3, reps: '12-15', emoji: '💪', description: 'Standing curls, classic bicep builder' },
    { id: 'e20', name: 'Hammer Curls', muscle: 'biceps', difficulty: 'beginner', equipment: 'Dumbbells', sets: 3, reps: '12 each', emoji: '🔨', description: 'Neutral grip curls, targets brachialis' },
    { id: 'e21', name: 'Concentration Curls', muscle: 'biceps', difficulty: 'intermediate', equipment: 'Dumbbells', sets: 3, reps: '10 each', emoji: '🎯', description: 'Seated, elbow on inner thigh, curl up' },
    { id: 'e22', name: 'Incline Curls (on Ball)', muscle: 'biceps', difficulty: 'intermediate', equipment: 'Exercise Ball', sets: 3, reps: '10-12', emoji: '⚽', description: 'Lean back on ball, curl dumbbells with stretch' },
    { id: 'e23', name: 'Zottman Curls', muscle: 'biceps', difficulty: 'advanced', equipment: 'Dumbbells', sets: 3, reps: '8-10', emoji: '🔄', description: 'Curl up palms up, rotate, lower palms down' },
    { id: 'e24', name: '21s Bicep Curls', muscle: 'biceps', difficulty: 'advanced', equipment: 'Dumbbells', sets: 3, reps: '21 (7+7+7)', emoji: '💯', description: '7 bottom half + 7 top half + 7 full range' },

    // === SHOULDERS ===
    { id: 'e25', name: 'Dumbbell Shoulder Press', muscle: 'shoulders', difficulty: 'beginner', equipment: 'Dumbbells', sets: 3, reps: '10-12', emoji: '⬆️', description: 'Press dumbbells overhead from shoulder height' },
    { id: 'e26', name: 'Lateral Raises', muscle: 'shoulders', difficulty: 'beginner', equipment: 'Dumbbells', sets: 3, reps: '12-15', emoji: '🦸', description: 'Raise arms out to sides to shoulder height' },
    { id: 'e27', name: 'Front Raises', muscle: 'shoulders', difficulty: 'intermediate', equipment: 'Dumbbells', sets: 3, reps: '10-12', emoji: '↖️', description: 'Raise dumbbells in front to shoulder height' },
    { id: 'e28', name: 'Arnold Press', muscle: 'shoulders', difficulty: 'intermediate', equipment: 'Dumbbells', sets: 3, reps: '10-12', emoji: '🏋️', description: 'Rotate palms while pressing overhead' },
    { id: 'e29', name: 'Pike Push-Ups', muscle: 'shoulders', difficulty: 'advanced', equipment: 'Yoga Mat', sets: 3, reps: '8-10', emoji: '🏔️', description: 'V-shape body position, press up targeting delts' },
    { id: 'e30', name: 'Ball Shoulder Taps', muscle: 'shoulders', difficulty: 'advanced', equipment: 'Exercise Ball', sets: 3, reps: '10 each', emoji: '👋', description: 'Plank with hands on ball, tap each shoulder' },

    // === LEGS ===
    { id: 'e31', name: 'Bodyweight Squats', muscle: 'legs', difficulty: 'beginner', equipment: 'Bodyweight', sets: 3, reps: '15-20', emoji: '🦵', description: 'Classic squat on yoga mat area' },
    { id: 'e32', name: 'Goblet Squats', muscle: 'legs', difficulty: 'intermediate', equipment: 'Dumbbells', sets: 4, reps: '12-15', emoji: '🏋️', description: 'Hold dumbbell at chest, squat deep' },
    { id: 'e33', name: 'Dumbbell Lunges', muscle: 'legs', difficulty: 'intermediate', equipment: 'Dumbbells', sets: 3, reps: '10 each', emoji: '👣', description: 'Walking or stationary lunges with dumbbells' },
    { id: 'e34', name: 'Romanian Deadlift', muscle: 'legs', difficulty: 'intermediate', equipment: 'Dumbbells', sets: 3, reps: '10-12', emoji: '💪', description: 'Hinge at hips with dumbbells along legs' },
    { id: 'e35', name: 'Bulgarian Split Squats', muscle: 'legs', difficulty: 'advanced', equipment: 'Exercise Ball', sets: 3, reps: '10 each', emoji: '🔥', description: 'Rear foot on ball, single-leg squat' },
    { id: 'e36', name: 'Dumbbell Step-Up', muscle: 'legs', difficulty: 'advanced', equipment: 'Dumbbells', sets: 3, reps: '10 each', emoji: '⬆️', description: 'Step up onto elevated surface holding dumbbells' },

    // === ABS ===
    { id: 'e37', name: 'Crunches', muscle: 'abs', difficulty: 'beginner', equipment: 'Yoga Mat', sets: 3, reps: '15-20', emoji: '🎯', description: 'Classic crunches lying on yoga mat' },
    { id: 'e38', name: 'Plank Hold', muscle: 'abs', difficulty: 'beginner', equipment: 'Yoga Mat', sets: 3, reps: '30-45s', emoji: '🧍', description: 'Hold plank position on forearms' },
    { id: 'e39', name: 'Russian Twists', muscle: 'abs', difficulty: 'intermediate', equipment: 'Dumbbells', sets: 3, reps: '20 total', emoji: '🔄', description: 'Seated, lean back, twist with dumbbell' },
    { id: 'e40', name: 'Ball Crunch', muscle: 'abs', difficulty: 'intermediate', equipment: 'Exercise Ball', sets: 3, reps: '15-20', emoji: '⚽', description: 'Lying back on exercise ball, crunch up' },
    { id: 'e41', name: 'Mountain Climbers', muscle: 'abs', difficulty: 'advanced', equipment: 'Yoga Mat', sets: 3, reps: '20 each', emoji: '⛰️', description: 'Plank position, drive knees to chest fast' },
    { id: 'e42', name: 'Ball Pike', muscle: 'abs', difficulty: 'advanced', equipment: 'Exercise Ball', sets: 3, reps: '10-12', emoji: '💥', description: 'Feet on ball, pike hips up to ceiling' },

    // === CARDIO ===
    { id: 'e43', name: 'Jump Rope', muscle: 'cardio', difficulty: 'beginner', equipment: 'Skipping Rope', sets: 3, reps: '60s', emoji: '🪢', description: 'Basic jump rope at steady pace' },
    { id: 'e44', name: 'Jogging in Place', muscle: 'cardio', difficulty: 'beginner', equipment: 'Bodyweight', sets: 3, reps: '2-3 min', emoji: '🏃', description: 'Jog in place, lift knees moderately' },
    { id: 'e45', name: 'High Knees', muscle: 'cardio', difficulty: 'intermediate', equipment: 'Bodyweight', sets: 3, reps: '30 each', emoji: '🦵', description: 'Run in place driving knees to chest height' },
    { id: 'e46', name: 'Burpees', muscle: 'cardio', difficulty: 'advanced', equipment: 'Yoga Mat', sets: 3, reps: '10-12', emoji: '🔥', description: 'Squat, jump back to plank, push-up, jump up' },
    { id: 'e47', name: 'Jumping Jacks', muscle: 'cardio', difficulty: 'beginner', equipment: 'Bodyweight', sets: 3, reps: '30', emoji: '⭐', description: 'Classic jumping jacks for full-body warmup' },
    { id: 'e48', name: 'Double-Under Jump Rope', muscle: 'cardio', difficulty: 'advanced', equipment: 'Skipping Rope', sets: 3, reps: '30', emoji: '🪢', description: 'Swing rope twice per jump — explosive' },
];

// ==================== DAILY WORKOUT PRESETS BY GOAL ====================
// Muscle Gain — heavier dumbbell work, hypertrophy focus, less cardio
const WORKOUTS_MUSCLE_GAIN = {
    0: { name: 'Sunday — Active Recovery', muscles: ['abs', 'cardio'], ids: ['e37', 'e38', 'e44', 'e47'] },
    1: { name: 'Monday — Chest & Triceps (Heavy)', muscles: ['chest', 'triceps'], ids: ['e3', 'e4', 'e5', 'e6', 'e9', 'e10', 'e11'] },
    2: { name: 'Tuesday — Back & Biceps (Heavy)', muscles: ['back', 'biceps'], ids: ['e13', 'e15', 'e17', 'e18', 'e19', 'e22', 'e24'] },
    3: { name: 'Wednesday — Shoulders & Abs', muscles: ['shoulders', 'abs'], ids: ['e25', 'e27', 'e28', 'e30', 'e39', 'e41', 'e42'] },
    4: { name: 'Thursday — Legs (Heavy)', muscles: ['legs'], ids: ['e32', 'e33', 'e34', 'e35', 'e36', 'e31'] },
    5: { name: 'Friday — Upper Body Push/Pull', muscles: ['chest', 'back'], ids: ['e1', 'e5', 'e6', 'e13', 'e16', 'e17', 'e18'] },
    6: { name: 'Saturday — Arms Hypertrophy', muscles: ['biceps', 'triceps'], ids: ['e19', 'e22', 'e23', 'e24', 'e8', 'e10', 'e11', 'e12'] },
};

// Fat Loss — cardio-heavy, circuits, HIIT-style
const WORKOUTS_FAT_LOSS = {
    0: { name: 'Sunday — Rest & Light Stretch', muscles: ['abs'], ids: ['e37', 'e38', 'e44'] },
    1: { name: 'Monday — HIIT Cardio & Chest', muscles: ['cardio', 'chest'], ids: ['e43', 'e45', 'e46', 'e1', 'e3', 'e4', 'e47'] },
    2: { name: 'Tuesday — Cardio & Back', muscles: ['cardio', 'back'], ids: ['e43', 'e44', 'e45', 'e13', 'e14', 'e15'] },
    3: { name: 'Wednesday — Full Body Circuit', muscles: ['cardio', 'legs', 'abs'], ids: ['e46', 'e47', 'e43', 'e31', 'e33', 'e41', 'e37'] },
    4: { name: 'Thursday — Cardio & Legs', muscles: ['cardio', 'legs'], ids: ['e43', 'e45', 'e48', 'e31', 'e32', 'e34', 'e35'] },
    5: { name: 'Friday — HIIT & Upper Body', muscles: ['cardio', 'shoulders', 'triceps'], ids: ['e46', 'e47', 'e43', 'e25', 'e26', 'e7', 'e8'] },
    6: { name: 'Saturday — Cardio Endurance', muscles: ['cardio', 'abs'], ids: ['e43', 'e44', 'e45', 'e47', 'e48', 'e37', 'e39'] },
};

// Maintaining / Stay Fit — balanced mix
const WORKOUTS_MAINTAIN = {
    0: { name: 'Sunday — Abs & Light Cardio', muscles: ['abs', 'cardio'], ids: ['e37', 'e38', 'e40', 'e44', 'e47'] },
    1: { name: 'Monday — Chest & Triceps', muscles: ['chest', 'triceps'], ids: ['e1', 'e3', 'e4', 'e7', 'e9', 'e43'] },
    2: { name: 'Tuesday — Back & Biceps', muscles: ['back', 'biceps'], ids: ['e13', 'e14', 'e15', 'e19', 'e20', 'e43'] },
    3: { name: 'Wednesday — Shoulders & Abs', muscles: ['shoulders', 'abs'], ids: ['e25', 'e26', 'e27', 'e37', 'e38', 'e39', 'e44'] },
    4: { name: 'Thursday — Legs & Cardio', muscles: ['legs', 'cardio'], ids: ['e31', 'e32', 'e33', 'e34', 'e43', 'e45'] },
    5: { name: 'Friday — Upper Body Mix', muscles: ['chest', 'back', 'cardio'], ids: ['e1', 'e5', 'e13', 'e16', 'e44', 'e47'] },
    6: { name: 'Saturday — Arms & Cardio', muscles: ['biceps', 'triceps', 'cardio'], ids: ['e19', 'e21', 'e8', 'e11', 'e43', 'e45'] },
};

// Helper — returns the right preset based on profile preference
function getWorkoutForDay(dayOfWeek) {
    const pref = state.profile.preference || 'stay-fit';
    let workouts;
    if (pref === 'muscle-gain') workouts = WORKOUTS_MUSCLE_GAIN;
    else if (pref === 'weight-loss') workouts = WORKOUTS_FAT_LOSS;
    else workouts = WORKOUTS_MAINTAIN; // stay-fit, general-health, athletic
    return workouts[dayOfWeek] || null;
}

// ==================== STATE ====================
let currentUser = null; // currently logged-in username

let state = {
    currentTab: 'dashboard',
    mealItems: [],         // Current meal builder items
    savedMeals: [],        // All saved meals
    calendarMeals: {},     // { "2026-02-26": [ mealId, ... ] }
    todos: [],             // { id, text, priority, completed, createdAt }
    waterIntake: 0,
    waterDate: '',
    profile: {
        name: '',
        gender: 'male',
        age: null,
        weight: null,
        height: null,
        activityLevel: 1.55,
        goal: 'maintain',
        preference: 'stay-fit',
    },
    targets: {
        calories: 2000,
        protein: 150,
        carbs: 250,
        fats: 65,
    },
    calendarMonth: new Date().getMonth(),
    calendarYear: new Date().getFullYear(),
    selectedDate: null,
    customFoods: [],
    todoFilter: 'all',
    foodFilter: 'all',
    // Exercises state
    exercises: [],              // current workout exercise list [{ exerciseId, completed }]
    exerciseMode: 'preset',     // 'preset' or 'custom'
    exerciseFilter: 'all',      // muscle group filter
    exerciseDiffFilter: 'all',  // difficulty filter
    exerciseDate: '',           // track which day the workout is for
    calendarTodos: {},           // { "2026-02-27": [{ id, text, done }] }
    pendingCalendarDate: null,   // when redirected from calendar to calculator
};

// ==================== INIT ====================
document.addEventListener('DOMContentLoaded', () => {
    initAuth();
});

// ==================== FIREBASE INIT ====================
const firebaseConfig = {
    apiKey: "AIzaSyCt37_4T_8i-99w0WdhTZ8QaN8dQYv7Bqw",
    authDomain: "fitfuel-70cb8.firebaseapp.com",
    projectId: "fitfuel-70cb8",
    storageBucket: "fitfuel-70cb8.firebasestorage.app",
    messagingSenderId: "657475050056",
    appId: "1:657475050056:web:4673beafcd62947b76167d",
    measurementId: "G-ZFS1NJSFX4"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();

// ==================== AUTHENTICATION ====================
function initAuth() {
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    const showSignup = document.getElementById('showSignup');
    const showLogin = document.getElementById('showLogin');
    const logoutBtn = document.getElementById('logoutBtn');

    showSignup.addEventListener('click', (e) => {
        e.preventDefault();
        document.getElementById('loginCard').style.display = 'none';
        document.getElementById('signupCard').style.display = 'block';
    });
    showLogin.addEventListener('click', (e) => {
        e.preventDefault();
        document.getElementById('signupCard').style.display = 'none';
        document.getElementById('loginCard').style.display = 'block';
    });

    // Email Login
    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const email = document.getElementById('loginEmail').value.trim();
        const password = document.getElementById('loginPassword').value;
        if (!email || !password) { showToast('Please fill in all fields', 'error'); return; }

        try {
            await auth.signInWithEmailAndPassword(email, password);
        } catch (err) {
            showToast(getFirebaseErrorMsg(err), 'error');
        }
    });

    // Email Signup
    signupForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const email = document.getElementById('signupEmail').value.trim();
        const password = document.getElementById('signupPassword').value;
        const confirm = document.getElementById('signupConfirm').value;

        if (!email || !password || !confirm) { showToast('Please fill in all fields', 'error'); return; }
        if (password.length < 6) { showToast('Password must be at least 6 characters', 'error'); return; }
        if (password !== confirm) { showToast('Passwords do not match', 'error'); return; }

        try {
            await auth.createUserWithEmailAndPassword(email, password);
            showToast('Account created! Welcome to FitFuel! 🎉', 'success');
        } catch (err) {
            showToast(getFirebaseErrorMsg(err), 'error');
        }
    });

    // Google Sign-In (both buttons do the same thing)
    document.getElementById('googleLoginBtn').addEventListener('click', googleSignIn);
    document.getElementById('googleSignupBtn').addEventListener('click', googleSignIn);

    // Logout
    logoutBtn.addEventListener('click', () => {
        auth.signOut();
    });

    // Firebase auth state listener — this is the single source of truth
    auth.onAuthStateChanged((user) => {
        if (user) {
            loginUser(user);
        } else {
            logoutCleanup();
        }
    });
}

async function googleSignIn() {
    try {
        await auth.signInWithPopup(googleProvider);
    } catch (err) {
        if (err.code !== 'auth/popup-closed-by-user') {
            showToast(getFirebaseErrorMsg(err), 'error');
        }
    }
}

function getFirebaseErrorMsg(err) {
    switch (err.code) {
        case 'auth/user-not-found': return 'No account found with this email';
        case 'auth/wrong-password': return 'Incorrect password';
        case 'auth/invalid-credential': return 'Invalid email or password';
        case 'auth/email-already-in-use': return 'This email is already registered';
        case 'auth/weak-password': return 'Password is too weak (min 6 characters)';
        case 'auth/invalid-email': return 'Please enter a valid email address';
        case 'auth/too-many-requests': return 'Too many attempts. Please try again later';
        case 'auth/network-request-failed': return 'Network error. Check your connection';
        default: return err.message || 'Authentication failed';
    }
}

function loginUser(firebaseUser) {
    currentUser = firebaseUser.uid;
    document.getElementById('authOverlay').classList.remove('show');

    // Display name: use displayName (Google), fallback to email prefix
    const displayName = firebaseUser.displayName || firebaseUser.email.split('@')[0];
    document.getElementById('userName').textContent = displayName;
    document.getElementById('userAvatar').textContent = displayName.charAt(0).toUpperCase();

    initApp();
}

function logoutCleanup() {
    currentUser = null;
    resetState();

    document.getElementById('authOverlay').classList.add('show');
    document.getElementById('loginCard').style.display = 'block';
    document.getElementById('signupCard').style.display = 'none';

    // Clear form fields
    const loginEmail = document.getElementById('loginEmail');
    const loginPassword = document.getElementById('loginPassword');
    if (loginEmail) loginEmail.value = '';
    if (loginPassword) loginPassword.value = '';
}

function resetState() {
    state.currentTab = 'dashboard';
    state.mealItems = [];
    state.savedMeals = [];
    state.calendarMeals = {};
    state.todos = [];
    state.waterIntake = 0;
    state.waterDate = '';
    state.profile = { name: '', gender: 'male', age: null, weight: null, height: null, activityLevel: 1.55, goal: 'maintain', preference: 'stay-fit' };
    state.targets = { calories: 2000, protein: 150, carbs: 250, fats: 65 };
    state.customFoods = [];
    state.exercises = [];
    state.exerciseDate = '';
    state.calendarTodos = {};
}

let appInitialized = false;
function initApp() {
    loadState();
    initTheme();
    if (!appInitialized) {
        initNavigation();
        initDashboard();
        initCalculator();
        initCalendar();
        initTodos();
        initExercises();
        initProfile();
        appInitialized = true;
    }
    updateDashboard();
    renderTodos();
    renderFoodGrid();
    renderMealBuilder();
    renderCalendar();
    renderActiveWorkout();
    updatePresetInfo();
    restoreProfileUI();
}

// ==================== THEME TOGGLE ====================
function initTheme() {
    const toggle = document.getElementById('themeToggle');
    const saved = localStorage.getItem('fitfuel_theme');
    if (saved === 'light') {
        document.body.classList.add('light-theme');
    }

    toggle.addEventListener('click', () => {
        document.body.classList.toggle('light-theme');
        const isLight = document.body.classList.contains('light-theme');
        localStorage.setItem('fitfuel_theme', isLight ? 'light' : 'dark');
    });
}

// ==================== LOCAL STORAGE ====================
function getStorageKey() {
    return `fitfuel_data_${currentUser || 'anonymous'}`;
}

function saveState() {
    const toSave = {
        savedMeals: state.savedMeals,
        calendarMeals: state.calendarMeals,
        todos: state.todos,
        waterIntake: state.waterIntake,
        waterDate: state.waterDate,
        profile: state.profile,
        targets: state.targets,
        customFoods: state.customFoods,
        exercises: state.exercises,
        exerciseDate: state.exerciseDate,
        calendarTodos: state.calendarTodos,
    };
    localStorage.setItem(getStorageKey(), JSON.stringify(toSave));
}

function loadState() {
    const saved = localStorage.getItem(getStorageKey());
    if (saved) {
        const data = JSON.parse(saved);
        state.savedMeals = data.savedMeals || [];
        state.calendarMeals = data.calendarMeals || {};
        state.todos = data.todos || [];
        state.waterIntake = data.waterIntake || 0;
        state.waterDate = data.waterDate || '';
        state.profile = { ...state.profile, ...data.profile };
        state.targets = { ...state.targets, ...data.targets };
        state.customFoods = data.customFoods || [];
        state.exercises = data.exercises || [];
        state.exerciseDate = data.exerciseDate || '';
        state.calendarTodos = data.calendarTodos || {};
    }

    // Reset water and exercises if it's a new day
    const today = getTodayStr();
    if (state.waterDate !== today) {
        state.waterIntake = 0;
        state.waterDate = today;
    }
    if (state.exerciseDate !== today) {
        state.exercises = [];
        state.exerciseDate = today;
    }
    saveState();
}

// ==================== UTILITIES ====================
function getTodayStr() {
    const d = new Date();
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

function formatDate(dateStr) {
    const d = new Date(dateStr + 'T00:00:00');
    return d.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' });
}

function generateId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2, 5);
}

function showToast(message, type = 'success') {
    const container = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    const icons = { success: '✅', error: '❌', info: 'ℹ️' };
    toast.innerHTML = `<span>${icons[type] || '✅'}</span><span>${message}</span>`;
    container.appendChild(toast);
    setTimeout(() => {
        toast.classList.add('toast-out');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

function getGreeting() {
    const h = new Date().getHours();
    let greeting;
    if (h < 12) greeting = 'Good Morning ☀️';
    else if (h < 17) greeting = 'Good Afternoon 👋';
    else if (h < 21) greeting = 'Good Evening 🌆';
    else greeting = 'Good Night 🌙';

    const name = state.profile.name;
    if (name) greeting += `, ${name}`;
    return greeting;
}

function getAllFoods() {
    return [...FOOD_DB, ...state.customFoods];
}

// ==================== NAVIGATION ====================
function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const tabs = document.querySelectorAll('.tab-content');

    function switchTab(tabId) {
        tabs.forEach(t => t.classList.remove('active'));
        navLinks.forEach(l => l.classList.remove('active'));

        const target = document.getElementById(`tab-${tabId}`);
        if (target) target.classList.add('active');

        const link = document.querySelector(`.nav-link[data-tab="${tabId}"]`);
        if (link) link.classList.add('active');

        state.currentTab = tabId;

        if (tabId === 'dashboard') updateDashboard();
        if (tabId === 'calculator') renderFoodGrid();
        if (tabId === 'calendar') renderCalendar();

        // Close mobile sidebar
        document.getElementById('sidebar').classList.remove('open');
    }

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const tab = link.getAttribute('data-tab');
            switchTab(tab);
        });
    });

    // Handle hash navigation
    const hash = window.location.hash.replace('#', '') || 'dashboard';
    switchTab(hash);

    // Mobile hamburger
    const hamburger = document.getElementById('hamburger');
    hamburger.addEventListener('click', () => {
        document.getElementById('sidebar').classList.toggle('open');
    });

    // Also handle links inside content that switch tabs
    document.addEventListener('click', (e) => {
        const link = e.target.closest('[data-tab]');
        if (link && !link.classList.contains('nav-link')) {
            e.preventDefault();
            switchTab(link.getAttribute('data-tab'));
        }
    });
}

// ==================== DASHBOARD ====================
function initDashboard() {
    document.getElementById('greetingText').textContent = getGreeting();
    document.getElementById('dateDisplay').textContent = new Date().toLocaleDateString('en-US', {
        weekday: 'long', month: 'long', day: 'numeric', year: 'numeric'
    });

    // Water tracker
    document.getElementById('addWater').addEventListener('click', () => {
        if (state.waterIntake < 12) {
            state.waterIntake++;
            updateWaterDisplay();
            saveState();
            showToast('💧 Glass of water added!', 'info');
        }
    });
    document.getElementById('removeWater').addEventListener('click', () => {
        if (state.waterIntake > 0) {
            state.waterIntake--;
            updateWaterDisplay();
            saveState();
        }
    });
    document.getElementById('resetWater').addEventListener('click', () => {
        state.waterIntake = 0;
        updateWaterDisplay();
        saveState();
    });
}

function updateDashboard() {
    // Update greeting with user name
    document.getElementById('greetingText').textContent = getGreeting();

    const today = getTodayStr();
    const todayMealIds = state.calendarMeals[today] || [];
    const todayMeals = todayMealIds.map(id => state.savedMeals.find(m => m.id === id)).filter(Boolean);

    let totalCal = 0, totalProt = 0, totalCarb = 0, totalFat = 0;
    todayMeals.forEach(m => {
        totalCal += m.totalCal;
        totalProt += m.totalProt;
        totalCarb += m.totalCarb;
        totalFat += m.totalFat;
    });

    // Update values
    document.getElementById('dashCalories').textContent = Math.round(totalCal);
    document.getElementById('dashProtein').textContent = Math.round(totalProt) + 'g';
    document.getElementById('dashCarbs').textContent = Math.round(totalCarb) + 'g';
    document.getElementById('dashFats').textContent = Math.round(totalFat) + 'g';

    // Update targets
    document.getElementById('dashCalTarget').textContent = `/ ${state.targets.calories} kcal`;
    document.getElementById('dashProtTarget').textContent = `/ ${state.targets.protein}g`;
    document.getElementById('dashCarbTarget').textContent = `/ ${state.targets.carbs}g`;
    document.getElementById('dashFatTarget').textContent = `/ ${state.targets.fats}g`;

    // Progress rings (circumference = 2 * PI * 34 ≈ 213.6)
    const circumference = 213.6;
    const calPct = Math.min(totalCal / state.targets.calories, 1);
    const protPct = Math.min(totalProt / state.targets.protein, 1);
    const carbPct = Math.min(totalCarb / state.targets.carbs, 1);
    const fatPct = Math.min(totalFat / state.targets.fats, 1);

    document.getElementById('calRing').style.strokeDashoffset = circumference * (1 - calPct);
    document.getElementById('protRing').style.strokeDashoffset = circumference * (1 - protPct);
    document.getElementById('carbRing').style.strokeDashoffset = circumference * (1 - carbPct);
    document.getElementById('fatRing').style.strokeDashoffset = circumference * (1 - fatPct);

    // Water display
    updateWaterDisplay();

    // Today's meals list
    const mealsList = document.getElementById('todaysMealsList');
    if (todayMeals.length === 0) {
        mealsList.innerHTML = `
            <div class="empty-state">
                <span class="empty-icon">🥗</span>
                <p>No meals logged today</p>
                <a href="#calculator" class="btn btn-sm btn-accent" data-tab="calculator">Add Meal</a>
            </div>`;
    } else {
        mealsList.innerHTML = todayMeals.map((m, i) => `
            <div class="meal-log-item">
                <div>
                    <div class="meal-log-name">${m.name}</div>
                    <div class="meal-log-macros">
                        <span>🔥 ${Math.round(m.totalCal)} kcal</span>
                        <span>🥩 ${Math.round(m.totalProt)}g</span>
                        <span>🍚 ${Math.round(m.totalCarb)}g</span>
                        <span>🥑 ${Math.round(m.totalFat)}g</span>
                    </div>
                </div>
                <button class="meal-log-delete" data-meal-id="${m.id}" data-date="${today}" title="Remove from today">×</button>
            </div>
        `).join('');

        mealsList.querySelectorAll('.meal-log-delete').forEach(btn => {
            btn.addEventListener('click', () => {
                const mealId = btn.dataset.mealId;
                const date = btn.dataset.date;
                state.calendarMeals[date] = state.calendarMeals[date].filter(id => id !== mealId);
                if (state.calendarMeals[date].length === 0) delete state.calendarMeals[date];
                saveState();
                updateDashboard();
                showToast('Meal removed from today', 'info');
            });
        });
    }
}

function updateWaterDisplay() {
    const pct = Math.min(state.waterIntake / 8, 1) * 100;
    document.getElementById('waterFill').style.height = pct + '%';
    document.getElementById('waterLabel').textContent = `${state.waterIntake} / 8 glasses`;
}

// ==================== CALORIE CALCULATOR ====================
let selectedFood = null;

function initCalculator() {
    const searchInput = document.getElementById('foodSearch');
    const searchResults = document.getElementById('searchResults');

    // Food search
    searchInput.addEventListener('input', () => {
        const q = searchInput.value.toLowerCase().trim();
        if (q.length < 1) {
            searchResults.classList.remove('show');
            return;
        }
        const foods = getAllFoods().filter(f => f.name.toLowerCase().includes(q));
        if (foods.length === 0) {
            searchResults.classList.remove('show');
            return;
        }
        searchResults.innerHTML = foods.slice(0, 10).map(f => `
            <div class="search-result-item" data-food-id="${f.id}">
                <span class="food-name">${f.emoji} ${f.name}</span>
                <span class="food-cal">${f.cal} kcal/100g</span>
            </div>
        `).join('');
        searchResults.classList.add('show');

        searchResults.querySelectorAll('.search-result-item').forEach(item => {
            item.addEventListener('click', () => {
                const food = getAllFoods().find(f => f.id == item.dataset.foodId);
                if (food) openFoodModal(food);
                searchResults.classList.remove('show');
                searchInput.value = '';
            });
        });
    });

    // Close search on outside click
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.search-box')) {
            searchResults.classList.remove('show');
        }
    });

    // Category filters
    document.getElementById('categoryFilters').addEventListener('click', (e) => {
        const chip = e.target.closest('.filter-chip');
        if (!chip) return;
        document.querySelectorAll('#categoryFilters .filter-chip').forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        state.foodFilter = chip.dataset.category;
        renderFoodGrid();
    });

    // Custom food
    document.getElementById('addCustomFood').addEventListener('click', addCustomFood);

    // Meal actions
    document.getElementById('saveMeal').addEventListener('click', saveMeal);
    document.getElementById('clearMeal').addEventListener('click', () => {
        state.mealItems = [];
        renderMealBuilder();
    });

    // Modal
    document.getElementById('closeModal').addEventListener('click', closeModal);
    document.getElementById('modalCancelBtn').addEventListener('click', closeModal);
    document.getElementById('foodModal').addEventListener('click', (e) => {
        if (e.target.id === 'foodModal') closeModal();
    });
    document.getElementById('modalAmount').addEventListener('input', updateModalCalc);
    document.getElementById('modalAddBtn').addEventListener('click', addFoodToMeal);

    renderFoodGrid();
    renderMealBuilder();
}

function renderFoodGrid() {
    const grid = document.getElementById('foodGrid');
    let foods = getAllFoods();
    if (state.foodFilter !== 'all') {
        foods = foods.filter(f => f.category === state.foodFilter);
    }
    grid.innerHTML = foods.map(f => `
        <div class="food-card" data-food-id="${f.id}">
            <div class="food-card-emoji">${f.emoji}</div>
            <div class="food-card-name">${f.name}</div>
            <div class="food-card-cal">${f.cal} kcal / 100g</div>
        </div>
    `).join('');

    grid.querySelectorAll('.food-card').forEach(card => {
        card.addEventListener('click', () => {
            const food = getAllFoods().find(f => f.id == card.dataset.foodId);
            if (food) openFoodModal(food);
        });
    });
}

function openFoodModal(food) {
    selectedFood = food;
    document.getElementById('modalFoodName').textContent = `${food.emoji} ${food.name}`;
    document.getElementById('modalFoodInfo').textContent = `per 100g: ${food.cal} kcal | ${food.protein}g P | ${food.carbs}g C | ${food.fat}g F`;
    document.getElementById('modalAmount').value = 100;
    updateModalCalc();
    document.getElementById('foodModal').classList.add('show');
}

function closeModal() {
    document.getElementById('foodModal').classList.remove('show');
    selectedFood = null;
}

function updateModalCalc() {
    if (!selectedFood) return;
    const amount = parseFloat(document.getElementById('modalAmount').value) || 0;
    const ratio = amount / 100;
    document.getElementById('modalCalc').textContent = `${Math.round(selectedFood.cal * ratio)} kcal`;
    document.getElementById('modalProt').textContent = `${(selectedFood.protein * ratio).toFixed(1)}g`;
    document.getElementById('modalCarb').textContent = `${(selectedFood.carbs * ratio).toFixed(1)}g`;
    document.getElementById('modalFat').textContent = `${(selectedFood.fat * ratio).toFixed(1)}g`;
}

function addFoodToMeal() {
    if (!selectedFood) return;
    const amount = parseFloat(document.getElementById('modalAmount').value) || 100;
    const ratio = amount / 100;
    state.mealItems.push({
        id: generateId(),
        foodId: selectedFood.id,
        name: selectedFood.name,
        emoji: selectedFood.emoji,
        amount: amount,
        cal: Math.round(selectedFood.cal * ratio),
        protein: +(selectedFood.protein * ratio).toFixed(1),
        carbs: +(selectedFood.carbs * ratio).toFixed(1),
        fat: +(selectedFood.fat * ratio).toFixed(1),
    });
    closeModal();
    renderMealBuilder();
    showToast(`Added ${amount}g ${selectedFood.name}`, 'success');
}

function renderMealBuilder() {
    const container = document.getElementById('mealItems');

    if (state.mealItems.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <span class="empty-icon">📋</span>
                <p>Click a food to add it to your meal</p>
            </div>`;
    } else {
        container.innerHTML = state.mealItems.map(item => `
            <div class="meal-item">
                <div class="meal-item-info">
                    <span class="meal-item-name">${item.emoji} ${item.name}</span>
                    <span class="meal-item-detail">${item.amount}g • P:${item.protein}g C:${item.carbs}g F:${item.fat}g</span>
                </div>
                <span class="meal-item-cals">${item.cal} kcal</span>
                <button class="meal-item-remove" data-item-id="${item.id}">×</button>
            </div>
        `).join('');

        container.querySelectorAll('.meal-item-remove').forEach(btn => {
            btn.addEventListener('click', () => {
                state.mealItems = state.mealItems.filter(i => i.id !== btn.dataset.itemId);
                renderMealBuilder();
            });
        });
    }

    // Update totals
    const totals = state.mealItems.reduce((acc, item) => {
        acc.cal += item.cal;
        acc.protein += item.protein;
        acc.carbs += item.carbs;
        acc.fat += item.fat;
        return acc;
    }, { cal: 0, protein: 0, carbs: 0, fat: 0 });

    document.getElementById('totalCalories').textContent = `${Math.round(totals.cal)} kcal`;
    document.getElementById('totalProtein').textContent = `${totals.protein.toFixed(1)}g`;
    document.getElementById('totalCarbs').textContent = `${totals.carbs.toFixed(1)}g`;
    document.getElementById('totalFats').textContent = `${totals.fat.toFixed(1)}g`;

    // Legend
    document.getElementById('legendProt').textContent = `${totals.protein.toFixed(1)}g`;
    document.getElementById('legendCarb').textContent = `${totals.carbs.toFixed(1)}g`;
    document.getElementById('legendFat').textContent = `${totals.fat.toFixed(1)}g`;

    // Draw macro chart
    drawMacroChart(totals.protein, totals.carbs, totals.fat);
}

function drawMacroChart(protein, carbs, fats) {
    const canvas = document.getElementById('macroChart');
    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    canvas.width = 200 * dpr;
    canvas.height = 200 * dpr;
    ctx.scale(dpr, dpr);

    const cx = 100, cy = 100, r = 70;
    const total = protein + carbs + fats;

    ctx.clearRect(0, 0, 200, 200);

    if (total === 0) {
        // Empty state ring
        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(255,255,255,0.06)';
        ctx.lineWidth = 20;
        ctx.stroke();

        ctx.fillStyle = 'rgba(255,255,255,0.2)';
        ctx.font = '500 13px Inter, sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('No data', cx, cy);
        return;
    }

    const slices = [
        { value: protein, color: '#00d4ff' },
        { value: carbs, color: '#ffd93d' },
        { value: fats, color: '#ff8c42' },
    ];

    let startAngle = -Math.PI / 2;
    slices.forEach(slice => {
        const sliceAngle = (slice.value / total) * Math.PI * 2;
        ctx.beginPath();
        ctx.arc(cx, cy, r, startAngle, startAngle + sliceAngle);
        ctx.strokeStyle = slice.color;
        ctx.lineWidth = 20;
        ctx.lineCap = 'round';
        ctx.stroke();
        startAngle += sliceAngle + 0.04; // small gap
    });

    // Center text
    ctx.fillStyle = '#f0f0f5';
    ctx.font = '800 18px Inter, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(`${Math.round(total * 4)}`, cx, cy - 8); // rough kcal from macros
    ctx.fillStyle = 'rgba(255,255,255,0.4)';
    ctx.font = '500 11px Inter, sans-serif';
    ctx.fillText('macro kcal', cx, cy + 10);
}

function saveMeal() {
    if (state.mealItems.length === 0) {
        showToast('Add some foods first!', 'error');
        return;
    }
    const name = document.getElementById('mealName').value.trim() || 'Meal';
    const today = getTodayStr();

    const totals = state.mealItems.reduce((acc, item) => {
        acc.cal += item.cal;
        acc.protein += item.protein;
        acc.carbs += item.carbs;
        acc.fat += item.fat;
        return acc;
    }, { cal: 0, protein: 0, carbs: 0, fat: 0 });

    const meal = {
        id: generateId(),
        name: name,
        items: [...state.mealItems],
        date: today,
        totalCal: Math.round(totals.cal),
        totalProt: +totals.protein.toFixed(1),
        totalCarb: +totals.carbs.toFixed(1),
        totalFat: +totals.fat.toFixed(1),
    };

    state.savedMeals.push(meal);

    // Assign to pending calendar date if set, otherwise to today
    const targetDate = state.pendingCalendarDate || today;
    if (!state.calendarMeals[targetDate]) state.calendarMeals[targetDate] = [];
    state.calendarMeals[targetDate].push(meal.id);

    const assignMsg = state.pendingCalendarDate
        ? `"${name}" saved and assigned to ${formatDate(state.pendingCalendarDate)}! 🎉`
        : `"${name}" saved and logged for today! 🎉`;

    state.pendingCalendarDate = null;
    state.mealItems = [];
    document.getElementById('mealName').value = 'Meal';
    renderMealBuilder();
    saveState();
    showToast(assignMsg, 'success');
}

function addCustomFood() {
    const name = document.getElementById('customFoodName').value.trim();
    const cal = parseFloat(document.getElementById('customFoodCal').value) || 0;
    const prot = parseFloat(document.getElementById('customFoodProt').value) || 0;
    const carb = parseFloat(document.getElementById('customFoodCarb').value) || 0;
    const fat = parseFloat(document.getElementById('customFoodFat').value) || 0;

    if (!name) {
        showToast('Please enter a food name', 'error');
        return;
    }

    const newFood = {
        id: 'custom_' + generateId(),
        name,
        category: 'protein', // default
        emoji: '🍽️',
        cal, protein: prot, carbs: carb, fat,
    };

    state.customFoods.push(newFood);
    saveState();
    renderFoodGrid();

    // Clear inputs
    document.getElementById('customFoodName').value = '';
    document.getElementById('customFoodCal').value = '';
    document.getElementById('customFoodProt').value = '';
    document.getElementById('customFoodCarb').value = '';
    document.getElementById('customFoodFat').value = '';

    showToast(`"${name}" added to your food list!`, 'success');
}

// ==================== CALENDAR ====================
function initCalendar() {
    document.getElementById('prevMonth').addEventListener('click', () => {
        state.calendarMonth--;
        if (state.calendarMonth < 0) {
            state.calendarMonth = 11;
            state.calendarYear--;
        }
        renderCalendar();
    });
    document.getElementById('nextMonth').addEventListener('click', () => {
        state.calendarMonth++;
        if (state.calendarMonth > 11) {
            state.calendarMonth = 0;
            state.calendarYear++;
        }
        renderCalendar();
    });

    document.getElementById('assignMealBtn').addEventListener('click', assignMealToDay);

    // Calendar day-specific to-do add
    document.getElementById('addDayTodoBtn').addEventListener('click', addCalendarTodo);
    document.getElementById('dayTodoInput').addEventListener('keydown', (e) => {
        if (e.key === 'Enter') addCalendarTodo();
    });

    renderCalendar();
}

function renderCalendar() {
    const year = state.calendarYear;
    const month = state.calendarMonth;
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'];

    document.getElementById('calendarMonth').textContent = `${monthNames[month]} ${year}`;

    const grid = document.getElementById('calendarGrid');
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const daysInPrevMonth = new Date(year, month, 0).getDate();
    const today = getTodayStr();

    let html = '';

    // Previous month days
    for (let i = firstDay - 1; i >= 0; i--) {
        html += `<div class="calendar-day other-month">${daysInPrevMonth - i}</div>`;
    }

    // Current month days
    for (let d = 1; d <= daysInMonth; d++) {
        const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
        const isToday = dateStr === today;
        const isSelected = dateStr === state.selectedDate;
        const hasMeals = state.calendarMeals[dateStr] && state.calendarMeals[dateStr].length > 0;

        let classes = 'calendar-day';
        if (isToday) classes += ' today';
        if (isSelected) classes += ' selected';
        if (hasMeals) classes += ' has-meals';

        html += `<div class="${classes}" data-date="${dateStr}">${d}</div>`;
    }

    // Next month days
    const totalCells = firstDay + daysInMonth;
    const remaining = totalCells % 7 === 0 ? 0 : 7 - (totalCells % 7);
    for (let i = 1; i <= remaining; i++) {
        html += `<div class="calendar-day other-month">${i}</div>`;
    }

    grid.innerHTML = html;

    grid.querySelectorAll('.calendar-day:not(.other-month)').forEach(day => {
        day.addEventListener('click', () => {
            state.selectedDate = day.dataset.date;
            renderCalendar();
            renderDayDetail();
        });
    });

    // Also refresh day detail if something is selected
    if (state.selectedDate) renderDayDetail();
}

function renderDayDetail() {
    const date = state.selectedDate;
    if (!date) return;

    document.getElementById('dayDetailTitle').textContent = '📅 ' + formatDate(date);
    document.getElementById('dayActions').style.display = 'flex';

    // === WORKOUT SECTION ===
    const workoutSection = document.getElementById('dayWorkoutSection');
    const workoutInfo = document.getElementById('dayWorkoutInfo');
    const dayOfWeek = new Date(date).getDay();
    const preset = getWorkoutForDay(dayOfWeek);

    workoutSection.style.display = 'block';
    if (preset) {
        const exercises = preset.ids.map(id => EXERCISE_DB.find(e => e.id === id)).filter(Boolean);
        workoutInfo.innerHTML = `
            <div class="day-workout-name">${preset.name}</div>
            <div class="day-workout-exercises">
                ${exercises.map(ex => `
                    <span class="day-workout-chip">${ex.emoji} ${ex.name}</span>
                `).join('')}
            </div>
        `;
    } else {
        workoutInfo.innerHTML = '<p style="color:var(--text-muted);font-size:0.85rem;">Rest day 😌</p>';
    }

    // === MEALS SECTION ===
    const mealIds = state.calendarMeals[date] || [];
    const meals = mealIds.map(id => state.savedMeals.find(m => m.id === id)).filter(Boolean);
    const container = document.getElementById('dayMeals');

    if (meals.length === 0) {
        container.innerHTML = `
            <p style="color:var(--text-muted);font-size:0.85rem;">No meals planned</p>`;
    } else {
        container.innerHTML = meals.map(m => `
            <div class="day-meal-item">
                <div>
                    <div class="day-meal-name">${m.name}</div>
                    <div style="font-size:0.75rem;color:var(--text-muted)">P:${m.totalProt}g C:${m.totalCarb}g F:${m.totalFat}g</div>
                </div>
                <div style="display:flex;align-items:center;">
                    <span class="day-meal-cal">${m.totalCal} kcal</span>
                    <button class="day-meal-remove" data-meal-id="${m.id}">×</button>
                </div>
            </div>
        `).join('');

        container.querySelectorAll('.day-meal-remove').forEach(btn => {
            btn.addEventListener('click', () => {
                state.calendarMeals[date] = state.calendarMeals[date].filter(id => id !== btn.dataset.mealId);
                if (state.calendarMeals[date].length === 0) delete state.calendarMeals[date];
                saveState();
                renderCalendar();
                renderDayDetail();
                updateDashboard();
                showToast('Meal removed from this day', 'info');
            });
        });
    }

    // === CALENDAR TODOS SECTION ===
    const todoSection = document.getElementById('dayTodoSection');
    const todoList = document.getElementById('dayTodoList');
    todoSection.style.display = 'block';

    // Merge calendar-specific todos with main todos that have this date
    const calTodos = (state.calendarTodos[date] || []).map(t => ({ ...t, source: 'calendar' }));
    const mainTodos = state.todos.filter(t => t.dueDate === date).map(t => ({
        id: t.id, text: t.text, done: t.completed, source: 'main',
        priority: t.priority
    }));
    const allTodos = [...calTodos, ...mainTodos];
    if (allTodos.length === 0) {
        todoList.innerHTML = '<p style="color:var(--text-muted);font-size:0.85rem;">No tasks for this day</p>';
    } else {
        todoList.innerHTML = allTodos.map(t => `
            <div class="day-todo-item ${t.done ? 'done' : ''}">
                <label class="day-todo-check">
                    <input type="checkbox" ${t.done ? 'checked' : ''} data-todo-id="${t.id}" data-source="${t.source}">
                    <span>${escapeHtml(t.text)}${t.priority ? ` <span class="todo-priority priority-${t.priority}" style="font-size:0.7rem;">${t.priority}</span>` : ''}</span>
                </label>
                <button class="day-todo-remove" data-todo-id="${t.id}" data-source="${t.source}">×</button>
            </div>
        `).join('');

        todoList.querySelectorAll('input[type="checkbox"]').forEach(cb => {
            cb.addEventListener('change', () => {
                if (cb.dataset.source === 'main') {
                    const todo = state.todos.find(t => t.id === cb.dataset.todoId);
                    if (todo) { todo.completed = cb.checked; saveState(); renderDayDetail(); renderTodos(); }
                } else {
                    const todo = (state.calendarTodos[date] || []).find(t => t.id === cb.dataset.todoId);
                    if (todo) { todo.done = cb.checked; saveState(); renderDayDetail(); }
                }
            });
        });
        todoList.querySelectorAll('.day-todo-remove').forEach(btn => {
            btn.addEventListener('click', () => {
                if (btn.dataset.source === 'main') {
                    state.todos = state.todos.filter(t => t.id !== btn.dataset.todoId);
                } else {
                    state.calendarTodos[date] = (state.calendarTodos[date] || []).filter(t => t.id !== btn.dataset.todoId);
                    if (state.calendarTodos[date].length === 0) delete state.calendarTodos[date];
                }
                saveState(); renderDayDetail(); renderTodos();
                showToast('Task removed', 'info');
            });
        });
    }

    // Populate meal select
    const select = document.getElementById('assignMealSelect');
    select.innerHTML = '<option value="">-- Select a saved meal --</option>' +
        state.savedMeals.map(m => `<option value="${m.id}">${m.name} (${m.totalCal} kcal)</option>`).join('');
}

function addCalendarTodo() {
    const date = state.selectedDate;
    const input = document.getElementById('dayTodoInput');
    const text = input.value.trim();
    if (!date) { showToast('Select a day first', 'error'); return; }
    if (!text) return;

    if (!state.calendarTodos[date]) state.calendarTodos[date] = [];
    state.calendarTodos[date].push({ id: generateId(), text, done: false });
    input.value = '';
    saveState();
    renderDayDetail();
    renderCalendar();
    showToast('Task added! ✅', 'success');
}

function assignMealToDay() {
    const date = state.selectedDate;
    const mealId = document.getElementById('assignMealSelect').value;

    if (!date) {
        showToast('Select a day first', 'error');
        return;
    }

    // If no meal selected, check if there are saved meals
    if (!mealId) {
        if (state.savedMeals.length === 0) {
            // Redirect to calculator with pending date
            state.pendingCalendarDate = date;
            const navLink = document.querySelector('.nav-link[data-tab="calculator"]');
            if (navLink) navLink.click();
            showToast(`Create a meal — it will be auto-assigned to ${formatDate(date)}`, 'info');
            return;
        }
        showToast('Select a meal from the dropdown', 'error');
        return;
    }

    if (!state.calendarMeals[date]) state.calendarMeals[date] = [];
    state.calendarMeals[date].push(mealId);
    saveState();
    renderCalendar();
    renderDayDetail();
    updateDashboard();

    const meal = state.savedMeals.find(m => m.id === mealId);
    showToast(`Assigned "${meal?.name}" to ${formatDate(date)}`, 'success');
}

// ==================== TO-DO LIST ====================
function initTodos() {
    document.getElementById('addTodo').addEventListener('click', addTodo);
    document.getElementById('todoInput').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') addTodo();
    });
    document.getElementById('clearCompleted').addEventListener('click', () => {
        state.todos = state.todos.filter(t => !t.completed);
        saveState();
        renderTodos();
        showToast('Completed tasks cleared', 'info');
    });

    // Filters
    document.getElementById('todoFilters').addEventListener('click', (e) => {
        const chip = e.target.closest('.filter-chip');
        if (!chip) return;
        document.querySelectorAll('#todoFilters .filter-chip').forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        state.todoFilter = chip.dataset.filter;
        renderTodos();
    });

    renderTodos();
}

function addTodo() {
    const input = document.getElementById('todoInput');
    const text = input.value.trim();
    if (!text) return;

    const priority = document.getElementById('todoPriority').value;
    const dueDateInput = document.getElementById('todoDueDate');
    const dueDate = dueDateInput.value || '';

    state.todos.unshift({
        id: generateId(),
        text,
        priority,
        completed: false,
        createdAt: new Date().toISOString(),
        dueDate: dueDate,
    });

    input.value = '';
    dueDateInput.value = '';
    saveState();
    renderTodos();
    showToast(dueDate ? `Task added for ${formatDate(dueDate)}!` : 'Task added!', 'success');
}

function renderTodos() {
    const container = document.getElementById('todoList');
    let todos = [...state.todos];

    // Apply filter
    switch (state.todoFilter) {
        case 'active': todos = todos.filter(t => !t.completed); break;
        case 'completed': todos = todos.filter(t => t.completed); break;
        case 'high': todos = todos.filter(t => t.priority === 'high'); break;
        case 'medium': todos = todos.filter(t => t.priority === 'medium'); break;
        case 'low': todos = todos.filter(t => t.priority === 'low'); break;
    }

    if (todos.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <span class="empty-icon">✅</span>
                <p>${state.todoFilter === 'all' ? 'No tasks yet. Add one above!' : 'No tasks match this filter'}</p>
            </div>`;
    } else {
        container.innerHTML = todos.map(t => `
            <div class="todo-item ${t.completed ? 'completed' : ''}" data-todo-id="${t.id}">
                <div class="todo-checkbox">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M5 13l4 4L19 7"/></svg>
                </div>
                <span class="todo-text">${escapeHtml(t.text)}</span>
                ${t.dueDate ? `<span class="todo-date">📅 ${formatDate(t.dueDate)}</span>` : ''}
                <span class="todo-priority priority-${t.priority}">${t.priority}</span>
                <button class="todo-delete" data-todo-id="${t.id}">×</button>
            </div>
        `).join('');

        container.querySelectorAll('.todo-checkbox').forEach(cb => {
            cb.addEventListener('click', () => {
                const item = cb.closest('.todo-item');
                const todo = state.todos.find(t => t.id === item.dataset.todoId);
                if (todo) {
                    todo.completed = !todo.completed;
                    saveState();
                    renderTodos();
                }
            });
        });

        container.querySelectorAll('.todo-delete').forEach(btn => {
            btn.addEventListener('click', () => {
                state.todos = state.todos.filter(t => t.id !== btn.dataset.todoId);
                saveState();
                renderTodos();
            });
        });
    }

    // Stats
    const active = state.todos.filter(t => !t.completed).length;
    const total = state.todos.length;
    document.getElementById('todoCount').textContent = `${active} active / ${total} total`;
}

function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
}

// ==================== PROFILE ====================
function initProfile() {
    // Save personal info
    document.getElementById('saveProfileInfo').addEventListener('click', () => {
        const name = document.getElementById('profileName').value.trim();
        const preference = document.getElementById('profilePreference').value;
        state.profile.name = name;
        state.profile.preference = preference;
        saveState();

        // Update sidebar user badge with name if set
        if (name) {
            document.getElementById('userName').textContent = name;
            document.getElementById('userAvatar').textContent = name.charAt(0).toUpperCase();
        }

        // Update greeting
        updateDashboard();
        showToast('Profile saved! 🎉', 'success');
    });

    // Gender toggle
    document.querySelectorAll('.gender-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.gender-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            state.profile.gender = btn.dataset.gender;
        });
    });

    // Auto-recalculate when preference changes
    document.getElementById('profilePreference').addEventListener('change', () => {
        state.profile.preference = document.getElementById('profilePreference').value;
        saveState();

        // If they have basic stats, auto-calculate and apply
        if (state.profile.age && state.profile.weight && state.profile.height) {
            calculateBMR();
            applyTargets();
        }

        // Also update workout preset tab
        updatePresetInfo();

        // Reload calendar to refresh workout preset for today
        renderDayDetail();

        showToast('Goals and workouts updated! 💪', 'success');
    });

    // Calculate
    document.getElementById('calculateBMR').addEventListener('click', calculateBMR);
    document.getElementById('applyTargets').addEventListener('click', applyTargets);

    // Restore saved profile values
    restoreProfileUI();
}

function restoreProfileUI() {
    // Personal info
    if (state.profile.name) document.getElementById('profileName').value = state.profile.name;
    if (state.profile.preference) document.getElementById('profilePreference').value = state.profile.preference;

    // Gender
    if (state.profile.gender) {
        document.querySelectorAll('.gender-btn').forEach(b => b.classList.remove('active'));
        const gBtn = document.querySelector(`.gender-btn[data-gender="${state.profile.gender}"]`);
        if (gBtn) gBtn.classList.add('active');
    }
    // Goal (no longer a button toggle, now it's profilePreference)
    if (state.profile.preference) document.getElementById('profilePreference').value = state.profile.preference;
    if (state.profile.age) document.getElementById('profileAge').value = state.profile.age;
    if (state.profile.weight) document.getElementById('profileWeight').value = state.profile.weight;
    if (state.profile.height) document.getElementById('profileHeight').value = state.profile.height;
    if (state.profile.activityLevel) document.getElementById('activityLevel').value = state.profile.activityLevel;

    // Also update sidebar name if profile name exists
    if (state.profile.name) {
        document.getElementById('userName').textContent = state.profile.name;
        document.getElementById('userAvatar').textContent = state.profile.name.charAt(0).toUpperCase();
    }
}

function calculateBMR() {
    const age = parseInt(document.getElementById('profileAge').value);
    const weight = parseFloat(document.getElementById('profileWeight').value);
    const height = parseFloat(document.getElementById('profileHeight').value);
    const activity = parseFloat(document.getElementById('activityLevel').value);
    const gender = state.profile.gender;
    const goal = state.profile.preference || 'stay-fit';

    if (!age || !weight || !height) {
        showToast('Please fill in all fields', 'error');
        return;
    }

    // Save profile
    state.profile = { ...state.profile, gender, age, weight, height, activityLevel: activity };
    saveState();

    // === BMI CALCULATION ===
    const heightM = height / 100;
    const bmi = (weight / (heightM * heightM)).toFixed(1);

    let bmiRec = '';
    let recColor = '';
    if (bmi > 25) {
        bmiRec = 'Overweight — Recommend: Weight Loss';
        recColor = 'var(--accent-red)';
    } else if (bmi < 18.5) {
        bmiRec = 'Underweight — Recommend: Muscle Gain';
        recColor = 'var(--accent-yellow)';
    } else {
        bmiRec = 'Normal — Recommend: Stay Fit';
        recColor = 'var(--accent-green)';
    }

    document.getElementById('resultBMI').textContent = bmi;
    document.getElementById('resultBMI').style.color = recColor;
    const recEl = document.getElementById('resultBMIRecommendation');
    recEl.textContent = bmiRec;
    recEl.style.color = recColor;

    // === BMR CALCULATION (Mifflin-St Jeor) ===
    let bmr;
    if (gender === 'male') {
        bmr = (10 * weight) + (6.25 * height) - (5 * age) + 5;
    } else {
        bmr = (10 * weight) + (6.25 * height) - (5 * age) - 161;
    }

    const tdee = Math.round(bmr * activity);
    bmr = Math.round(bmr);

    // === TARGETS BY GOAL ===
    let targetCal;
    let proteinMultiplier; // g per kg bodyweight
    let fatPercentage; // % of total calories

    if (goal === 'weight-loss') {
        targetCal = Math.round(tdee - 500);
        proteinMultiplier = 2.2; // High protein to preserve muscle
        fatPercentage = 0.20;    // Lower fat
    } else if (goal === 'muscle-gain') {
        targetCal = Math.round(tdee + 300);
        proteinMultiplier = 1.8; // Moderate-high protein
        fatPercentage = 0.25;    // Standard fat
    } else { // stay-fit, general-health, athletic
        targetCal = tdee;
        proteinMultiplier = 2.0; // Standard balanced
        fatPercentage = 0.25;
    }

    // === MACRO SPLIT ===
    const proteinG = Math.round(weight * proteinMultiplier);
    const fatCal = Math.round(targetCal * fatPercentage);
    const fatG = Math.round(fatCal / 9);
    const proteinCal = proteinG * 4;

    // Remainder is carbs
    const carbCal = targetCal - proteinCal - fatCal;
    const carbG = Math.max(0, Math.round(carbCal / 4)); // Ensure carbs don't go negative on extreme cuts

    // Display results
    document.getElementById('resultBMR').textContent = bmr;
    document.getElementById('resultTDEE').textContent = tdee;
    document.getElementById('resultTarget').textContent = targetCal;
    document.getElementById('resultProtein').textContent = proteinG;
    document.getElementById('resultCarbs').textContent = carbG;
    document.getElementById('resultFats').textContent = fatG;

    // Store computed targets for apply
    state._computedTargets = { calories: targetCal, protein: proteinG, carbs: carbG, fats: fatG };

    showToast('BMR, BMI & Macros calculated! 📊', 'success');
}

function applyTargets() {
    if (!state._computedTargets) {
        showToast('Calculate your BMR first!', 'error');
        return;
    }
    state.targets = { ...state._computedTargets };
    saveState();
    updateDashboard();
    showToast('Daily targets applied to your dashboard! 🎯', 'success');
}

// ==================== EXERCISES ====================
function initExercises() {
    // Mode toggle
    document.getElementById('modePreset').addEventListener('click', () => {
        state.exerciseMode = 'preset';
        document.getElementById('modePreset').classList.add('active');
        document.getElementById('modeCustom').classList.remove('active');
        document.getElementById('presetSection').style.display = 'block';
        document.getElementById('customSection').style.display = 'none';
    });
    document.getElementById('modeCustom').addEventListener('click', () => {
        state.exerciseMode = 'custom';
        document.getElementById('modeCustom').classList.add('active');
        document.getElementById('modePreset').classList.remove('active');
        document.getElementById('presetSection').style.display = 'none';
        document.getElementById('customSection').style.display = 'block';
        renderExerciseLibrary();
    });

    // Load preset workout
    document.getElementById('loadPresetBtn').addEventListener('click', loadPresetWorkout);

    // Muscle group filters
    document.getElementById('muscleFilters').addEventListener('click', (e) => {
        const chip = e.target.closest('.filter-chip');
        if (!chip) return;
        document.querySelectorAll('#muscleFilters .filter-chip').forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        state.exerciseFilter = chip.dataset.muscle;
        renderExerciseLibrary();
    });

    // Difficulty filters
    document.getElementById('diffFilters').addEventListener('click', (e) => {
        const chip = e.target.closest('.filter-chip');
        if (!chip) return;
        document.querySelectorAll('#diffFilters .filter-chip').forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        state.exerciseDiffFilter = chip.dataset.diff;
        renderExerciseLibrary();
    });

    // Clear completed exercises
    document.getElementById('clearCompletedExercises').addEventListener('click', () => {
        state.exercises = state.exercises.filter(ex => !ex.completed);
        saveState();
        renderActiveWorkout();
        showToast('Completed exercises cleared', 'info');
    });

    // Reset all exercises
    document.getElementById('resetWorkout').addEventListener('click', () => {
        state.exercises = [];
        saveState();
        renderActiveWorkout();
        showToast('Workout reset', 'info');
    });

    updatePresetInfo();
    renderActiveWorkout();
}

function updatePresetInfo() {
    const dayOfWeek = new Date().getDay();
    const preset = getWorkoutForDay(dayOfWeek);
    if (!preset) return;

    const pref = state.profile.preference || 'stay-fit';
    const goalLabel = pref === 'muscle-gain' ? '💪 Muscle Gain' : pref === 'weight-loss' ? '🔻 Fat Loss' : '🏃 Balanced';
    document.getElementById('presetTitle').textContent = `📅 ${preset.name}`;
    const muscleNames = preset.muscles.map(m => m.charAt(0).toUpperCase() + m.slice(1)).join(' + ');
    const exerciseCount = preset.ids.length;
    document.getElementById('presetDesc').textContent = `${goalLabel} — ${muscleNames} — ${exerciseCount} exercises`;
}

function loadPresetWorkout() {
    const dayOfWeek = new Date().getDay();
    const preset = getWorkoutForDay(dayOfWeek);
    if (!preset) return;

    // Don't duplicate — add only exercises not already in the workout
    const existingIds = new Set(state.exercises.map(ex => ex.exerciseId));
    let addedCount = 0;

    preset.ids.forEach(id => {
        if (!existingIds.has(id)) {
            state.exercises.push({ exerciseId: id, completed: false });
            addedCount++;
        }
    });

    if (addedCount === 0) {
        showToast('All preset exercises already in your workout!', 'info');
    } else {
        saveState();
        renderActiveWorkout();
        showToast(`Loaded ${addedCount} exercises for today! 💪`, 'success');
    }
}

function renderExerciseLibrary() {
    const grid = document.getElementById('exerciseGrid');
    let exercises = [...EXERCISE_DB];

    // Apply muscle filter
    if (state.exerciseFilter !== 'all') {
        exercises = exercises.filter(ex => ex.muscle === state.exerciseFilter);
    }
    // Apply difficulty filter
    if (state.exerciseDiffFilter !== 'all') {
        exercises = exercises.filter(ex => ex.difficulty === state.exerciseDiffFilter);
    }

    if (exercises.length === 0) {
        grid.innerHTML = `<div class="empty-state"><span class="empty-icon">🔍</span><p>No exercises match your filters</p></div>`;
        return;
    }

    const existingIds = new Set(state.exercises.map(ex => ex.exerciseId));

    grid.innerHTML = exercises.map(ex => {
        const isAdded = existingIds.has(ex.id);
        const diffClass = `diff-${ex.difficulty}`;
        return `
            <div class="exercise-card ${isAdded ? 'added' : ''}" data-exercise-id="${ex.id}">
                <div class="exercise-card-emoji">${ex.emoji}</div>
                <div class="exercise-card-name">${ex.name}</div>
                <div class="exercise-card-meta">
                    <span class="exercise-muscle-tag">${ex.muscle}</span>
                    <span class="exercise-diff-badge ${diffClass}">${ex.difficulty}</span>
                </div>
                <div class="exercise-card-info">${ex.sets} × ${ex.reps}</div>
                <div class="exercise-card-equip">🔧 ${ex.equipment}</div>
                <button class="btn btn-sm ${isAdded ? 'btn-ghost' : 'btn-accent'} exercise-add-btn" data-exercise-id="${ex.id}">
                    ${isAdded ? '✓ Added' : '+ Add'}
                </button>
            </div>`;
    }).join('');

    grid.querySelectorAll('.exercise-add-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const exId = btn.dataset.exerciseId;
            const existing = state.exercises.find(ex => ex.exerciseId === exId);
            if (existing) {
                // Remove
                state.exercises = state.exercises.filter(ex => ex.exerciseId !== exId);
                showToast('Exercise removed from workout', 'info');
            } else {
                // Add
                state.exercises.push({ exerciseId: exId, completed: false });
                const exData = EXERCISE_DB.find(e => e.id === exId);
                showToast(`Added "${exData?.name}" to workout! 💪`, 'success');
            }
            saveState();
            renderExerciseLibrary();
            renderActiveWorkout();
        });
    });
}

function renderActiveWorkout() {
    const container = document.getElementById('workoutChecklist');
    const progressFill = document.getElementById('workoutProgressFill');
    const progressText = document.getElementById('workoutProgressText');

    if (state.exercises.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <span class="empty-icon">🏋️</span>
                <p>No exercises yet. Load a preset or add from the library!</p>
            </div>`;
        progressFill.style.width = '0%';
        progressText.textContent = '0% complete';
        updateExerciseStats();
        return;
    }

    container.innerHTML = state.exercises.map(ex => {
        const exData = EXERCISE_DB.find(e => e.id === ex.exerciseId);
        if (!exData) return '';
        const diffClass = `diff-${exData.difficulty}`;
        return `
            <div class="workout-exercise-item ${ex.completed ? 'completed' : ''}" data-exercise-id="${ex.exerciseId}">
                <div class="exercise-checkbox">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M5 13l4 4L19 7"/></svg>
                </div>
                <div class="exercise-item-info">
                    <div class="exercise-item-name">${exData.emoji} ${exData.name}</div>
                    <div class="exercise-item-detail">
                        <span>${exData.sets} × ${exData.reps}</span>
                        <span class="exercise-diff-badge ${diffClass}">${exData.difficulty}</span>
                        <span class="exercise-equip-tag">🔧 ${exData.equipment}</span>
                    </div>
                    <div class="exercise-item-desc">${exData.description}</div>
                </div>
                <button class="exercise-remove-btn" data-exercise-id="${ex.exerciseId}" title="Remove">×</button>
            </div>`;
    }).join('');

    // Toggle complete
    container.querySelectorAll('.exercise-checkbox').forEach(cb => {
        cb.addEventListener('click', () => {
            const item = cb.closest('.workout-exercise-item');
            const exId = item.dataset.exerciseId;
            const exercise = state.exercises.find(ex => ex.exerciseId === exId);
            if (exercise) {
                exercise.completed = !exercise.completed;
                saveState();
                renderActiveWorkout();
            }
        });
    });

    // Remove exercise
    container.querySelectorAll('.exercise-remove-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            state.exercises = state.exercises.filter(ex => ex.exerciseId !== btn.dataset.exerciseId);
            saveState();
            renderActiveWorkout();
            if (state.exerciseMode === 'custom') renderExerciseLibrary();
            showToast('Exercise removed', 'info');
        });
    });

    // Update progress
    const completed = state.exercises.filter(ex => ex.completed).length;
    const total = state.exercises.length;
    const pct = total > 0 ? Math.round((completed / total) * 100) : 0;
    progressFill.style.width = pct + '%';
    progressText.textContent = `${pct}% complete`;

    if (pct === 100 && total > 0) {
        progressText.textContent = '🎉 Workout Complete!';
    }

    updateExerciseStats();
}

function updateExerciseStats() {
    const completed = state.exercises.filter(ex => ex.completed).length;
    const total = state.exercises.length;
    document.getElementById('workoutCount').textContent = `${completed} / ${total} exercises`;
}
