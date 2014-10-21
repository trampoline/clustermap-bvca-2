// Compiled by ClojureScript 0.0-2356
goog.provide('plumbing.fnk.schema');
goog.require('cljs.core');
goog.require('schema.utils');
goog.require('schema.utils');
goog.require('schema.core');
goog.require('schema.core');
plumbing.fnk.schema.Schema = cljs.core.with_meta.call(null,schema.core.__GT_Protocol.call(null,schema.core.Schema),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"proto-sym","proto-sym",-886371734),new cljs.core.Symbol("s","Schema","s/Schema",-1305723789,null),new cljs.core.Keyword(null,"proto-pred","proto-pred",1885698716),(function (p1__13449__13450__auto__){var G__85721 = p1__13449__13450__auto__;if(G__85721)
{var bit__4300__auto__ = null;if(cljs.core.truth_((function (){var or__3637__auto__ = bit__4300__auto__;if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return G__85721.schema$core$Schema$;
}
})()))
{return true;
} else
{if((!G__85721.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,G__85721);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,G__85721);
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
plumbing.fnk.schema.assert_distinct = (function assert_distinct(things){var repeated_things = cljs.core.seq.call(null,cljs.core.filter.call(null,(function (p1__85722_SHARP_){return (cljs.core.val.call(null,p1__85722_SHARP_) > (1));
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
var vec__85724 = cljs.core.find.call(null,m,k);var _ = cljs.core.nth.call(null,vec__85724,(0),null);var v = cljs.core.nth.call(null,vec__85724,(1),null);var p = vec__85724;if(cljs.core.truth_(p))
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
var ufv___85730 = schema.utils.use_fn_validation;var output_schema85725_85731 = schema.core.maybe.call(null,schema.core.pair.call(null,schema.core.Keyword,"k",schema.core.Bool,"optional?"));var input_schema85726_85732 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"k","k",-505765866,null))], null);var input_checker85727_85733 = schema.core.checker.call(null,input_schema85726_85732);var output_checker85728_85734 = schema.core.checker.call(null,output_schema85725_85731);/**
* Inputs: [k]
* Returns: (s/maybe (s/pair s/Keyword "k" s/Bool "optional?"))
* 
* Given a possibly-unevaluated schema map key form, unpack an explicit keyword
* and optional? flag, or return nil for a non-explicit key
*/
plumbing.fnk.schema.unwrap_schema_form_key = ((function (ufv___85730,output_schema85725_85731,input_schema85726_85732,input_checker85727_85733,output_checker85728_85734){
return (function unwrap_schema_form_key(G__85729){var validate__13419__auto__ = ufv___85730.get_cell();if(cljs.core.truth_(validate__13419__auto__))
{var args__13420__auto___85735 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__85729], null);var temp__4126__auto___85736 = input_checker85727_85733.call(null,args__13420__auto___85735);if(cljs.core.truth_(temp__4126__auto___85736))
{var error__13421__auto___85737 = temp__4126__auto___85736;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.call(null,error__13421__auto___85737)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema85726_85732,new cljs.core.Keyword(null,"value","value",305978217),args__13420__auto___85735,new cljs.core.Keyword(null,"error","error",-978969032),error__13421__auto___85737], null));
} else
{}
} else
{}
var o__13422__auto__ = (function (){var k = G__85729;while(true){
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
{var temp__4126__auto___85738 = output_checker85728_85734.call(null,o__13422__auto__);if(cljs.core.truth_(temp__4126__auto___85738))
{var error__13421__auto___85739 = temp__4126__auto___85738;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.call(null,error__13421__auto___85739)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema85725_85731,new cljs.core.Keyword(null,"value","value",305978217),o__13422__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__13421__auto___85739], null));
} else
{}
} else
{}
return o__13422__auto__;
});})(ufv___85730,output_schema85725_85731,input_schema85726_85732,input_checker85727_85733,output_checker85728_85734))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.unwrap_schema_form_key),schema.core.make_fn_schema.call(null,output_schema85725_85731,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema85726_85732], null)));
var ufv___85745 = schema.utils.use_fn_validation;var output_schema85740_85746 = schema.core.Any;var input_schema85741_85747 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"s","s",-948495851,null))], null);var input_checker85742_85748 = schema.core.checker.call(null,input_schema85741_85747);var output_checker85743_85749 = schema.core.checker.call(null,output_schema85740_85746);/**
* Inputs: [s]
* 
* Given a possibly-unevaluated map schema, return a map from bare keyword to true
* (for required) or false (for optional)
*/
plumbing.fnk.schema.explicit_schema_key_map = ((function (ufv___85745,output_schema85740_85746,input_schema85741_85747,input_checker85742_85748,output_checker85743_85749){
return (function explicit_schema_key_map(G__85744){var validate__13419__auto__ = ufv___85745.get_cell();if(cljs.core.truth_(validate__13419__auto__))
{var args__13420__auto___85750 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__85744], null);var temp__4126__auto___85751 = input_checker85742_85748.call(null,args__13420__auto___85750);if(cljs.core.truth_(temp__4126__auto___85751))
{var error__13421__auto___85752 = temp__4126__auto___85751;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.call(null,error__13421__auto___85752)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema85741_85747,new cljs.core.Keyword(null,"value","value",305978217),args__13420__auto___85750,new cljs.core.Keyword(null,"error","error",-978969032),error__13421__auto___85752], null));
} else
{}
} else
{}
var o__13422__auto__ = (function (){var s = G__85744;while(true){
new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false);
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.call(null,plumbing.fnk.schema.unwrap_schema_form_key,cljs.core.keys.call(null,s)));
break;
}
})();if(cljs.core.truth_(validate__13419__auto__))
{var temp__4126__auto___85753 = output_checker85743_85749.call(null,o__13422__auto__);if(cljs.core.truth_(temp__4126__auto___85753))
{var error__13421__auto___85754 = temp__4126__auto___85753;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.call(null,error__13421__auto___85754)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema85740_85746,new cljs.core.Keyword(null,"value","value",305978217),o__13422__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__13421__auto___85754], null));
} else
{}
} else
{}
return o__13422__auto__;
});})(ufv___85745,output_schema85740_85746,input_schema85741_85747,input_checker85742_85748,output_checker85743_85749))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.explicit_schema_key_map),schema.core.make_fn_schema.call(null,output_schema85740_85746,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema85741_85747], null)));
var ufv___85760 = schema.utils.use_fn_validation;var output_schema85755_85761 = schema.core.Any;var input_schema85756_85762 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false),new cljs.core.Symbol(null,"s","s",-948495851,null))], null);var input_checker85757_85763 = schema.core.checker.call(null,input_schema85756_85762);var output_checker85758_85764 = schema.core.checker.call(null,output_schema85755_85761);/**
* Inputs: [s :- {s/Keyword s/Bool}]
* 
* Given output of explicit-schema-key-map, split into seq [req opt].
*/
plumbing.fnk.schema.split_schema_keys = ((function (ufv___85760,output_schema85755_85761,input_schema85756_85762,input_checker85757_85763,output_checker85758_85764){
return (function split_schema_keys(G__85759){var validate__13419__auto__ = ufv___85760.get_cell();if(cljs.core.truth_(validate__13419__auto__))
{var args__13420__auto___85765 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__85759], null);var temp__4126__auto___85766 = input_checker85757_85763.call(null,args__13420__auto___85765);if(cljs.core.truth_(temp__4126__auto___85766))
{var error__13421__auto___85767 = temp__4126__auto___85766;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.call(null,error__13421__auto___85767)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema85756_85762,new cljs.core.Keyword(null,"value","value",305978217),args__13420__auto___85765,new cljs.core.Keyword(null,"error","error",-978969032),error__13421__auto___85767], null));
} else
{}
} else
{}
var o__13422__auto__ = (function (){var s = G__85759;while(true){
new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"required","required",-846788763,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"optional","optional",-600484260,null))], null);
return cljs.core.mapv.call(null,cljs.core.partial.call(null,cljs.core.mapv,cljs.core.key),cljs.core.juxt.call(null,cljs.core.filter,cljs.core.remove).call(null,cljs.core.val,s));
break;
}
})();if(cljs.core.truth_(validate__13419__auto__))
{var temp__4126__auto___85768 = output_checker85758_85764.call(null,o__13422__auto__);if(cljs.core.truth_(temp__4126__auto___85768))
{var error__13421__auto___85769 = temp__4126__auto___85768;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.call(null,error__13421__auto___85769)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema85755_85761,new cljs.core.Keyword(null,"value","value",305978217),o__13422__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__13421__auto___85769], null));
} else
{}
} else
{}
return o__13422__auto__;
});})(ufv___85760,output_schema85755_85761,input_schema85756_85762,input_checker85757_85763,output_checker85758_85764))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema_keys),schema.core.make_fn_schema.call(null,output_schema85755_85761,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema85756_85762], null)));
/**
* Like merge-with, but also projects keys to a smaller space and merges them similar to the
* values.
* @param {...*} var_args
*/
plumbing.fnk.schema.merge_on_with = (function() { 
var merge_on_with__delegate = function (key_project,key_combine,val_combine,maps){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (m,p__85773){var vec__85774 = p__85773;var k = cljs.core.nth.call(null,vec__85774,(0),null);var v = cljs.core.nth.call(null,vec__85774,(1),null);var pk = key_project.call(null,k);var temp__4124__auto__ = cljs.core.get.call(null,m,pk);if(cljs.core.truth_(temp__4124__auto__))
{var vec__85775 = temp__4124__auto__;var ok = cljs.core.nth.call(null,vec__85775,(0),null);var ov = cljs.core.nth.call(null,vec__85775,(1),null);return cljs.core.assoc.call(null,m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_combine.call(null,ok,k),val_combine.call(null,ov,v)], null));
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
merge_on_with.cljs$lang$applyTo = (function (arglist__85776){
var key_project = cljs.core.first(arglist__85776);
arglist__85776 = cljs.core.next(arglist__85776);
var key_combine = cljs.core.first(arglist__85776);
arglist__85776 = cljs.core.next(arglist__85776);
var val_combine = cljs.core.first(arglist__85776);
var maps = cljs.core.rest(arglist__85776);
return merge_on_with__delegate(key_project,key_combine,val_combine,maps);
});
merge_on_with.cljs$core$IFn$_invoke$arity$variadic = merge_on_with__delegate;
return merge_on_with;
})()
;
var ufv___85784 = schema.utils.use_fn_validation;var output_schema85778_85785 = plumbing.fnk.schema.InputSchema;var input_schema85779_85786 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i1","i1",-572470430,null)),schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i2","i2",850408895,null))], null);var input_checker85780_85787 = schema.core.checker.call(null,input_schema85779_85786);var output_checker85781_85788 = schema.core.checker.call(null,output_schema85778_85785);/**
* Inputs: [i1 :- InputSchema i2 :- InputSchema]
* Returns: InputSchema
* 
* Returns a minimal input schema schema that entails satisfaction of both s1 and s2
*/
plumbing.fnk.schema.union_input_schemata = ((function (ufv___85784,output_schema85778_85785,input_schema85779_85786,input_checker85780_85787,output_checker85781_85788){
return (function union_input_schemata(G__85782,G__85783){var validate__13419__auto__ = ufv___85784.get_cell();if(cljs.core.truth_(validate__13419__auto__))
{var args__13420__auto___85789 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__85782,G__85783], null);var temp__4126__auto___85790 = input_checker85780_85787.call(null,args__13420__auto___85789);if(cljs.core.truth_(temp__4126__auto___85790))
{var error__13421__auto___85791 = temp__4126__auto___85790;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.call(null,error__13421__auto___85791)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema85779_85786,new cljs.core.Keyword(null,"value","value",305978217),args__13420__auto___85789,new cljs.core.Keyword(null,"error","error",-978969032),error__13421__auto___85791], null));
} else
{}
} else
{}
var o__13422__auto__ = (function (){var i1 = G__85782;var i2 = G__85783;while(true){
return plumbing.fnk.schema.merge_on_with.call(null,((function (validate__13419__auto__,ufv___85784,output_schema85778_85785,input_schema85779_85786,input_checker85780_85787,output_checker85781_85788){
return (function (p1__85777_SHARP_){if(schema.core.specific_key_QMARK_.call(null,p1__85777_SHARP_))
{return schema.core.explicit_schema_key.call(null,p1__85777_SHARP_);
} else
{return new cljs.core.Keyword(null,"extra","extra",1612569067);
}
});})(validate__13419__auto__,ufv___85784,output_schema85778_85785,input_schema85779_85786,input_checker85780_85787,output_checker85781_85788))
,((function (validate__13419__auto__,ufv___85784,output_schema85778_85785,input_schema85779_85786,input_checker85780_85787,output_checker85781_85788){
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
});})(validate__13419__auto__,ufv___85784,output_schema85778_85785,input_schema85779_85786,input_checker85780_85787,output_checker85781_85788))
,((function (validate__13419__auto__,ufv___85784,output_schema85778_85785,input_schema85779_85786,input_checker85780_85787,output_checker85781_85788){
return (function (s1,s2){if((plumbing.fnk.schema.map_schema_QMARK_.call(null,s1)) && (plumbing.fnk.schema.map_schema_QMARK_.call(null,s2)))
{return union_input_schemata.call(null,s1,s2);
} else
{return plumbing.fnk.schema.non_map_union.call(null,s1,s2);
}
});})(validate__13419__auto__,ufv___85784,output_schema85778_85785,input_schema85779_85786,input_checker85780_85787,output_checker85781_85788))
,i1,i2);
break;
}
})();if(cljs.core.truth_(validate__13419__auto__))
{var temp__4126__auto___85792 = output_checker85781_85788.call(null,o__13422__auto__);if(cljs.core.truth_(temp__4126__auto___85792))
{var error__13421__auto___85793 = temp__4126__auto___85792;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.call(null,error__13421__auto___85793)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema85778_85785,new cljs.core.Keyword(null,"value","value",305978217),o__13422__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__13421__auto___85793], null));
} else
{}
} else
{}
return o__13422__auto__;
});})(ufv___85784,output_schema85778_85785,input_schema85779_85786,input_checker85780_85787,output_checker85781_85788))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.union_input_schemata),schema.core.make_fn_schema.call(null,output_schema85778_85785,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema85779_85786], null)));
var ufv___85799 = schema.utils.use_fn_validation;var output_schema85794_85800 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null);var input_schema85795_85801 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input-schema","input-schema",1373647181,null))], null);var input_checker85796_85802 = schema.core.checker.call(null,input_schema85795_85801);var output_checker85797_85803 = schema.core.checker.call(null,output_schema85794_85800);/**
* Inputs: [input-schema :- InputSchema]
* Returns: [s/Keyword]
* 
* Which top-level keys are required (i.e., non-false) by this input schema.
*/
plumbing.fnk.schema.required_toplevel_keys = ((function (ufv___85799,output_schema85794_85800,input_schema85795_85801,input_checker85796_85802,output_checker85797_85803){
return (function required_toplevel_keys(G__85798){var validate__13419__auto__ = ufv___85799.get_cell();if(cljs.core.truth_(validate__13419__auto__))
{var args__13420__auto___85804 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__85798], null);var temp__4126__auto___85805 = input_checker85796_85802.call(null,args__13420__auto___85804);if(cljs.core.truth_(temp__4126__auto___85805))
{var error__13421__auto___85806 = temp__4126__auto___85805;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.call(null,error__13421__auto___85806)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema85795_85801,new cljs.core.Keyword(null,"value","value",305978217),args__13420__auto___85804,new cljs.core.Keyword(null,"error","error",-978969032),error__13421__auto___85806], null));
} else
{}
} else
{}
var o__13422__auto__ = (function (){var input_schema = G__85798;while(true){
return cljs.core.keep.call(null,((function (validate__13419__auto__,ufv___85799,output_schema85794_85800,input_schema85795_85801,input_checker85796_85802,output_checker85797_85803){
return (function (k){if(schema.core.required_key_QMARK_.call(null,k))
{return schema.core.explicit_schema_key.call(null,k);
} else
{return null;
}
});})(validate__13419__auto__,ufv___85799,output_schema85794_85800,input_schema85795_85801,input_checker85796_85802,output_checker85797_85803))
,cljs.core.keys.call(null,input_schema));
break;
}
})();if(cljs.core.truth_(validate__13419__auto__))
{var temp__4126__auto___85807 = output_checker85797_85803.call(null,o__13422__auto__);if(cljs.core.truth_(temp__4126__auto___85807))
{var error__13421__auto___85808 = temp__4126__auto___85807;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.call(null,error__13421__auto___85808)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema85794_85800,new cljs.core.Keyword(null,"value","value",305978217),o__13422__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__13421__auto___85808], null));
} else
{}
} else
{}
return o__13422__auto__;
});})(ufv___85799,output_schema85794_85800,input_schema85795_85801,input_checker85796_85802,output_checker85797_85803))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.required_toplevel_keys),schema.core.make_fn_schema.call(null,output_schema85794_85800,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema85795_85801], null)));
/**
* Guess an output schema for an expr.  Currently just looks for literal map structure and
* all keyword keys.
*/
plumbing.fnk.schema.guess_expr_output_schema = (function guess_expr_output_schema(expr){if((cljs.core.map_QMARK_.call(null,expr)) && (cljs.core.every_QMARK_.call(null,cljs.core.keyword_QMARK_,cljs.core.keys.call(null,expr))))
{return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4375__auto__ = (function iter__85817(s__85818){return (new cljs.core.LazySeq(null,(function (){var s__85818__$1 = s__85818;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__85818__$1);if(temp__4126__auto__)
{var s__85818__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__85818__$2))
{var c__4373__auto__ = cljs.core.chunk_first.call(null,s__85818__$2);var size__4374__auto__ = cljs.core.count.call(null,c__4373__auto__);var b__85820 = cljs.core.chunk_buffer.call(null,size__4374__auto__);if((function (){var i__85819 = (0);while(true){
if((i__85819 < size__4374__auto__))
{var vec__85823 = cljs.core._nth.call(null,c__4373__auto__,i__85819);var k = cljs.core.nth.call(null,vec__85823,(0),null);var v = cljs.core.nth.call(null,vec__85823,(1),null);cljs.core.chunk_append.call(null,b__85820,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema.call(null,v)], null));
{
var G__85825 = (i__85819 + (1));
i__85819 = G__85825;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__85820),iter__85817.call(null,cljs.core.chunk_rest.call(null,s__85818__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__85820),null);
}
} else
{var vec__85824 = cljs.core.first.call(null,s__85818__$2);var k = cljs.core.nth.call(null,vec__85824,(0),null);var v = cljs.core.nth.call(null,vec__85824,(1),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema.call(null,v)], null),iter__85817.call(null,cljs.core.rest.call(null,s__85818__$2)));
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
{return cljs.core.not_empty.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4375__auto__ = (function iter__85834(s__85835){return (new cljs.core.LazySeq(null,(function (){var s__85835__$1 = s__85835;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__85835__$1);if(temp__4126__auto__)
{var s__85835__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__85835__$2))
{var c__4373__auto__ = cljs.core.chunk_first.call(null,s__85835__$2);var size__4374__auto__ = cljs.core.count.call(null,c__4373__auto__);var b__85837 = cljs.core.chunk_buffer.call(null,size__4374__auto__);if((function (){var i__85836 = (0);while(true){
if((i__85836 < size__4374__auto__))
{var vec__85840 = cljs.core._nth.call(null,c__4373__auto__,i__85836);var k = cljs.core.nth.call(null,vec__85840,(0),null);var v = cljs.core.nth.call(null,vec__85840,(1),null);if(schema.core.specific_key_QMARK_.call(null,k))
{var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);var raw_k = schema.core.explicit_schema_key.call(null,k);var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);if((required_QMARK_) || (present_QMARK_))
{var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));if(cljs.core.truth_(fail))
{cljs.core.chunk_append.call(null,b__85837,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null));
{
var G__85842 = (i__85836 + (1));
i__85836 = G__85842;
continue;
}
} else
{{
var G__85843 = (i__85836 + (1));
i__85836 = G__85843;
continue;
}
}
} else
{{
var G__85844 = (i__85836 + (1));
i__85836 = G__85844;
continue;
}
}
} else
{{
var G__85845 = (i__85836 + (1));
i__85836 = G__85845;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__85837),iter__85834.call(null,cljs.core.chunk_rest.call(null,s__85835__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__85837),null);
}
} else
{var vec__85841 = cljs.core.first.call(null,s__85835__$2);var k = cljs.core.nth.call(null,vec__85841,(0),null);var v = cljs.core.nth.call(null,vec__85841,(1),null);if(schema.core.specific_key_QMARK_.call(null,k))
{var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);var raw_k = schema.core.explicit_schema_key.call(null,k);var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);if((required_QMARK_) || (present_QMARK_))
{var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));if(cljs.core.truth_(fail))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null),iter__85834.call(null,cljs.core.rest.call(null,s__85835__$2)));
} else
{{
var G__85846 = cljs.core.rest.call(null,s__85835__$2);
s__85835__$1 = G__85846;
continue;
}
}
} else
{{
var G__85847 = cljs.core.rest.call(null,s__85835__$2);
s__85835__$1 = G__85847;
continue;
}
}
} else
{{
var G__85848 = cljs.core.rest.call(null,s__85835__$2);
s__85835__$1 = G__85848;
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
var ufv___85871 = schema.utils.use_fn_validation;var output_schema85849_85872 = schema.core.Any;var input_schema85850_85873 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one.call(null,plumbing.fnk.schema.MapOutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);var input_checker85851_85874 = schema.core.checker.call(null,input_schema85850_85873);var output_checker85852_85875 = schema.core.checker.call(null,output_schema85849_85872);/**
* Inputs: [[i2 o2] :- IOSchemata [i1 o1] :- [(s/one InputSchema (quote input)) (s/one MapOutputSchema (quote output))]]
* 
* Given pairs of input and output schemata for fnks f1 and f2,
* return a pair of input and output schemata for #(f2 (merge % (f1 %))).
* f1's output schema must not contain any optional keys.
*/
plumbing.fnk.schema.compose_schemata = ((function (ufv___85871,output_schema85849_85872,input_schema85850_85873,input_checker85851_85874,output_checker85852_85875){
return (function compose_schemata(G__85853,G__85854){var validate__13419__auto__ = true;if(validate__13419__auto__)
{var args__13420__auto___85876 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__85853,G__85854], null);var temp__4126__auto___85877 = input_checker85851_85874.call(null,args__13420__auto___85876);if(cljs.core.truth_(temp__4126__auto___85877))
{var error__13421__auto___85878 = temp__4126__auto___85877;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.call(null,error__13421__auto___85878)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema85850_85873,new cljs.core.Keyword(null,"value","value",305978217),args__13420__auto___85876,new cljs.core.Keyword(null,"error","error",-978969032),error__13421__auto___85878], null));
} else
{}
} else
{}
var o__13422__auto__ = (function (){var G__85865 = G__85853;var vec__85867 = G__85865;var i2 = cljs.core.nth.call(null,vec__85867,(0),null);var o2 = cljs.core.nth.call(null,vec__85867,(1),null);var G__85866 = G__85854;var vec__85868 = G__85866;var i1 = cljs.core.nth.call(null,vec__85868,(0),null);var o1 = cljs.core.nth.call(null,vec__85868,(1),null);var G__85865__$1 = G__85865;var G__85866__$1 = G__85866;while(true){
var vec__85869 = G__85865__$1;var i2__$1 = cljs.core.nth.call(null,vec__85869,(0),null);var o2__$1 = cljs.core.nth.call(null,vec__85869,(1),null);var vec__85870 = G__85866__$1;var i1__$1 = cljs.core.nth.call(null,vec__85870,(0),null);var o1__$1 = cljs.core.nth.call(null,vec__85870,(1),null);plumbing.fnk.schema.assert_satisfies_schema.call(null,cljs.core.select_keys.call(null,i2__$1,cljs.core.keys.call(null,o1__$1)),o1__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,cljs.core.apply.call(null,cljs.core.dissoc,i2__$1,cljs.core.concat.call(null,cljs.core.keys.call(null,o1__$1),cljs.core.map.call(null,schema.core.optional_key,cljs.core.keys.call(null,o1__$1)))),i1__$1),o2__$1], null);
break;
}
})();if(validate__13419__auto__)
{var temp__4126__auto___85879 = output_checker85852_85875.call(null,o__13422__auto__);if(cljs.core.truth_(temp__4126__auto___85879))
{var error__13421__auto___85880 = temp__4126__auto___85879;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.call(null,error__13421__auto___85880)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema85849_85872,new cljs.core.Keyword(null,"value","value",305978217),o__13422__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__13421__auto___85880], null));
} else
{}
} else
{}
return o__13422__auto__;
});})(ufv___85871,output_schema85849_85872,input_schema85850_85873,input_checker85851_85874,output_checker85852_85875))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.compose_schemata),schema.core.make_fn_schema.call(null,output_schema85849_85872,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema85850_85873], null)));
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
var ufv___85959 = schema.utils.use_fn_validation;var output_schema85881_85960 = schema.core.Any;var input_schema85882_85961 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"s","s",-948495851,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"ks","ks",-754231827,null))], null);var input_checker85883_85962 = schema.core.checker.call(null,input_schema85882_85961);var output_checker85884_85963 = schema.core.checker.call(null,output_schema85881_85960);/**
* Inputs: [s :- InputSchema ks :- [s/Keyword]]
* 
* Return a pair [ks-part non-ks-part], with any extra schema removed.
*/
plumbing.fnk.schema.split_schema = ((function (ufv___85959,output_schema85881_85960,input_schema85882_85961,input_checker85883_85962,output_checker85884_85963){
return (function split_schema(G__85885,G__85886){var validate__13419__auto__ = ufv___85959.get_cell();if(cljs.core.truth_(validate__13419__auto__))
{var args__13420__auto___85964 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__85885,G__85886], null);var temp__4126__auto___85965 = input_checker85883_85962.call(null,args__13420__auto___85964);if(cljs.core.truth_(temp__4126__auto___85965))
{var error__13421__auto___85966 = temp__4126__auto___85965;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.call(null,error__13421__auto___85966)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema85882_85961,new cljs.core.Keyword(null,"value","value",305978217),args__13420__auto___85964,new cljs.core.Keyword(null,"error","error",-978969032),error__13421__auto___85966], null));
} else
{}
} else
{}
var o__13422__auto__ = (function (){var s = G__85885;var ks = G__85886;while(true){
var ks__$1 = cljs.core.set.call(null,ks);var iter__4375__auto__ = ((function (ks__$1,validate__13419__auto__,ufv___85959,output_schema85881_85960,input_schema85882_85961,input_checker85883_85962,output_checker85884_85963){
return (function iter__85923(s__85924){return (new cljs.core.LazySeq(null,((function (ks__$1,validate__13419__auto__,ufv___85959,output_schema85881_85960,input_schema85882_85961,input_checker85883_85962,output_checker85884_85963){
return (function (){var s__85924__$1 = s__85924;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__85924__$1);if(temp__4126__auto__)
{var s__85924__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__85924__$2))
{var c__4373__auto__ = cljs.core.chunk_first.call(null,s__85924__$2);var size__4374__auto__ = cljs.core.count.call(null,c__4373__auto__);var b__85926 = cljs.core.chunk_buffer.call(null,size__4374__auto__);if((function (){var i__85925 = (0);while(true){
if((i__85925 < size__4374__auto__))
{var in_QMARK_ = cljs.core._nth.call(null,c__4373__auto__,i__85925);cljs.core.chunk_append.call(null,b__85926,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4375__auto__ = ((function (i__85925,in_QMARK_,c__4373__auto__,size__4374__auto__,b__85926,s__85924__$2,temp__4126__auto__,ks__$1,validate__13419__auto__,ufv___85959,output_schema85881_85960,input_schema85882_85961,input_checker85883_85962,output_checker85884_85963){
return (function iter__85943(s__85944){return (new cljs.core.LazySeq(null,((function (i__85925,in_QMARK_,c__4373__auto__,size__4374__auto__,b__85926,s__85924__$2,temp__4126__auto__,ks__$1,validate__13419__auto__,ufv___85959,output_schema85881_85960,input_schema85882_85961,input_checker85883_85962,output_checker85884_85963){
return (function (){var s__85944__$1 = s__85944;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__85944__$1);if(temp__4126__auto____$1)
{var s__85944__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__85944__$2))
{var c__4373__auto____$1 = cljs.core.chunk_first.call(null,s__85944__$2);var size__4374__auto____$1 = cljs.core.count.call(null,c__4373__auto____$1);var b__85946 = cljs.core.chunk_buffer.call(null,size__4374__auto____$1);if((function (){var i__85945 = (0);while(true){
if((i__85945 < size__4374__auto____$1))
{var vec__85949 = cljs.core._nth.call(null,c__4373__auto____$1,i__85945);var k = cljs.core.nth.call(null,vec__85949,(0),null);var v = cljs.core.nth.call(null,vec__85949,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{cljs.core.chunk_append.call(null,b__85946,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__85967 = (i__85945 + (1));
i__85945 = G__85967;
continue;
}
} else
{{
var G__85968 = (i__85945 + (1));
i__85945 = G__85968;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__85946),iter__85943.call(null,cljs.core.chunk_rest.call(null,s__85944__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__85946),null);
}
} else
{var vec__85950 = cljs.core.first.call(null,s__85944__$2);var k = cljs.core.nth.call(null,vec__85950,(0),null);var v = cljs.core.nth.call(null,vec__85950,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__85943.call(null,cljs.core.rest.call(null,s__85944__$2)));
} else
{{
var G__85969 = cljs.core.rest.call(null,s__85944__$2);
s__85944__$1 = G__85969;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(i__85925,in_QMARK_,c__4373__auto__,size__4374__auto__,b__85926,s__85924__$2,temp__4126__auto__,ks__$1,validate__13419__auto__,ufv___85959,output_schema85881_85960,input_schema85882_85961,input_checker85883_85962,output_checker85884_85963))
,null,null));
});})(i__85925,in_QMARK_,c__4373__auto__,size__4374__auto__,b__85926,s__85924__$2,temp__4126__auto__,ks__$1,validate__13419__auto__,ufv___85959,output_schema85881_85960,input_schema85882_85961,input_checker85883_85962,output_checker85884_85963))
;return iter__4375__auto__.call(null,s);
})()));
{
var G__85970 = (i__85925 + (1));
i__85925 = G__85970;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__85926),iter__85923.call(null,cljs.core.chunk_rest.call(null,s__85924__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__85926),null);
}
} else
{var in_QMARK_ = cljs.core.first.call(null,s__85924__$2);return cljs.core.cons.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4375__auto__ = ((function (in_QMARK_,s__85924__$2,temp__4126__auto__,ks__$1,validate__13419__auto__,ufv___85959,output_schema85881_85960,input_schema85882_85961,input_checker85883_85962,output_checker85884_85963){
return (function iter__85951(s__85952){return (new cljs.core.LazySeq(null,((function (in_QMARK_,s__85924__$2,temp__4126__auto__,ks__$1,validate__13419__auto__,ufv___85959,output_schema85881_85960,input_schema85882_85961,input_checker85883_85962,output_checker85884_85963){
return (function (){var s__85952__$1 = s__85952;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__85952__$1);if(temp__4126__auto____$1)
{var s__85952__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__85952__$2))
{var c__4373__auto__ = cljs.core.chunk_first.call(null,s__85952__$2);var size__4374__auto__ = cljs.core.count.call(null,c__4373__auto__);var b__85954 = cljs.core.chunk_buffer.call(null,size__4374__auto__);if((function (){var i__85953 = (0);while(true){
if((i__85953 < size__4374__auto__))
{var vec__85957 = cljs.core._nth.call(null,c__4373__auto__,i__85953);var k = cljs.core.nth.call(null,vec__85957,(0),null);var v = cljs.core.nth.call(null,vec__85957,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{cljs.core.chunk_append.call(null,b__85954,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__85971 = (i__85953 + (1));
i__85953 = G__85971;
continue;
}
} else
{{
var G__85972 = (i__85953 + (1));
i__85953 = G__85972;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__85954),iter__85951.call(null,cljs.core.chunk_rest.call(null,s__85952__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__85954),null);
}
} else
{var vec__85958 = cljs.core.first.call(null,s__85952__$2);var k = cljs.core.nth.call(null,vec__85958,(0),null);var v = cljs.core.nth.call(null,vec__85958,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__85951.call(null,cljs.core.rest.call(null,s__85952__$2)));
} else
{{
var G__85973 = cljs.core.rest.call(null,s__85952__$2);
s__85952__$1 = G__85973;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(in_QMARK_,s__85924__$2,temp__4126__auto__,ks__$1,validate__13419__auto__,ufv___85959,output_schema85881_85960,input_schema85882_85961,input_checker85883_85962,output_checker85884_85963))
,null,null));
});})(in_QMARK_,s__85924__$2,temp__4126__auto__,ks__$1,validate__13419__auto__,ufv___85959,output_schema85881_85960,input_schema85882_85961,input_checker85883_85962,output_checker85884_85963))
;return iter__4375__auto__.call(null,s);
})()),iter__85923.call(null,cljs.core.rest.call(null,s__85924__$2)));
}
} else
{return null;
}
break;
}
});})(ks__$1,validate__13419__auto__,ufv___85959,output_schema85881_85960,input_schema85882_85961,input_checker85883_85962,output_checker85884_85963))
,null,null));
});})(ks__$1,validate__13419__auto__,ufv___85959,output_schema85881_85960,input_schema85882_85961,input_checker85883_85962,output_checker85884_85963))
;return iter__4375__auto__.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null));
break;
}
})();if(cljs.core.truth_(validate__13419__auto__))
{var temp__4126__auto___85974 = output_checker85884_85963.call(null,o__13422__auto__);if(cljs.core.truth_(temp__4126__auto___85974))
{var error__13421__auto___85975 = temp__4126__auto___85974;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.call(null,error__13421__auto___85975)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema85881_85960,new cljs.core.Keyword(null,"value","value",305978217),o__13422__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__13421__auto___85975], null));
} else
{}
} else
{}
return o__13422__auto__;
});})(ufv___85959,output_schema85881_85960,input_schema85882_85961,input_checker85883_85962,output_checker85884_85963))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema),schema.core.make_fn_schema.call(null,output_schema85881_85960,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema85882_85961], null)));
var ufv___86006 = schema.utils.use_fn_validation;var output_schema85976_86007 = plumbing.fnk.schema.GraphIOSchemata;var input_schema85977_86008 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.GraphIOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Keyword,"key"),schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,"inner-schemas")], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);var input_checker85978_86009 = schema.core.checker.call(null,input_schema85977_86008);var output_checker85979_86010 = schema.core.checker.call(null,output_schema85976_86007);/**
* Inputs: [[i1 o1] :- GraphIOSchemata [k [i2 o2]] :- [(s/one s/Keyword "key") (s/one IOSchemata "inner-schemas")]]
* Returns: GraphIOSchemata
* 
* Given pairs of input and output schemata for fnks f1 and f2, and a keyword k,
* return a pair of input and output schemata for #(let [v1 (f1 %)] (assoc v1 k (f2 (merge-disjoint % v1))))
*/
plumbing.fnk.schema.sequence_schemata = ((function (ufv___86006,output_schema85976_86007,input_schema85977_86008,input_checker85978_86009,output_checker85979_86010){
return (function sequence_schemata(G__85980,G__85981){var validate__13419__auto__ = ufv___86006.get_cell();if(cljs.core.truth_(validate__13419__auto__))
{var args__13420__auto___86011 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__85980,G__85981], null);var temp__4126__auto___86012 = input_checker85978_86009.call(null,args__13420__auto___86011);if(cljs.core.truth_(temp__4126__auto___86012))
{var error__13421__auto___86013 = temp__4126__auto___86012;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.call(null,error__13421__auto___86013)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema85977_86008,new cljs.core.Keyword(null,"value","value",305978217),args__13420__auto___86011,new cljs.core.Keyword(null,"error","error",-978969032),error__13421__auto___86013], null));
} else
{}
} else
{}
var o__13422__auto__ = (function (){var G__85997 = G__85980;var vec__85999 = G__85997;var i1 = cljs.core.nth.call(null,vec__85999,(0),null);var o1 = cljs.core.nth.call(null,vec__85999,(1),null);var G__85998 = G__85981;var vec__86000 = G__85998;var k = cljs.core.nth.call(null,vec__86000,(0),null);var vec__86001 = cljs.core.nth.call(null,vec__86000,(1),null);var i2 = cljs.core.nth.call(null,vec__86001,(0),null);var o2 = cljs.core.nth.call(null,vec__86001,(1),null);var G__85997__$1 = G__85997;var G__85998__$1 = G__85998;while(true){
var vec__86002 = G__85997__$1;var i1__$1 = cljs.core.nth.call(null,vec__86002,(0),null);var o1__$1 = cljs.core.nth.call(null,vec__86002,(1),null);var vec__86003 = G__85998__$1;var k__$1 = cljs.core.nth.call(null,vec__86003,(0),null);var vec__86004 = cljs.core.nth.call(null,vec__86003,(1),null);var i2__$1 = cljs.core.nth.call(null,vec__86004,(0),null);var o2__$1 = cljs.core.nth.call(null,vec__86004,(1),null);if(!(plumbing.fnk.schema.possibly_contains_QMARK_.call(null,i1__$1,k__$1)))
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
var vec__86005 = plumbing.fnk.schema.split_schema.call(null,i2__$1,cljs.core.keys.call(null,o1__$1));var used = cljs.core.nth.call(null,vec__86005,(0),null);var unused = cljs.core.nth.call(null,vec__86005,(1),null);plumbing.fnk.schema.assert_satisfies_schema.call(null,used,o1__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,unused,i1__$1),cljs.core.assoc.call(null,o1__$1,k__$1,o2__$1)], null);
break;
}
})();if(cljs.core.truth_(validate__13419__auto__))
{var temp__4126__auto___86014 = output_checker85979_86010.call(null,o__13422__auto__);if(cljs.core.truth_(temp__4126__auto___86014))
{var error__13421__auto___86015 = temp__4126__auto___86014;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.call(null,error__13421__auto___86015)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema85976_86007,new cljs.core.Keyword(null,"value","value",305978217),o__13422__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__13421__auto___86015], null));
} else
{}
} else
{}
return o__13422__auto__;
});})(ufv___86006,output_schema85976_86007,input_schema85977_86008,input_checker85978_86009,output_checker85979_86010))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.sequence_schemata),schema.core.make_fn_schema.call(null,output_schema85976_86007,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema85977_86008], null)));

//# sourceMappingURL=schema.js.map