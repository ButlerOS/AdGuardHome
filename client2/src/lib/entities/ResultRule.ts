// This file was autogenerated. Please do not change.
// All changes will be overwrited on commit.
export interface IResultRule {
    filter_list_id?: number;
    text?: string;
}

export default class ResultRule {
    readonly _filter_list_id: number | undefined;

    /**
     * Description: In case if there's a rule applied to this DNS request, this is ID of the filter list that the rule belongs to.
     *
     * Example: 123123
     */
    get filterListId(): number | undefined {
        return this._filter_list_id;
    }

    readonly _text: string | undefined;

    /**
     * Description: The text of the filtering rule applied to the request (if any).
     *
     * Example: ||example.org^
     */
    get text(): string | undefined {
        return this._text;
    }

    constructor(props: IResultRule) {
        if (typeof props.filter_list_id === 'number') {
            this._filter_list_id = props.filter_list_id;
        }
        if (typeof props.text === 'string') {
            this._text = props.text.trim();
        }
    }

    serialize(): IResultRule {
        const data: IResultRule = {
        };
        if (typeof this._filter_list_id !== 'undefined') {
            data.filter_list_id = this._filter_list_id;
        }
        if (typeof this._text !== 'undefined') {
            data.text = this._text;
        }
        return data;
    }

    validate(): string[] {
        const validate = {
            filter_list_id: !this._filter_list_id ? true : typeof this._filter_list_id === 'number',
            text: !this._text ? true : typeof this._text === 'string' && !this._text ? true : this._text,
        };
        const isError: string[] = [];
        Object.keys(validate).forEach((key) => {
            if (!(validate as any)[key]) {
                isError.push(key);
            }
        });
        return isError;
    }

    update(props: Partial<IResultRule>): ResultRule {
        return new ResultRule({ ...this.serialize(), ...props });
    }
}