class LessonsController < ApplicationController

  def index
    @lessons = Lesson.all
    render json: @lessons
  end

  def create
    @lesson = Lesson.create(lesson: params[:lesson])
    render json: @lesson
  end

  def update
    @lesson = Lesson.find(lesson: params[:id])
    @lesson.update_attributes(lesson: params[:lesson])
    render json: @lesson
  end

  def destroy
    @lesson = Lesson.find(params[:id])
    if @lesson.destroy
      head :no_content, status: :ok
    else
      render json: @lesson.errors, status: :unprocessable_entity
    end
  end

end
