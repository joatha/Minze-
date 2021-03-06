import { MinzeElement } from 'minze'

export class MinzeCounter extends MinzeElement {
  reactive = [['count', 0]]

  increaseCount = () => this.count++

  html = () => `
    

    <div class="text">
     Teste!!!
    </div>

    <div class="count">
      <span>Contagem é:</span>
      ${this.count}
    </div>

    <minze-button class="button">
      Clique aqui!!!
    </minze-button>
  `

  css = () => `
    :host {
      width: 100%;
      min-height: calc(100vh - 2rem);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 1.5rem;
      padding: 40px;
    }

    .text {
      text-align: center;
      font-size: 1.25rem;
      font-weight: bold;
    }

    .count {
      text-align: center;
    }
  `

  eventListeners = [['.button', 'click', this.increaseCount]]
}
