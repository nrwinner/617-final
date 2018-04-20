// @flow
import React from 'react';
import type { QuestionType } from '@/types';

// Redux
import { connect } from 'react-redux';
import { selectQuestionOption } from '../../../actions';

type Props = {
    question: QuestionType;
    section: string;
    selectHandler: Function;
    selected?: string;
}

const QuizQuestion = (props: Props) => {
    return (
        <div className="quiz-question" onClick={() => { props.selectHandler(props.section, props.question.id, 'test') }}>
            { props.question.text }
        </div>
    )
}

export default QuizQuestion;