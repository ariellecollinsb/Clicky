import React, { Component } from "react";
import Card from "./components/Card";
import Container from "./components/Container";
import Score from "./components/Score";
import images from "./cards.json";
import "./App.css";


class App extends Component {
  // Setting this.state.images to the cards json array
  state = {
    images,
    clickedImageIds: [],
    score: 0,
    goal: 12,
    highScore: 0,
    status: "Click on any image to begin!"
  };

  //shuffle the image cards in the browser when clicked
  shuffleScoreCard = id => {
    let clickedImageIds = this.state.clickedImageIds;
    let score = clickedImageIds.length;

    if (clickedImageIds.includes(id)) {
      // User losers
      let highScore = this.state.highScore;
      if (highScore < score) {
        highScore = score;
      }
      this.setState({ clickedImageIds: [], score: 0, highScore: highScore, status: "You lost. Game Over! Click to play again!" });
      return;

    } else {
      clickedImageIds.push(id);
      score = clickedImageIds.length;
      
      if (score === 12) {
        let highScore = this.state.highScore;
        if (highScore < score) {
          highScore = score;
        }

        // User wins
        this.setState({ score: score, highScore: highScore, status: "You Won! Click to play again!", clickedImageIds: [] });
        return;
      }

      this.setState({ images, clickedImageIds, score: score, status: "You Guessed Correctly!!" });

      for (let i = images.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [images[i], images[j]] = [images[j], images[i]];
      }
    }
  }

  // Map over this.state.cards and render a Card component for each card object
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">
            Pika Palooza!
            </h1>
          <p className="App-intro">
            Don't click the same Pokemon twice-
          </p>
        </header>
        <div className="container">
          <Score total={this.state.score}
            highScore={this.state.highScore}
            goal={12}
            status={this.state.status}
          />
          <Container>
            {this.state.images.map(image => (
              <Card
                shuffleScoreCard={this.shuffleScoreCard}
                id={image.id}
                key={image.id}
                image={image.image}
              />
            ))}
          </Container>
        </div>
        <footer className="App-footer">
          <p>
            <a href="https://github.com/ariellecollinsb">Github </a>||<a href="https://www.linkedin.com/in/arielle-collins-bovatsek-10895899/"> LinkedIn</a>
          </p>
          <p><small>Copyright &copy;</small></p>
        </footer>
      </div>
    );
  }
}
export default App;
