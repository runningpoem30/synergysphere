// Get all projects
const { data, error } = await supabase.from('projects').select('*')

// Create a new task
const { data, error } = await supabase.from('tasks').insert([
  { project_id: 'PROJECT_ID', title: 'Task 1', assignee_id: 'USER_ID', status: 'todo' }
])