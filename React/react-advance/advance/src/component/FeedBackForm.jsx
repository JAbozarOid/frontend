import {useState} from "react";

export default function FeedBackForm() {

    const [score, setScore] = useState('0');
    const [comment, setComment] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if(Number(score) <= 5 && comment.length <= 10) {
            alert("You need to enter a comment");

        }
        console.log("form submitted");
        setComment('')
        setScore(0)
    }

    return (
        <div className="feedBackForm">
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <h2>Feedback form</h2>
                    <div className="field">
                        <label>
                            Score : {score}
                        </label>
                        <input
                            type="range"
                            min="0"
                            max="10"
                            value={score}
                            onChange={e => setScore(e.target.value)}/>
                    </div>
                    <div className="field">
                        <label>comment :</label>
                        <textarea value={comment} onChange={e => setComment(e.target.value)}/>
                    </div>
                    <button type="submit">Submit</button>

                </fieldset>
            </form>
        </div>
    )
}