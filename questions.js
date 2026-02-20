/**
 * Questions for 4th Grade Wizard RPG Game
 * Focused on Black History, Animal Adaptations, and Moon Phases
 * Questions are categorized by topic and difficulty level.
 */

const questions = {
    blackHistory: [
        {
            question: 'Who was Harriet Tubman?',
            options: ['A scientist', 'A conductor on the Underground Railroad', 'A president', 'An astronaut'],
            answer: 'A conductor on the Underground Railroad',
            difficulty: 'easy'
        },
        {
            question: 'What was the significance of the Emancipation Proclamation?',
            options: ['It ended slavery', 'It gave women the right to vote', 'It was a peace treaty', 'None of the above'],
            answer: 'It ended slavery',
            difficulty: 'medium'
        },
        // Add more black history questions here
    ],
    animalAdaptations: [
        {
            question: 'What is camouflage?',
            options: ['A type of clothing', 'A method of hiding from predators', 'A kind of food', 'A sound'],
            answer: 'A method of hiding from predators',
            difficulty: 'easy'
        },
        {
            question: 'Why do some animals hibernate?',
            options: ['To find food', 'To escape the cold', 'To lay eggs', 'To migrate'],
            answer: 'To escape the cold',
            difficulty: 'medium'
        },
        // Add more animal adaptation questions here
    ],
    moonPhases: [
        {
            question: 'What is a full moon?',
            options: ['When the moon disappears', 'When the moon is fully illuminated', 'When the moon is half illuminated', 'When the moon is new'],
            answer: 'When the moon is fully illuminated',
            difficulty: 'easy'
        },
        {
            question: 'How long does it take for the moon to orbit the Earth?',
            options: ['24 hours', '7 days', '29.5 days', '1 year'],
            answer: '29.5 days',
            difficulty: 'medium'
        },
        // Add more moon phases questions here
    ]
};

module.exports = questions;