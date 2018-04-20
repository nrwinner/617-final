// @flow
import React, { Component } from 'react';
import QuizQuestion from '../Quiz/Question/QuizQuestion';
import type { QuestionType } from '@/types';

// Redux
import { selectQuestionOption } from '../../actions';
import { connect } from 'react-redux';

type Props = {
    section: string;
    questions: Map<string, QuestionType>;
    selectHandler: Function;
}

type State = {
    activeQuestion?: QuestionType;
}

class Quiz extends Component<Props, State> {

    state: State;

    constructor(props: Props) {
        super(props);

        this.state = {};
    }

    componentWillMount() {
        console.log('PROPS', this.props.questions.get(0));
        if (!this.state.activeQuestion) {
            this.setState({
                activeQuestion: this.props.questions.get('0')
            });
        }
    }



    render() {
        console.log(this.state.activeQuestion);
        return (
            <QuizQuestion question={ this.state.activeQuestion } section={ this.props.section } selectHandler={this.props.selectHandler} />
        )
    }
}

const mapStateToProps = state => ({
    section: state.consumingByte.activeSection,
});

const mapDispatchToProps = dispatch => ({
    selectHandler: (section: string, question: string, option: string) => dispatch(selectQuestionOption(section, question, option))
});

export default connect(mapStateToProps,  mapDispatchToProps)(Quiz);