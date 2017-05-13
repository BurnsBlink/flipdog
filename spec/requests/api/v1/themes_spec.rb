describe "Posts API" do
  it 'sends a list of messages' do
    FactoryGirl.create(:post)

    get '/api/v1/posts'

    json = JSON.parse(response.body)

    # test for the 200 status-code
    expect(response).to be_success

    # check to make sure the right amount of messages are returned
    expect(json['posts'].length).to eq(10)
  end
end
