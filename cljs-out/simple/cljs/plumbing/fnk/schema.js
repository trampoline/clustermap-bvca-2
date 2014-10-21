// Compiled by ClojureScript 0.0-2356
goog.provide('plumbing.fnk.schema');
goog.require('cljs.core');
goog.require('schema.utils');
goog.require('schema.utils');
goog.require('schema.core');
goog.require('schema.core');
plumbing.fnk.schema.Schema = cljs.core.with_meta.call(null,schema.core.__GT_Protocol.call(null,schema.core.Schema),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"proto-sym","proto-sym",-886371734),new cljs.core.Symbol("s","Schema","s/Schema",-1305723789,null),new cljs.core.Keyword(null,"proto-pred","proto-pred",1885698716),(function (p1__13449__13450__auto__){var G__39058 = p1__13449__13450__auto__;if(G__39058)
{var bit__4300__auto__ = null;if(cljs.core.truth_((function (){var or__3637__auto__ = bit__4300__auto__;if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return G__39058.schema$core$Schema$;
}
})()))
{return true;
} else
{if((!G__39058.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,G__39058);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,G__39058);
}
})], null));
plumbing.fnk.schema.InputSchema = new cljs.core.PersistentArrayMap.fromArray([schema.core.either.call(null,schema.core.eq.call(null,schema.core.Keyword),schema.core.OptionalKey,schema.core.Keyword),plumbing.fnk.schema.Schema], true, false);
plumbing.fnk.schema.OutputSchema = plumbing.fnk.schema.Schema;
plumbing.fnk.schema.IOSchemata = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one.call(null,plumbing.fnk.schema.OutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null);
plumbing.fnk.schema.GraphInputSchema = new cljs.core.PersistentArrayMap.fromArray([schema.core.either.call(null,schema.core.OptionalKey,schema.core.Keyword),plumbing.fnk.schema.Schema], true, false);
plumbing.fnk.schema.MapOutputSchema = new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,plumbing.fnk.schema.Schema], true, false);
plumbing.fnk.schema.GraphIOSchemata = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.GraphInputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one.call(null,plumbing.fnk.schema.MapOutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null);
/**
* Like (assert (distinct? things)) but with a more helpful error message.
*/
plumbing.fnk.schema.assert_distinct = (function assert_distinct(things){var repeated_things = cljs.core.seq.call(null,cljs.core.filter.call(null,(function (p1__39059_SHARP_){return (cljs.core.val.call(null,p1__39059_SHARP_) > (1));
}),cljs.core.frequencies.call(null,things)));if(cljs.core.empty_QMARK_.call(null,repeated_things))
{return null;
} else
{throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"Got repeated items (expected distinct): %s",repeated_things)));
}
});
/**
* Like (get m k), but throws if k is not present in m.
*/
plumbing.fnk.schema.safe_get = (function safe_get(m,k,key_path){if(cljs.core.map_QMARK_.call(null,m))
{} else
{throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"Expected a map at key-path %s, got type %s",key_path,schema.utils.type_of.call(null,m))));
}
var vec__39061 = cljs.core.find.call(null,m,k);var _ = cljs.core.nth.call(null,vec__39061,(0),null);var v = cljs.core.nth.call(null,vec__39061,(1),null);var p = vec__39061;if(cljs.core.truth_(p))
{} else
{throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Key %s not found in %s",k,cljs.core.keys.call(null,m)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"missing-key","missing-key",1259209562),new cljs.core.Keyword(null,"key","key",-1516042587),k,new cljs.core.Keyword(null,"map","map",1371690461),m], null));
}
return v;
});
plumbing.fnk.schema.non_map_union = (function non_map_union(s1,s2){if(cljs.core._EQ_.call(null,s1,s2))
{return s1;
} else
{if(cljs.core._EQ_.call(null,s1,schema.core.Any))
{return s2;
} else
{if(cljs.core._EQ_.call(null,s2,schema.core.Any))
{return s1;
} else
{return schema.core.both.call(null,s1,s2);

}
}
}
});
/**
* Return a difference of schmas s1 and s2, where one is not a map.
* Punt for now, assuming s2 always satisfies s1.
*/
plumbing.fnk.schema.non_map_diff = (function non_map_diff(s1,s2){return null;
});
plumbing.fnk.schema.map_schema_QMARK_ = (function map_schema_QMARK_(m){return ((m instanceof cljs.core.PersistentArrayMap)) || ((m instanceof cljs.core.PersistentHashMap));
});
var ufv___39067 = schema.utils.use_fn_validation;var output_schema39062_39068 = schema.core.maybe.call(null,schema.core.pair.call(null,schema.core.Keyword,"k",schema.core.Bool,"optional?"));var input_schema39063_39069 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"k","k",-505765866,null))], null);var input_checker39064_39070 = schema.core.checker.call(null,input_schema39063_39069);var output_checker39065_39071 = schema.core.checker.call(null,output_schema39062_39068);/**
* Inputs: [k]
* Returns: (s/maybe (s/pair s/Keyword "k" s/Bool "optional?"))
* 
* Given a possibly-unevaluated schema map key form, unpack an explicit keyword
* and optional? flag, or return nil for a non-explicit key
*/
plumbing.fnk.schema.unwrap_schema_form_key = ((function (ufv___39067,output_schema39062_39068,input_schema39063_39069,input_checker39064_39070,output_checker39065_39071){
return (function unwrap_schema_form_key(G__39066){var validate__13419__auto__ = ufv___39067.get_cell();if(cljs.core.truth_(validate__13419__auto__))
{var args__13420__auto___39072 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__39066], null);var temp__4126__auto___39073 = input_checker39064_39070.call(null,args__13420__auto___39072);if(cljs.core.truth_(temp__4126__auto___39073))
{var error__13421__auto___39074 = temp__4126__auto___39073;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.call(null,error__13421__auto___39074)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema39063_39069,new cljs.core.Keyword(null,"value","value",305978217),args__13420__auto___39072,new cljs.core.Keyword(null,"error","error",-978969032),error__13421__auto___39074], null));
} else
{}
} else
{}
var o__13422__auto__ = (function (){var k = G__39066;while(true){
if(schema.core.specific_key_QMARK_.call(null,k))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.explicit_schema_key.call(null,k),schema.core.required_key_QMARK_.call(null,k)], null);
} else
{if((cljs.core.sequential_QMARK_.call(null,k)) && (!(cljs.core.vector_QMARK_.call(null,k))) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,k),(2))) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,k),new cljs.core.Symbol("schema.core","optional-key","schema.core/optional-key",-170069547,null))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.second.call(null,k),false], null);
} else
{return null;
}
}
break;
}
})();if(cljs.core.truth_(validate__13419__auto__))
{var temp__4126__auto___39075 = output_checker39065_39071.call(null,o__13422__auto__);if(cljs.core.truth_(temp__4126__auto___39075))
{var error__13421__auto___39076 = temp__4126__auto___39075;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.call(null,error__13421__auto___39076)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema39062_39068,new cljs.core.Keyword(null,"value","value",305978217),o__13422__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__13421__auto___39076], null));
} else
{}
} else
{}
return o__13422__auto__;
});})(ufv___39067,output_schema39062_39068,input_schema39063_39069,input_checker39064_39070,output_checker39065_39071))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.unwrap_schema_form_key),schema.core.make_fn_schema.call(null,output_schema39062_39068,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema39063_39069], null)));
var ufv___39082 = schema.utils.use_fn_validation;var output_schema39077_39083 = schema.core.Any;var input_schema39078_39084 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"s","s",-948495851,null))], null);var input_checker39079_39085 = schema.core.checker.call(null,input_schema39078_39084);var output_checker39080_39086 = schema.core.checker.call(null,output_schema39077_39083);/**
* Inputs: [s]
* 
* Given a possibly-unevaluated map schema, return a map from bare keyword to true
* (for required) or false (for optional)
*/
plumbing.fnk.schema.explicit_schema_key_map = ((function (ufv___39082,output_schema39077_39083,input_schema39078_39084,input_checker39079_39085,output_checker39080_39086){
return (function explicit_schema_key_map(G__39081){var validate__13419__auto__ = ufv___39082.get_cell();if(cljs.core.truth_(validate__13419__auto__))
{var args__13420__auto___39087 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__39081], null);var temp__4126__auto___39088 = input_checker39079_39085.call(null,args__13420__auto___39087);if(cljs.core.truth_(temp__4126__auto___39088))
{var error__13421__auto___39089 = temp__4126__auto___39088;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.call(null,error__13421__auto___39089)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema39078_39084,new cljs.core.Keyword(null,"value","value",305978217),args__13420__auto___39087,new cljs.core.Keyword(null,"error","error",-978969032),error__13421__auto___39089], null));
} else
{}
} else
{}
var o__13422__auto__ = (function (){var s = G__39081;while(true){
new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false);
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.call(null,plumbing.fnk.schema.unwrap_schema_form_key,cljs.core.keys.call(null,s)));
break;
}
})();if(cljs.core.truth_(validate__13419__auto__))
{var temp__4126__auto___39090 = output_checker39080_39086.call(null,o__13422__auto__);if(cljs.core.truth_(temp__4126__auto___39090))
{var error__13421__auto___39091 = temp__4126__auto___39090;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.call(null,error__13421__auto___39091)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema39077_39083,new cljs.core.Keyword(null,"value","value",305978217),o__13422__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__13421__auto___39091], null));
} else
{}
} else
{}
return o__13422__auto__;
});})(ufv___39082,output_schema39077_39083,input_schema39078_39084,input_checker39079_39085,output_checker39080_39086))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.explicit_schema_key_map),schema.core.make_fn_schema.call(null,output_schema39077_39083,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema39078_39084], null)));
var ufv___39097 = schema.utils.use_fn_validation;var output_schema39092_39098 = schema.core.Any;var input_schema39093_39099 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false),new cljs.core.Symbol(null,"s","s",-948495851,null))], null);var input_checker39094_39100 = schema.core.checker.call(null,input_schema39093_39099);var output_checker39095_39101 = schema.core.checker.call(null,output_schema39092_39098);/**
* Inputs: [s :- {s/Keyword s/Bool}]
* 
* Given output of explicit-schema-key-map, split into seq [req opt].
*/
plumbing.fnk.schema.split_schema_keys = ((function (ufv___39097,output_schema39092_39098,input_schema39093_39099,input_checker39094_39100,output_checker39095_39101){
return (function split_schema_keys(G__39096){var validate__13419__auto__ = ufv___39097.get_cell();if(cljs.core.truth_(validate__13419__auto__))
{var args__13420__auto___39102 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__39096], null);var temp__4126__auto___39103 = input_checker39094_39100.call(null,args__13420__auto___39102);if(cljs.core.truth_(temp__4126__auto___39103))
{var error__13421__auto___39104 = temp__4126__auto___39103;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.call(null,error__13421__auto___39104)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema39093_39099,new cljs.core.Keyword(null,"value","value",305978217),args__13420__auto___39102,new cljs.core.Keyword(null,"error","error",-978969032),error__13421__auto___39104], null));
} else
{}
} else
{}
var o__13422__auto__ = (function (){var s = G__39096;while(true){
new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"required","required",-846788763,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"optional","optional",-600484260,null))], null);
return cljs.core.mapv.call(null,cljs.core.partial.call(null,cljs.core.mapv,cljs.core.key),cljs.core.juxt.call(null,cljs.core.filter,cljs.core.remove).call(null,cljs.core.val,s));
break;
}
})();if(cljs.core.truth_(validate__13419__auto__))
{var temp__4126__auto___39105 = output_checker39095_39101.call(null,o__13422__auto__);if(cljs.core.truth_(temp__4126__auto___39105))
{var error__13421__auto___39106 = temp__4126__auto___39105;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.call(null,error__13421__auto___39106)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema39092_39098,new cljs.core.Keyword(null,"value","value",305978217),o__13422__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__13421__auto___39106], null));
} else
{}
} else
{}
return o__13422__auto__;
});})(ufv___39097,output_schema39092_39098,input_schema39093_39099,input_checker39094_39100,output_checker39095_39101))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema_keys),schema.core.make_fn_schema.call(null,output_schema39092_39098,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema39093_39099], null)));
/**
* Like merge-with, but also projects keys to a smaller space and merges them similar to the
* values.
* @param {...*} var_args
*/
plumbing.fnk.schema.merge_on_with = (function() { 
var merge_on_with__delegate = function (key_project,key_combine,val_combine,maps){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (m,p__39110){var vec__39111 = p__39110;var k = cljs.core.nth.call(null,vec__39111,(0),null);var v = cljs.core.nth.call(null,vec__39111,(1),null);var pk = key_project.call(null,k);var temp__4124__auto__ = cljs.core.get.call(null,m,pk);if(cljs.core.truth_(temp__4124__auto__))
{var vec__39112 = temp__4124__auto__;var ok = cljs.core.nth.call(null,vec__39112,(0),null);var ov = cljs.core.nth.call(null,vec__39112,(1),null);return cljs.core.assoc.call(null,m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_combine.call(null,ok,k),val_combine.call(null,ov,v)], null));
} else
{return cljs.core.assoc.call(null,m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
}
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.apply.call(null,cljs.core.concat,maps))));
};
var merge_on_with = function (key_project,key_combine,val_combine,var_args){
var maps = null;if (arguments.length > 3) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return merge_on_with__delegate.call(this,key_project,key_combine,val_combine,maps);};
merge_on_with.cljs$lang$maxFixedArity = 3;
merge_on_with.cljs$lang$applyTo = (function (arglist__39113){
var key_project = cljs.core.first(arglist__39113);
arglist__39113 = cljs.core.next(arglist__39113);
var key_combine = cljs.core.first(arglist__39113);
arglist__39113 = cljs.core.next(arglist__39113);
var val_combine = cljs.core.first(arglist__39113);
var maps = cljs.core.rest(arglist__39113);
return merge_on_with__delegate(key_project,key_combine,val_combine,maps);
});
merge_on_with.cljs$core$IFn$_invoke$arity$variadic = merge_on_with__delegate;
return merge_on_with;
})()
;
var ufv___39121 = schema.utils.use_fn_validation;var output_schema39115_39122 = plumbing.fnk.schema.InputSchema;var input_schema39116_39123 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i1","i1",-572470430,null)),schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i2","i2",850408895,null))], null);var input_checker39117_39124 = schema.core.checker.call(null,input_schema39116_39123);var output_checker39118_39125 = schema.core.checker.call(null,output_schema39115_39122);/**
* Inputs: [i1 :- InputSchema i2 :- InputSchema]
* Returns: InputSchema
* 
* Returns a minimal input schema schema that entails satisfaction of both s1 and s2
*/
plumbing.fnk.schema.union_input_schemata = ((function (ufv___39121,output_schema39115_39122,input_schema39116_39123,input_checker39117_39124,output_checker39118_39125){
return (function union_input_schemata(G__39119,G__39120){var validate__13419__auto__ = ufv___39121.get_cell();if(cljs.core.truth_(validate__13419__auto__))
{var args__13420__auto___39126 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__39119,G__39120], null);var temp__4126__auto___39127 = input_checker39117_39124.call(null,args__13420__auto___39126);if(cljs.core.truth_(temp__4126__auto___39127))
{var error__13421__auto___39128 = temp__4126__auto___39127;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.call(null,error__13421__auto___39128)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema39116_39123,new cljs.core.Keyword(null,"value","value",305978217),args__13420__auto___39126,new cljs.core.Keyword(null,"error","error",-978969032),error__13421__auto___39128], null));
} else
{}
} else
{}
var o__13422__auto__ = (function (){var i1 = G__39119;var i2 = G__39120;while(true){
return plumbing.fnk.schema.merge_on_with.call(null,((function (validate__13419__auto__,ufv___39121,output_schema39115_39122,input_schema39116_39123,input_checker39117_39124,output_checker39118_39125){
return (function (p1__39114_SHARP_){if(schema.core.specific_key_QMARK_.call(null,p1__39114_SHARP_))
{return schema.core.explicit_schema_key.call(null,p1__39114_SHARP_);
} else
{return new cljs.core.Keyword(null,"extra","extra",1612569067);
}
});})(validate__13419__auto__,ufv___39121,output_schema39115_39122,input_schema39116_39123,input_checker39117_39124,output_checker39118_39125))
,((function (validate__13419__auto__,ufv___39121,output_schema39115_39122,input_schema39116_39123,input_checker39117_39124,output_checker39118_39125){
return (function (k1,k2){if(schema.core.required_key_QMARK_.call(null,k1))
{return k1;
} else
{if(schema.core.required_key_QMARK_.call(null,k2))
{return k2;
} else
{if(schema.core.optional_key_QMARK_.call(null,k1))
{if(cljs.core._EQ_.call(null,k1,k2))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"k1","k1",-1701777341,null),new cljs.core.Symbol(null,"k2","k2",-1225133949,null)))))));
}
return k1;
} else
{if(cljs.core._EQ_.call(null,k1,k2))
{return k1;
} else
{throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"Only one extra schema allowed")));


}
}
}
}
});})(validate__13419__auto__,ufv___39121,output_schema39115_39122,input_schema39116_39123,input_checker39117_39124,output_checker39118_39125))
,((function (validate__13419__auto__,ufv___39121,output_schema39115_39122,input_schema39116_39123,input_checker39117_39124,output_checker39118_39125){
return (function (s1,s2){if((plumbing.fnk.schema.map_schema_QMARK_.call(null,s1)) && (plumbing.fnk.schema.map_schema_QMARK_.call(null,s2)))
{return union_input_schemata.call(null,s1,s2);
} else
{return plumbing.fnk.schema.non_map_union.call(null,s1,s2);
}
});})(validate__13419__auto__,ufv___39121,output_schema39115_39122,input_schema39116_39123,input_checker39117_39124,output_checker39118_39125))
,i1,i2);
break;
}
})();if(cljs.core.truth_(validate__13419__auto__))
{var temp__4126__auto___39129 = output_checker39118_39125.call(null,o__13422__auto__);if(cljs.core.truth_(temp__4126__auto___39129))
{var error__13421__auto___39130 = temp__4126__auto___39129;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.call(null,error__13421__auto___39130)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema39115_39122,new cljs.core.Keyword(null,"value","value",305978217),o__13422__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__13421__auto___39130], null));
} else
{}
} else
{}
return o__13422__auto__;
});})(ufv___39121,output_schema39115_39122,input_schema39116_39123,input_checker39117_39124,output_checker39118_39125))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.union_input_schemata),schema.core.make_fn_schema.call(null,output_schema39115_39122,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema39116_39123], null)));
var ufv___39136 = schema.utils.use_fn_validation;var output_schema39131_39137 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null);var input_schema39132_39138 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input-schema","input-schema",1373647181,null))], null);var input_checker39133_39139 = schema.core.checker.call(null,input_schema39132_39138);var output_checker39134_39140 = schema.core.checker.call(null,output_schema39131_39137);/**
* Inputs: [input-schema :- InputSchema]
* Returns: [s/Keyword]
* 
* Which top-level keys are required (i.e., non-false) by this input schema.
*/
plumbing.fnk.schema.required_toplevel_keys = ((function (ufv___39136,output_schema39131_39137,input_schema39132_39138,input_checker39133_39139,output_checker39134_39140){
return (function required_toplevel_keys(G__39135){var validate__13419__auto__ = ufv___39136.get_cell();if(cljs.core.truth_(validate__13419__auto__))
{var args__13420__auto___39141 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__39135], null);var temp__4126__auto___39142 = input_checker39133_39139.call(null,args__13420__auto___39141);if(cljs.core.truth_(temp__4126__auto___39142))
{var error__13421__auto___39143 = temp__4126__auto___39142;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.call(null,error__13421__auto___39143)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema39132_39138,new cljs.core.Keyword(null,"value","value",305978217),args__13420__auto___39141,new cljs.core.Keyword(null,"error","error",-978969032),error__13421__auto___39143], null));
} else
{}
} else
{}
var o__13422__auto__ = (function (){var input_schema = G__39135;while(true){
return cljs.core.keep.call(null,((function (validate__13419__auto__,ufv___39136,output_schema39131_39137,input_schema39132_39138,input_checker39133_39139,output_checker39134_39140){
return (function (k){if(schema.core.required_key_QMARK_.call(null,k))
{return schema.core.explicit_schema_key.call(null,k);
} else
{return null;
}
});})(validate__13419__auto__,ufv___39136,output_schema39131_39137,input_schema39132_39138,input_checker39133_39139,output_checker39134_39140))
,cljs.core.keys.call(null,input_schema));
break;
}
})();if(cljs.core.truth_(validate__13419__auto__))
{var temp__4126__auto___39144 = output_checker39134_39140.call(null,o__13422__auto__);if(cljs.core.truth_(temp__4126__auto___39144))
{var error__13421__auto___39145 = temp__4126__auto___39144;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.call(null,error__13421__auto___39145)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema39131_39137,new cljs.core.Keyword(null,"value","value",305978217),o__13422__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__13421__auto___39145], null));
} else
{}
} else
{}
return o__13422__auto__;
});})(ufv___39136,output_schema39131_39137,input_schema39132_39138,input_checker39133_39139,output_checker39134_39140))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.required_toplevel_keys),schema.core.make_fn_schema.call(null,output_schema39131_39137,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema39132_39138], null)));
/**
* Guess an output schema for an expr.  Currently just looks for literal map structure and
* all keyword keys.
*/
plumbing.fnk.schema.guess_expr_output_schema = (function guess_expr_output_schema(expr){if((cljs.core.map_QMARK_.call(null,expr)) && (cljs.core.every_QMARK_.call(null,cljs.core.keyword_QMARK_,cljs.core.keys.call(null,expr))))
{return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4375__auto__ = (function iter__39154(s__39155){return (new cljs.core.LazySeq(null,(function (){var s__39155__$1 = s__39155;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__39155__$1);if(temp__4126__auto__)
{var s__39155__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__39155__$2))
{var c__4373__auto__ = cljs.core.chunk_first.call(null,s__39155__$2);var size__4374__auto__ = cljs.core.count.call(null,c__4373__auto__);var b__39157 = cljs.core.chunk_buffer.call(null,size__4374__auto__);if((function (){var i__39156 = (0);while(true){
if((i__39156 < size__4374__auto__))
{var vec__39160 = cljs.core._nth.call(null,c__4373__auto__,i__39156);var k = cljs.core.nth.call(null,vec__39160,(0),null);var v = cljs.core.nth.call(null,vec__39160,(1),null);cljs.core.chunk_append.call(null,b__39157,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema.call(null,v)], null));
{
var G__39162 = (i__39156 + (1));
i__39156 = G__39162;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39157),iter__39154.call(null,cljs.core.chunk_rest.call(null,s__39155__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39157),null);
}
} else
{var vec__39161 = cljs.core.first.call(null,s__39155__$2);var k = cljs.core.nth.call(null,vec__39161,(0),null);var v = cljs.core.nth.call(null,vec__39161,(1),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema.call(null,v)], null),iter__39154.call(null,cljs.core.rest.call(null,s__39155__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4375__auto__.call(null,expr);
})());
} else
{return new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null);
}
});
/**
* Subtract output-schema from input-schema, returning nil if it's possible that an object
* satisfying the output-schema satisfies the input-schema, or otherwise a description
* of the part(s) of input-schema not met by output-schema.  Strict about the map structure
* of output-schema matching input-schema, but loose about everything else (only looks at
* required keys of output-schema.
*/
plumbing.fnk.schema.schema_diff = (function schema_diff(input_schema,output_schema){if(!(plumbing.fnk.schema.map_schema_QMARK_.call(null,input_schema)))
{return plumbing.fnk.schema.non_map_diff.call(null,input_schema,output_schema);
} else
{if(!(plumbing.fnk.schema.map_schema_QMARK_.call(null,output_schema)))
{return schema.utils.error.call(null,schema.utils.__GT_ValidationError.call(null,input_schema,output_schema,(new cljs.core.Delay((function (){return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,schema.core.explain.call(null,output_schema)),new cljs.core.Symbol(null,"map?","map?",-1780568534,null));
}),null)),null));
} else
{return cljs.core.not_empty.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4375__auto__ = (function iter__39171(s__39172){return (new cljs.core.LazySeq(null,(function (){var s__39172__$1 = s__39172;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__39172__$1);if(temp__4126__auto__)
{var s__39172__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__39172__$2))
{var c__4373__auto__ = cljs.core.chunk_first.call(null,s__39172__$2);var size__4374__auto__ = cljs.core.count.call(null,c__4373__auto__);var b__39174 = cljs.core.chunk_buffer.call(null,size__4374__auto__);if((function (){var i__39173 = (0);while(true){
if((i__39173 < size__4374__auto__))
{var vec__39177 = cljs.core._nth.call(null,c__4373__auto__,i__39173);var k = cljs.core.nth.call(null,vec__39177,(0),null);var v = cljs.core.nth.call(null,vec__39177,(1),null);if(schema.core.specific_key_QMARK_.call(null,k))
{var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);var raw_k = schema.core.explicit_schema_key.call(null,k);var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);if((required_QMARK_) || (present_QMARK_))
{var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));if(cljs.core.truth_(fail))
{cljs.core.chunk_append.call(null,b__39174,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null));
{
var G__39179 = (i__39173 + (1));
i__39173 = G__39179;
continue;
}
} else
{{
var G__39180 = (i__39173 + (1));
i__39173 = G__39180;
continue;
}
}
} else
{{
var G__39181 = (i__39173 + (1));
i__39173 = G__39181;
continue;
}
}
} else
{{
var G__39182 = (i__39173 + (1));
i__39173 = G__39182;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39174),iter__39171.call(null,cljs.core.chunk_rest.call(null,s__39172__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39174),null);
}
} else
{var vec__39178 = cljs.core.first.call(null,s__39172__$2);var k = cljs.core.nth.call(null,vec__39178,(0),null);var v = cljs.core.nth.call(null,vec__39178,(1),null);if(schema.core.specific_key_QMARK_.call(null,k))
{var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);var raw_k = schema.core.explicit_schema_key.call(null,k);var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);if((required_QMARK_) || (present_QMARK_))
{var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));if(cljs.core.truth_(fail))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null),iter__39171.call(null,cljs.core.rest.call(null,s__39172__$2)));
} else
{{
var G__39183 = cljs.core.rest.call(null,s__39172__$2);
s__39172__$1 = G__39183;
continue;
}
}
} else
{{
var G__39184 = cljs.core.rest.call(null,s__39172__$2);
s__39172__$1 = G__39184;
continue;
}
}
} else
{{
var G__39185 = cljs.core.rest.call(null,s__39172__$2);
s__39172__$1 = G__39185;
continue;
}
}
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4375__auto__.call(null,input_schema);
})()));

}
}
});
plumbing.fnk.schema.assert_satisfies_schema = (function assert_satisfies_schema(input_schema,output_schema){var fails = plumbing.fnk.schema.schema_diff.call(null,input_schema,output_schema);if(cljs.core.truth_(fails))
{throw cljs.core.ex_info.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fails)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"does-not-satisfy-schema","does-not-satisfy-schema",-1543152824),new cljs.core.Keyword(null,"failures","failures",-912916356),fails], null));
} else
{return null;
}
});
var ufv___39208 = schema.utils.use_fn_validation;var output_schema39186_39209 = schema.core.Any;var input_schema39187_39210 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one.call(null,plumbing.fnk.schema.MapOutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);var input_checker39188_39211 = schema.core.checker.call(null,input_schema39187_39210);var output_checker39189_39212 = schema.core.checker.call(null,output_schema39186_39209);/**
* Inputs: [[i2 o2] :- IOSchemata [i1 o1] :- [(s/one InputSchema (quote input)) (s/one MapOutputSchema (quote output))]]
* 
* Given pairs of input and output schemata for fnks f1 and f2,
* return a pair of input and output schemata for #(f2 (merge % (f1 %))).
* f1's output schema must not contain any optional keys.
*/
plumbing.fnk.schema.compose_schemata = ((function (ufv___39208,output_schema39186_39209,input_schema39187_39210,input_checker39188_39211,output_checker39189_39212){
return (function compose_schemata(G__39190,G__39191){var validate__13419__auto__ = true;if(validate__13419__auto__)
{var args__13420__auto___39213 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__39190,G__39191], null);var temp__4126__auto___39214 = input_checker39188_39211.call(null,args__13420__auto___39213);if(cljs.core.truth_(temp__4126__auto___39214))
{var error__13421__auto___39215 = temp__4126__auto___39214;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.call(null,error__13421__auto___39215)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema39187_39210,new cljs.core.Keyword(null,"value","value",305978217),args__13420__auto___39213,new cljs.core.Keyword(null,"error","error",-978969032),error__13421__auto___39215], null));
} else
{}
} else
{}
var o__13422__auto__ = (function (){var G__39202 = G__39190;var vec__39204 = G__39202;var i2 = cljs.core.nth.call(null,vec__39204,(0),null);var o2 = cljs.core.nth.call(null,vec__39204,(1),null);var G__39203 = G__39191;var vec__39205 = G__39203;var i1 = cljs.core.nth.call(null,vec__39205,(0),null);var o1 = cljs.core.nth.call(null,vec__39205,(1),null);var G__39202__$1 = G__39202;var G__39203__$1 = G__39203;while(true){
var vec__39206 = G__39202__$1;var i2__$1 = cljs.core.nth.call(null,vec__39206,(0),null);var o2__$1 = cljs.core.nth.call(null,vec__39206,(1),null);var vec__39207 = G__39203__$1;var i1__$1 = cljs.core.nth.call(null,vec__39207,(0),null);var o1__$1 = cljs.core.nth.call(null,vec__39207,(1),null);plumbing.fnk.schema.assert_satisfies_schema.call(null,cljs.core.select_keys.call(null,i2__$1,cljs.core.keys.call(null,o1__$1)),o1__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,cljs.core.apply.call(null,cljs.core.dissoc,i2__$1,cljs.core.concat.call(null,cljs.core.keys.call(null,o1__$1),cljs.core.map.call(null,schema.core.optional_key,cljs.core.keys.call(null,o1__$1)))),i1__$1),o2__$1], null);
break;
}
})();if(validate__13419__auto__)
{var temp__4126__auto___39216 = output_checker39189_39212.call(null,o__13422__auto__);if(cljs.core.truth_(temp__4126__auto___39216))
{var error__13421__auto___39217 = temp__4126__auto___39216;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.call(null,error__13421__auto___39217)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema39186_39209,new cljs.core.Keyword(null,"value","value",305978217),o__13422__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__13421__auto___39217], null));
} else
{}
} else
{}
return o__13422__auto__;
});})(ufv___39208,output_schema39186_39209,input_schema39187_39210,input_checker39188_39211,output_checker39189_39212))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.compose_schemata),schema.core.make_fn_schema.call(null,output_schema39186_39209,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema39187_39210], null)));
plumbing.fnk.schema.schema_key = (function schema_key(m,k){if(cljs.core.contains_QMARK_.call(null,m,k))
{return k;
} else
{if(cljs.core.contains_QMARK_.call(null,m,schema.core.optional_key.call(null,k)))
{return schema.core.optional_key.call(null,k);
} else
{return null;

}
}
});
plumbing.fnk.schema.possibly_contains_QMARK_ = (function possibly_contains_QMARK_(m,k){return cljs.core.boolean$.call(null,plumbing.fnk.schema.schema_key.call(null,m,k));
});
var ufv___39296 = schema.utils.use_fn_validation;var output_schema39218_39297 = schema.core.Any;var input_schema39219_39298 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"s","s",-948495851,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"ks","ks",-754231827,null))], null);var input_checker39220_39299 = schema.core.checker.call(null,input_schema39219_39298);var output_checker39221_39300 = schema.core.checker.call(null,output_schema39218_39297);/**
* Inputs: [s :- InputSchema ks :- [s/Keyword]]
* 
* Return a pair [ks-part non-ks-part], with any extra schema removed.
*/
plumbing.fnk.schema.split_schema = ((function (ufv___39296,output_schema39218_39297,input_schema39219_39298,input_checker39220_39299,output_checker39221_39300){
return (function split_schema(G__39222,G__39223){var validate__13419__auto__ = ufv___39296.get_cell();if(cljs.core.truth_(validate__13419__auto__))
{var args__13420__auto___39301 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__39222,G__39223], null);var temp__4126__auto___39302 = input_checker39220_39299.call(null,args__13420__auto___39301);if(cljs.core.truth_(temp__4126__auto___39302))
{var error__13421__auto___39303 = temp__4126__auto___39302;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.call(null,error__13421__auto___39303)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema39219_39298,new cljs.core.Keyword(null,"value","value",305978217),args__13420__auto___39301,new cljs.core.Keyword(null,"error","error",-978969032),error__13421__auto___39303], null));
} else
{}
} else
{}
var o__13422__auto__ = (function (){var s = G__39222;var ks = G__39223;while(true){
var ks__$1 = cljs.core.set.call(null,ks);var iter__4375__auto__ = ((function (ks__$1,validate__13419__auto__,ufv___39296,output_schema39218_39297,input_schema39219_39298,input_checker39220_39299,output_checker39221_39300){
return (function iter__39260(s__39261){return (new cljs.core.LazySeq(null,((function (ks__$1,validate__13419__auto__,ufv___39296,output_schema39218_39297,input_schema39219_39298,input_checker39220_39299,output_checker39221_39300){
return (function (){var s__39261__$1 = s__39261;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__39261__$1);if(temp__4126__auto__)
{var s__39261__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__39261__$2))
{var c__4373__auto__ = cljs.core.chunk_first.call(null,s__39261__$2);var size__4374__auto__ = cljs.core.count.call(null,c__4373__auto__);var b__39263 = cljs.core.chunk_buffer.call(null,size__4374__auto__);if((function (){var i__39262 = (0);while(true){
if((i__39262 < size__4374__auto__))
{var in_QMARK_ = cljs.core._nth.call(null,c__4373__auto__,i__39262);cljs.core.chunk_append.call(null,b__39263,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4375__auto__ = ((function (i__39262,in_QMARK_,c__4373__auto__,size__4374__auto__,b__39263,s__39261__$2,temp__4126__auto__,ks__$1,validate__13419__auto__,ufv___39296,output_schema39218_39297,input_schema39219_39298,input_checker39220_39299,output_checker39221_39300){
return (function iter__39280(s__39281){return (new cljs.core.LazySeq(null,((function (i__39262,in_QMARK_,c__4373__auto__,size__4374__auto__,b__39263,s__39261__$2,temp__4126__auto__,ks__$1,validate__13419__auto__,ufv___39296,output_schema39218_39297,input_schema39219_39298,input_checker39220_39299,output_checker39221_39300){
return (function (){var s__39281__$1 = s__39281;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__39281__$1);if(temp__4126__auto____$1)
{var s__39281__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__39281__$2))
{var c__4373__auto____$1 = cljs.core.chunk_first.call(null,s__39281__$2);var size__4374__auto____$1 = cljs.core.count.call(null,c__4373__auto____$1);var b__39283 = cljs.core.chunk_buffer.call(null,size__4374__auto____$1);if((function (){var i__39282 = (0);while(true){
if((i__39282 < size__4374__auto____$1))
{var vec__39286 = cljs.core._nth.call(null,c__4373__auto____$1,i__39282);var k = cljs.core.nth.call(null,vec__39286,(0),null);var v = cljs.core.nth.call(null,vec__39286,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{cljs.core.chunk_append.call(null,b__39283,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__39304 = (i__39282 + (1));
i__39282 = G__39304;
continue;
}
} else
{{
var G__39305 = (i__39282 + (1));
i__39282 = G__39305;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39283),iter__39280.call(null,cljs.core.chunk_rest.call(null,s__39281__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39283),null);
}
} else
{var vec__39287 = cljs.core.first.call(null,s__39281__$2);var k = cljs.core.nth.call(null,vec__39287,(0),null);var v = cljs.core.nth.call(null,vec__39287,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__39280.call(null,cljs.core.rest.call(null,s__39281__$2)));
} else
{{
var G__39306 = cljs.core.rest.call(null,s__39281__$2);
s__39281__$1 = G__39306;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(i__39262,in_QMARK_,c__4373__auto__,size__4374__auto__,b__39263,s__39261__$2,temp__4126__auto__,ks__$1,validate__13419__auto__,ufv___39296,output_schema39218_39297,input_schema39219_39298,input_checker39220_39299,output_checker39221_39300))
,null,null));
});})(i__39262,in_QMARK_,c__4373__auto__,size__4374__auto__,b__39263,s__39261__$2,temp__4126__auto__,ks__$1,validate__13419__auto__,ufv___39296,output_schema39218_39297,input_schema39219_39298,input_checker39220_39299,output_checker39221_39300))
;return iter__4375__auto__.call(null,s);
})()));
{
var G__39307 = (i__39262 + (1));
i__39262 = G__39307;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39263),iter__39260.call(null,cljs.core.chunk_rest.call(null,s__39261__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39263),null);
}
} else
{var in_QMARK_ = cljs.core.first.call(null,s__39261__$2);return cljs.core.cons.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4375__auto__ = ((function (in_QMARK_,s__39261__$2,temp__4126__auto__,ks__$1,validate__13419__auto__,ufv___39296,output_schema39218_39297,input_schema39219_39298,input_checker39220_39299,output_checker39221_39300){
return (function iter__39288(s__39289){return (new cljs.core.LazySeq(null,((function (in_QMARK_,s__39261__$2,temp__4126__auto__,ks__$1,validate__13419__auto__,ufv___39296,output_schema39218_39297,input_schema39219_39298,input_checker39220_39299,output_checker39221_39300){
return (function (){var s__39289__$1 = s__39289;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__39289__$1);if(temp__4126__auto____$1)
{var s__39289__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__39289__$2))
{var c__4373__auto__ = cljs.core.chunk_first.call(null,s__39289__$2);var size__4374__auto__ = cljs.core.count.call(null,c__4373__auto__);var b__39291 = cljs.core.chunk_buffer.call(null,size__4374__auto__);if((function (){var i__39290 = (0);while(true){
if((i__39290 < size__4374__auto__))
{var vec__39294 = cljs.core._nth.call(null,c__4373__auto__,i__39290);var k = cljs.core.nth.call(null,vec__39294,(0),null);var v = cljs.core.nth.call(null,vec__39294,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{cljs.core.chunk_append.call(null,b__39291,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__39308 = (i__39290 + (1));
i__39290 = G__39308;
continue;
}
} else
{{
var G__39309 = (i__39290 + (1));
i__39290 = G__39309;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39291),iter__39288.call(null,cljs.core.chunk_rest.call(null,s__39289__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39291),null);
}
} else
{var vec__39295 = cljs.core.first.call(null,s__39289__$2);var k = cljs.core.nth.call(null,vec__39295,(0),null);var v = cljs.core.nth.call(null,vec__39295,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__39288.call(null,cljs.core.rest.call(null,s__39289__$2)));
} else
{{
var G__39310 = cljs.core.rest.call(null,s__39289__$2);
s__39289__$1 = G__39310;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(in_QMARK_,s__39261__$2,temp__4126__auto__,ks__$1,validate__13419__auto__,ufv___39296,output_schema39218_39297,input_schema39219_39298,input_checker39220_39299,output_checker39221_39300))
,null,null));
});})(in_QMARK_,s__39261__$2,temp__4126__auto__,ks__$1,validate__13419__auto__,ufv___39296,output_schema39218_39297,input_schema39219_39298,input_checker39220_39299,output_checker39221_39300))
;return iter__4375__auto__.call(null,s);
})()),iter__39260.call(null,cljs.core.rest.call(null,s__39261__$2)));
}
} else
{return null;
}
break;
}
});})(ks__$1,validate__13419__auto__,ufv___39296,output_schema39218_39297,input_schema39219_39298,input_checker39220_39299,output_checker39221_39300))
,null,null));
});})(ks__$1,validate__13419__auto__,ufv___39296,output_schema39218_39297,input_schema39219_39298,input_checker39220_39299,output_checker39221_39300))
;return iter__4375__auto__.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null));
break;
}
})();if(cljs.core.truth_(validate__13419__auto__))
{var temp__4126__auto___39311 = output_checker39221_39300.call(null,o__13422__auto__);if(cljs.core.truth_(temp__4126__auto___39311))
{var error__13421__auto___39312 = temp__4126__auto___39311;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.call(null,error__13421__auto___39312)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema39218_39297,new cljs.core.Keyword(null,"value","value",305978217),o__13422__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__13421__auto___39312], null));
} else
{}
} else
{}
return o__13422__auto__;
});})(ufv___39296,output_schema39218_39297,input_schema39219_39298,input_checker39220_39299,output_checker39221_39300))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema),schema.core.make_fn_schema.call(null,output_schema39218_39297,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema39219_39298], null)));
var ufv___39343 = schema.utils.use_fn_validation;var output_schema39313_39344 = plumbing.fnk.schema.GraphIOSchemata;var input_schema39314_39345 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.GraphIOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Keyword,"key"),schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,"inner-schemas")], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);var input_checker39315_39346 = schema.core.checker.call(null,input_schema39314_39345);var output_checker39316_39347 = schema.core.checker.call(null,output_schema39313_39344);/**
* Inputs: [[i1 o1] :- GraphIOSchemata [k [i2 o2]] :- [(s/one s/Keyword "key") (s/one IOSchemata "inner-schemas")]]
* Returns: GraphIOSchemata
* 
* Given pairs of input and output schemata for fnks f1 and f2, and a keyword k,
* return a pair of input and output schemata for #(let [v1 (f1 %)] (assoc v1 k (f2 (merge-disjoint % v1))))
*/
plumbing.fnk.schema.sequence_schemata = ((function (ufv___39343,output_schema39313_39344,input_schema39314_39345,input_checker39315_39346,output_checker39316_39347){
return (function sequence_schemata(G__39317,G__39318){var validate__13419__auto__ = ufv___39343.get_cell();if(cljs.core.truth_(validate__13419__auto__))
{var args__13420__auto___39348 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__39317,G__39318], null);var temp__4126__auto___39349 = input_checker39315_39346.call(null,args__13420__auto___39348);if(cljs.core.truth_(temp__4126__auto___39349))
{var error__13421__auto___39350 = temp__4126__auto___39349;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.call(null,error__13421__auto___39350)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema39314_39345,new cljs.core.Keyword(null,"value","value",305978217),args__13420__auto___39348,new cljs.core.Keyword(null,"error","error",-978969032),error__13421__auto___39350], null));
} else
{}
} else
{}
var o__13422__auto__ = (function (){var G__39334 = G__39317;var vec__39336 = G__39334;var i1 = cljs.core.nth.call(null,vec__39336,(0),null);var o1 = cljs.core.nth.call(null,vec__39336,(1),null);var G__39335 = G__39318;var vec__39337 = G__39335;var k = cljs.core.nth.call(null,vec__39337,(0),null);var vec__39338 = cljs.core.nth.call(null,vec__39337,(1),null);var i2 = cljs.core.nth.call(null,vec__39338,(0),null);var o2 = cljs.core.nth.call(null,vec__39338,(1),null);var G__39334__$1 = G__39334;var G__39335__$1 = G__39335;while(true){
var vec__39339 = G__39334__$1;var i1__$1 = cljs.core.nth.call(null,vec__39339,(0),null);var o1__$1 = cljs.core.nth.call(null,vec__39339,(1),null);var vec__39340 = G__39335__$1;var k__$1 = cljs.core.nth.call(null,vec__39340,(0),null);var vec__39341 = cljs.core.nth.call(null,vec__39340,(1),null);var i2__$1 = cljs.core.nth.call(null,vec__39341,(0),null);var o2__$1 = cljs.core.nth.call(null,vec__39341,(1),null);if(!(plumbing.fnk.schema.possibly_contains_QMARK_.call(null,i1__$1,k__$1)))
{} else
{throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"Duplicate key output (possibly due to a misordered graph) %s for input %s from input %s",k__$1,schema.core.explain.call(null,i2__$1),schema.core.explain.call(null,i1__$1))));
}
if(!(plumbing.fnk.schema.possibly_contains_QMARK_.call(null,i2__$1,k__$1)))
{} else
{throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"Node outputs a key %s in its inputs %s",k__$1,schema.core.explain.call(null,i2__$1))));
}
if(!(plumbing.fnk.schema.possibly_contains_QMARK_.call(null,o1__$1,k__$1)))
{} else
{throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"Node outputs a duplicate key %s given inputs %s",k__$1,schema.core.explain.call(null,i1__$1))));
}
var vec__39342 = plumbing.fnk.schema.split_schema.call(null,i2__$1,cljs.core.keys.call(null,o1__$1));var used = cljs.core.nth.call(null,vec__39342,(0),null);var unused = cljs.core.nth.call(null,vec__39342,(1),null);plumbing.fnk.schema.assert_satisfies_schema.call(null,used,o1__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,unused,i1__$1),cljs.core.assoc.call(null,o1__$1,k__$1,o2__$1)], null);
break;
}
})();if(cljs.core.truth_(validate__13419__auto__))
{var temp__4126__auto___39351 = output_checker39316_39347.call(null,o__13422__auto__);if(cljs.core.truth_(temp__4126__auto___39351))
{var error__13421__auto___39352 = temp__4126__auto___39351;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.call(null,error__13421__auto___39352)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema39313_39344,new cljs.core.Keyword(null,"value","value",305978217),o__13422__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__13421__auto___39352], null));
} else
{}
} else
{}
return o__13422__auto__;
});})(ufv___39343,output_schema39313_39344,input_schema39314_39345,input_checker39315_39346,output_checker39316_39347))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.sequence_schemata),schema.core.make_fn_schema.call(null,output_schema39313_39344,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema39314_39345], null)));
