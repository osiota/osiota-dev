<!--
Auto generated documentation:
  * Adapt schema.json and
  * Run npm run doc

Please edit schema.json or
	https://github.com/simonwalz/osiota-dev/blob/master/partials/main.md
-->
<a name="root"></a>
# {{schema.title}}

*Osiota* is a software platform capable of running *distributed IoT applications* written in JavaScript to enable any kind of IoT tasks. See [osiota](https://github.com/osiota/osiota).

## Configuration: {{argv.app}}

{{#with schema path="" ~}}
{{#if description}}

{{{description}}}

{{/if}}
{{> type . ~}}
{{#each (get_examples .) ~}}
{{> example ~}}
{{/each ~}}
{{#each (get_ref_items) ~}}
{{>element . ~}}
{{/each ~}}
{{/with}}
{{#each subapps}}

## Configuration: {{@root.argv.app}}/{{@key}}

{{#if description}}

{{{description}}}
{{/if}}
{{> type . ~}}
{{#each (get_examples .) ~}}
{{> example ~}}
{{/each ~}}
{{#each (get_ref_items) ~}}
{{>element . ~}}
{{/each ~}}
{{/each}}

## How to setup

Add a configuration object for this application, see [osiota configuration](https://github.com/osiota/osiota/blob/master/doc/configuration.md):

```json
{
    "name": "{{argv.app}}",
    "config": CONFIG
}
```

## License

Osiota and this application are released under the MIT license.

Please note that this project is released with a [Contributor Code of Conduct](https://github.com/osiota/osiota/blob/master/CODE_OF_CONDUCT.md). By participating in this project you agree to abide by its terms.
