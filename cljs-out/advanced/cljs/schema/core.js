// Compiled by ClojureScript 0.0-2356
goog.provide('schema.core');
goog.require('cljs.core');
goog.require('schema.utils');
goog.require('schema.utils');
goog.require('clojure.string');
goog.require('clojure.string');
schema.core.Schema = (function (){var obj69496 = {};return obj69496;
})();
schema.core.walker = (function walker(this$){if((function (){var and__3625__auto__ = this$;if(and__3625__auto__)
{return this$.schema$core$Schema$walker$arity$1;
} else
{return and__3625__auto__;
}
})())
{return this$.schema$core$Schema$walker$arity$1(this$);
} else
{var x__4273__auto__ = (((this$ == null))?null:this$);return (function (){var or__3637__auto__ = (schema.core.walker[(function (){var G__69500 = x__4273__auto__;return goog.typeOf(G__69500);
})()]);if(or__3637__auto__)
{return or__3637__auto__;
} else
{var or__3637__auto____$1 = (schema.core.walker["_"]);if(or__3637__auto____$1)
{return or__3637__auto____$1;
} else
{throw cljs.core.missing_protocol("Schema.walker",this$);
}
}
})().call(null,this$);
}
});
schema.core.explain = (function explain(this$){if((function (){var and__3625__auto__ = this$;if(and__3625__auto__)
{return this$.schema$core$Schema$explain$arity$1;
} else
{return and__3625__auto__;
}
})())
{return this$.schema$core$Schema$explain$arity$1(this$);
} else
{var x__4273__auto__ = (((this$ == null))?null:this$);return (function (){var or__3637__auto__ = (schema.core.explain[(function (){var G__69504 = x__4273__auto__;return goog.typeOf(G__69504);
})()]);if(or__3637__auto__)
{return or__3637__auto__;
} else
{var or__3637__auto____$1 = (schema.core.explain["_"]);if(or__3637__auto____$1)
{return or__3637__auto____$1;
} else
{throw cljs.core.missing_protocol("Schema.explain",this$);
}
}
})().call(null,this$);
}
});
/**
* The function to call within 'walker' implementations to create walkers for subschemas.
* Can be dynamically bound (using start-walker below) to create different walking behaviors.
* 
* For the curious, implemented using dynamic binding rather than making walker take a
* subschema-walker as an argument because some behaviors (e.g. recursive schema walkers)
* seem to require mind-bending things like fixed-point combinators that way, but are
* simple this way.
*/
schema.core.subschema_walker = (function subschema_walker(s){throw (new Error(("Walking is unsupported outside of start-walker; all composite schemas must eagerly bind subschema-walkers outside the returned walker.")));
});
/**
* The entry point for creating walkers.  Binds the provided walker to subschema-walker,
* then calls it on the provided schema.  For simple validation, pass walker as sub-walker.
* More sophisticated behavior (coercion, etc), can be achieved by passing a sub-walker
* that wraps walker with additional behavior.
*/
schema.core.start_walker = (function start_walker(sub_walker,schema__$1){var subschema_walker69506 = schema.core.subschema_walker;try{schema.core.subschema_walker = sub_walker;
return (schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1 ? schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1(schema__$1) : schema.core.subschema_walker.call(null,schema__$1));
}finally {schema.core.subschema_walker = subschema_walker69506;
}});
/**
* Compile an efficient checker for schema, which returns nil for valid values and
* error descriptions otherwise.
*/
schema.core.checker = (function checker(schema__$1){return cljs.core.comp.cljs$core$IFn$_invoke$arity$2(schema.utils.error_val,schema.core.start_walker(schema.core.walker,schema__$1));
});
/**
* Return nil if x matches schema; otherwise, returns a value that looks like the
* 'bad' parts of x with ValidationErrors at the leaves describing the failures.
*/
schema.core.check = (function check(schema__$1,x){return schema.core.checker(schema__$1).call(null,x);
});
/**
* Throw an exception if value does not satisfy schema; otherwise, return value.
*/
schema.core.validate = (function validate(schema__$1,value){var temp__4126__auto___69507 = schema.core.check(schema__$1,value);if(cljs.core.truth_(temp__4126__auto___69507))
{var error_69508 = temp__4126__auto___69507;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Value does not match schema: %s",cljs.core.array_seq([cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error_69508], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1336,schema__$1,cljs.core.constant$keyword$1275,value,cljs.core.constant$keyword$1335,error_69508], null));
} else
{}
return value;
});
(schema.core.Schema["function"] = true);
(schema.core.walker["function"] = (function (this$){var class_walker = (function (){var temp__4124__auto__ = schema.utils.class_schema(this$);if(cljs.core.truth_(temp__4124__auto__))
{var more_schema = temp__4124__auto__;return (schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1 ? schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1(more_schema) : schema.core.subschema_walker.call(null,more_schema));
} else
{return cljs.core.identity;
}
})();return ((function (class_walker){
return (function (x){var or__3637__auto__ = ((((x == null)) || (cljs.core.not((function (){var or__3637__auto__ = (this$ === x.constructor);if(or__3637__auto__)
{return or__3637__auto__;
} else
{return x instanceof this$;
}
})())))?schema.utils.error(schema.utils.__GT_ValidationError(this$,x,(new cljs.core.Delay(((function (class_walker){
return (function (){return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.utils.value_name(x)),this$),new cljs.core.Symbol(null,"instance?","instance?",1075939923,null));
});})(class_walker))
,null)),null)):null);if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{var G__69509 = x;return (class_walker.cljs$core$IFn$_invoke$arity$1 ? class_walker.cljs$core$IFn$_invoke$arity$1(G__69509) : class_walker.call(null,G__69509));
}
});
;})(class_walker))
}));
(schema.core.explain["function"] = (function (this$){var temp__4124__auto__ = schema.utils.class_schema(this$);if(cljs.core.truth_(temp__4124__auto__))
{var more_schema = temp__4124__auto__;return schema.core.explain(more_schema);
} else
{return this$;
}
}));

/**
* @constructor
* @param {*} _
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
schema.core.AnythingSchema = (function (_,__meta,__extmap){
this._ = _;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>1){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
schema.core.AnythingSchema.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4232__auto__,k__4233__auto__){var self__ = this;
var this__4232__auto____$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4232__auto____$1,k__4233__auto__,null);
});
schema.core.AnythingSchema.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4234__auto__,k69511,else__4235__auto__){var self__ = this;
var this__4234__auto____$1 = this;var G__69513 = (((k69511 instanceof cljs.core.Keyword))?k69511.fqn:null);switch (G__69513) {
case "_":
return self__._;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k69511,else__4235__auto__);

}
});
schema.core.AnythingSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4246__auto__,writer__4247__auto__,opts__4248__auto__){var self__ = this;
var this__4246__auto____$1 = this;var pr_pair__4249__auto__ = ((function (this__4246__auto____$1){
return (function (keyval__4250__auto__){return cljs.core.pr_sequential_writer(writer__4247__auto__,cljs.core.pr_writer,""," ","",opts__4248__auto__,keyval__4250__auto__);
});})(this__4246__auto____$1))
;return cljs.core.pr_sequential_writer(writer__4247__auto__,pr_pair__4249__auto__,"#schema.core.AnythingSchema{",", ","}",opts__4248__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$1337,self__._],null))], null),self__.__extmap));
});
schema.core.AnythingSchema.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4230__auto__){var self__ = this;
var this__4230__auto____$1 = this;return self__.__meta;
});
schema.core.AnythingSchema.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4226__auto__){var self__ = this;
var this__4226__auto____$1 = this;return (new schema.core.AnythingSchema(self__._,self__.__meta,self__.__extmap,self__.__hash));
});
schema.core.AnythingSchema.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4236__auto__){var self__ = this;
var this__4236__auto____$1 = this;return (1 + cljs.core.count(self__.__extmap));
});
schema.core.AnythingSchema.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4227__auto__){var self__ = this;
var this__4227__auto____$1 = this;var h__4048__auto__ = self__.__hash;if(!((h__4048__auto__ == null)))
{return h__4048__auto__;
} else
{var h__4048__auto____$1 = cljs.core.hash_imap(this__4227__auto____$1);self__.__hash = h__4048__auto____$1;
return h__4048__auto____$1;
}
});
schema.core.AnythingSchema.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4228__auto__,other__4229__auto__){var self__ = this;
var this__4228__auto____$1 = this;if(cljs.core.truth_((function (){var and__3625__auto__ = other__4229__auto__;if(cljs.core.truth_(and__3625__auto__))
{return ((this__4228__auto____$1.constructor === other__4229__auto__.constructor)) && (cljs.core.equiv_map(this__4228__auto____$1,other__4229__auto__));
} else
{return and__3625__auto__;
}
})()))
{return true;
} else
{return false;
}
});
schema.core.AnythingSchema.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4241__auto__,k__4242__auto__){var self__ = this;
var this__4241__auto____$1 = this;if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1337,null], null), null),k__4242__auto__))
{return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4241__auto____$1),self__.__meta),k__4242__auto__);
} else
{return (new schema.core.AnythingSchema(self__._,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4242__auto__)),null));
}
});
schema.core.AnythingSchema.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4239__auto__,k__4240__auto__,G__69510){var self__ = this;
var this__4239__auto____$1 = this;var pred__69514 = cljs.core.keyword_identical_QMARK_;var expr__69515 = k__4240__auto__;if(cljs.core.truth_((function (){var G__69517 = cljs.core.constant$keyword$1337;var G__69518 = expr__69515;return (pred__69514.cljs$core$IFn$_invoke$arity$2 ? pred__69514.cljs$core$IFn$_invoke$arity$2(G__69517,G__69518) : pred__69514.call(null,G__69517,G__69518));
})()))
{return (new schema.core.AnythingSchema(G__69510,self__.__meta,self__.__extmap,null));
} else
{return (new schema.core.AnythingSchema(self__._,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4240__auto__,G__69510),null));
}
});
schema.core.AnythingSchema.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4244__auto__){var self__ = this;
var this__4244__auto____$1 = this;return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$1337,self__._],null))], null),self__.__extmap));
});
schema.core.AnythingSchema.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4231__auto__,G__69510){var self__ = this;
var this__4231__auto____$1 = this;return (new schema.core.AnythingSchema(self__._,G__69510,self__.__extmap,self__.__hash));
});
schema.core.AnythingSchema.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4237__auto__,entry__4238__auto__){var self__ = this;
var this__4237__auto____$1 = this;if(cljs.core.vector_QMARK_(entry__4238__auto__))
{return cljs.core._assoc(this__4237__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4238__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4238__auto__,(1)));
} else
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4237__auto____$1,entry__4238__auto__);
}
});
schema.core.AnythingSchema.prototype.schema$core$Schema$ = true;
schema.core.AnythingSchema.prototype.schema$core$Schema$walker$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core.identity;
});
schema.core.AnythingSchema.prototype.schema$core$Schema$explain$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return new cljs.core.Symbol(null,"Any","Any",1277492269,null);
});
schema.core.AnythingSchema.cljs$lang$type = true;
schema.core.AnythingSchema.cljs$lang$ctorPrSeq = (function (this__4266__auto__){return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/AnythingSchema");
});
schema.core.AnythingSchema.cljs$lang$ctorPrWriter = (function (this__4266__auto__,writer__4267__auto__){return cljs.core._write(writer__4267__auto__,"schema.core/AnythingSchema");
});
schema.core.__GT_AnythingSchema = (function __GT_AnythingSchema(_){return (new schema.core.AnythingSchema(_));
});
schema.core.map__GT_AnythingSchema = (function map__GT_AnythingSchema(G__69512){return (new schema.core.AnythingSchema(cljs.core.constant$keyword$1337.cljs$core$IFn$_invoke$arity$1(G__69512),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__69512,cljs.core.constant$keyword$1337)));
});
/**
* Any value, including nil.
*/
schema.core.Any = (new schema.core.AnythingSchema(null));

/**
* @constructor
* @param {*} v
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
schema.core.EqSchema = (function (v,__meta,__extmap){
this.v = v;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>1){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
schema.core.EqSchema.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4232__auto__,k__4233__auto__){var self__ = this;
var this__4232__auto____$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4232__auto____$1,k__4233__auto__,null);
});
schema.core.EqSchema.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4234__auto__,k69521,else__4235__auto__){var self__ = this;
var this__4234__auto____$1 = this;var G__69523 = (((k69521 instanceof cljs.core.Keyword))?k69521.fqn:null);switch (G__69523) {
case "v":
return self__.v;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k69521,else__4235__auto__);

}
});
schema.core.EqSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4246__auto__,writer__4247__auto__,opts__4248__auto__){var self__ = this;
var this__4246__auto____$1 = this;var pr_pair__4249__auto__ = ((function (this__4246__auto____$1){
return (function (keyval__4250__auto__){return cljs.core.pr_sequential_writer(writer__4247__auto__,cljs.core.pr_writer,""," ","",opts__4248__auto__,keyval__4250__auto__);
});})(this__4246__auto____$1))
;return cljs.core.pr_sequential_writer(writer__4247__auto__,pr_pair__4249__auto__,"#schema.core.EqSchema{",", ","}",opts__4248__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$1338,self__.v],null))], null),self__.__extmap));
});
schema.core.EqSchema.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4230__auto__){var self__ = this;
var this__4230__auto____$1 = this;return self__.__meta;
});
schema.core.EqSchema.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4226__auto__){var self__ = this;
var this__4226__auto____$1 = this;return (new schema.core.EqSchema(self__.v,self__.__meta,self__.__extmap,self__.__hash));
});
schema.core.EqSchema.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4236__auto__){var self__ = this;
var this__4236__auto____$1 = this;return (1 + cljs.core.count(self__.__extmap));
});
schema.core.EqSchema.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4227__auto__){var self__ = this;
var this__4227__auto____$1 = this;var h__4048__auto__ = self__.__hash;if(!((h__4048__auto__ == null)))
{return h__4048__auto__;
} else
{var h__4048__auto____$1 = cljs.core.hash_imap(this__4227__auto____$1);self__.__hash = h__4048__auto____$1;
return h__4048__auto____$1;
}
});
schema.core.EqSchema.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4228__auto__,other__4229__auto__){var self__ = this;
var this__4228__auto____$1 = this;if(cljs.core.truth_((function (){var and__3625__auto__ = other__4229__auto__;if(cljs.core.truth_(and__3625__auto__))
{return ((this__4228__auto____$1.constructor === other__4229__auto__.constructor)) && (cljs.core.equiv_map(this__4228__auto____$1,other__4229__auto__));
} else
{return and__3625__auto__;
}
})()))
{return true;
} else
{return false;
}
});
schema.core.EqSchema.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4241__auto__,k__4242__auto__){var self__ = this;
var this__4241__auto____$1 = this;if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1338,null], null), null),k__4242__auto__))
{return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4241__auto____$1),self__.__meta),k__4242__auto__);
} else
{return (new schema.core.EqSchema(self__.v,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4242__auto__)),null));
}
});
schema.core.EqSchema.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4239__auto__,k__4240__auto__,G__69520){var self__ = this;
var this__4239__auto____$1 = this;var pred__69524 = cljs.core.keyword_identical_QMARK_;var expr__69525 = k__4240__auto__;if(cljs.core.truth_((function (){var G__69527 = cljs.core.constant$keyword$1338;var G__69528 = expr__69525;return (pred__69524.cljs$core$IFn$_invoke$arity$2 ? pred__69524.cljs$core$IFn$_invoke$arity$2(G__69527,G__69528) : pred__69524.call(null,G__69527,G__69528));
})()))
{return (new schema.core.EqSchema(G__69520,self__.__meta,self__.__extmap,null));
} else
{return (new schema.core.EqSchema(self__.v,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4240__auto__,G__69520),null));
}
});
schema.core.EqSchema.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4244__auto__){var self__ = this;
var this__4244__auto____$1 = this;return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$1338,self__.v],null))], null),self__.__extmap));
});
schema.core.EqSchema.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4231__auto__,G__69520){var self__ = this;
var this__4231__auto____$1 = this;return (new schema.core.EqSchema(self__.v,G__69520,self__.__extmap,self__.__hash));
});
schema.core.EqSchema.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4237__auto__,entry__4238__auto__){var self__ = this;
var this__4237__auto____$1 = this;if(cljs.core.vector_QMARK_(entry__4238__auto__))
{return cljs.core._assoc(this__4237__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4238__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4238__auto__,(1)));
} else
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4237__auto____$1,entry__4238__auto__);
}
});
schema.core.EqSchema.prototype.schema$core$Schema$ = true;
schema.core.EqSchema.prototype.schema$core$Schema$walker$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return ((function (this$__$1){
return (function (x){if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.v,x))
{return x;
} else
{return schema.utils.error(schema.utils.__GT_ValidationError(this$__$1,x,(new cljs.core.Delay(((function (this$__$1){
return (function (){return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.utils.value_name(x)),self__.v),new cljs.core.Symbol(null,"=","=",-1501502141,null));
});})(this$__$1))
,null)),null));
}
});
;})(this$__$1))
});
schema.core.EqSchema.prototype.schema$core$Schema$explain$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,self__.v),new cljs.core.Symbol(null,"eq","eq",1021992460,null));
});
schema.core.EqSchema.cljs$lang$type = true;
schema.core.EqSchema.cljs$lang$ctorPrSeq = (function (this__4266__auto__){return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/EqSchema");
});
schema.core.EqSchema.cljs$lang$ctorPrWriter = (function (this__4266__auto__,writer__4267__auto__){return cljs.core._write(writer__4267__auto__,"schema.core/EqSchema");
});
schema.core.__GT_EqSchema = (function __GT_EqSchema(v){return (new schema.core.EqSchema(v));
});
schema.core.map__GT_EqSchema = (function map__GT_EqSchema(G__69522){return (new schema.core.EqSchema(cljs.core.constant$keyword$1338.cljs$core$IFn$_invoke$arity$1(G__69522),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__69522,cljs.core.constant$keyword$1338)));
});
/**
* A value that must be (= v).
*/
schema.core.eq = (function eq(v){return (new schema.core.EqSchema(v));
});

/**
* @constructor
* @param {*} vs
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
schema.core.EnumSchema = (function (vs,__meta,__extmap){
this.vs = vs;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>1){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
schema.core.EnumSchema.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4232__auto__,k__4233__auto__){var self__ = this;
var this__4232__auto____$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4232__auto____$1,k__4233__auto__,null);
});
schema.core.EnumSchema.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4234__auto__,k69531,else__4235__auto__){var self__ = this;
var this__4234__auto____$1 = this;var G__69533 = (((k69531 instanceof cljs.core.Keyword))?k69531.fqn:null);switch (G__69533) {
case "vs":
return self__.vs;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k69531,else__4235__auto__);

}
});
schema.core.EnumSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4246__auto__,writer__4247__auto__,opts__4248__auto__){var self__ = this;
var this__4246__auto____$1 = this;var pr_pair__4249__auto__ = ((function (this__4246__auto____$1){
return (function (keyval__4250__auto__){return cljs.core.pr_sequential_writer(writer__4247__auto__,cljs.core.pr_writer,""," ","",opts__4248__auto__,keyval__4250__auto__);
});})(this__4246__auto____$1))
;return cljs.core.pr_sequential_writer(writer__4247__auto__,pr_pair__4249__auto__,"#schema.core.EnumSchema{",", ","}",opts__4248__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$1339,self__.vs],null))], null),self__.__extmap));
});
schema.core.EnumSchema.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4230__auto__){var self__ = this;
var this__4230__auto____$1 = this;return self__.__meta;
});
schema.core.EnumSchema.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4226__auto__){var self__ = this;
var this__4226__auto____$1 = this;return (new schema.core.EnumSchema(self__.vs,self__.__meta,self__.__extmap,self__.__hash));
});
schema.core.EnumSchema.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4236__auto__){var self__ = this;
var this__4236__auto____$1 = this;return (1 + cljs.core.count(self__.__extmap));
});
schema.core.EnumSchema.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4227__auto__){var self__ = this;
var this__4227__auto____$1 = this;var h__4048__auto__ = self__.__hash;if(!((h__4048__auto__ == null)))
{return h__4048__auto__;
} else
{var h__4048__auto____$1 = cljs.core.hash_imap(this__4227__auto____$1);self__.__hash = h__4048__auto____$1;
return h__4048__auto____$1;
}
});
schema.core.EnumSchema.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4228__auto__,other__4229__auto__){var self__ = this;
var this__4228__auto____$1 = this;if(cljs.core.truth_((function (){var and__3625__auto__ = other__4229__auto__;if(cljs.core.truth_(and__3625__auto__))
{return ((this__4228__auto____$1.constructor === other__4229__auto__.constructor)) && (cljs.core.equiv_map(this__4228__auto____$1,other__4229__auto__));
} else
{return and__3625__auto__;
}
})()))
{return true;
} else
{return false;
}
});
schema.core.EnumSchema.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4241__auto__,k__4242__auto__){var self__ = this;
var this__4241__auto____$1 = this;if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1339,null], null), null),k__4242__auto__))
{return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4241__auto____$1),self__.__meta),k__4242__auto__);
} else
{return (new schema.core.EnumSchema(self__.vs,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4242__auto__)),null));
}
});
schema.core.EnumSchema.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4239__auto__,k__4240__auto__,G__69530){var self__ = this;
var this__4239__auto____$1 = this;var pred__69534 = cljs.core.keyword_identical_QMARK_;var expr__69535 = k__4240__auto__;if(cljs.core.truth_((function (){var G__69537 = cljs.core.constant$keyword$1339;var G__69538 = expr__69535;return (pred__69534.cljs$core$IFn$_invoke$arity$2 ? pred__69534.cljs$core$IFn$_invoke$arity$2(G__69537,G__69538) : pred__69534.call(null,G__69537,G__69538));
})()))
{return (new schema.core.EnumSchema(G__69530,self__.__meta,self__.__extmap,null));
} else
{return (new schema.core.EnumSchema(self__.vs,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4240__auto__,G__69530),null));
}
});
schema.core.EnumSchema.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4244__auto__){var self__ = this;
var this__4244__auto____$1 = this;return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$1339,self__.vs],null))], null),self__.__extmap));
});
schema.core.EnumSchema.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4231__auto__,G__69530){var self__ = this;
var this__4231__auto____$1 = this;return (new schema.core.EnumSchema(self__.vs,G__69530,self__.__extmap,self__.__hash));
});
schema.core.EnumSchema.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4237__auto__,entry__4238__auto__){var self__ = this;
var this__4237__auto____$1 = this;if(cljs.core.vector_QMARK_(entry__4238__auto__))
{return cljs.core._assoc(this__4237__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4238__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4238__auto__,(1)));
} else
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4237__auto____$1,entry__4238__auto__);
}
});
schema.core.EnumSchema.prototype.schema$core$Schema$ = true;
schema.core.EnumSchema.prototype.schema$core$Schema$walker$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return ((function (this$__$1){
return (function (x){if(cljs.core.contains_QMARK_(self__.vs,x))
{return x;
} else
{return schema.utils.error(schema.utils.__GT_ValidationError(this$__$1,x,(new cljs.core.Delay(((function (this$__$1){
return (function (){return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.utils.value_name(x)),self__.vs);
});})(this$__$1))
,null)),null));
}
});
;})(this$__$1))
});
schema.core.EnumSchema.prototype.schema$core$Schema$explain$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core.cons(new cljs.core.Symbol(null,"enum","enum",-975417337,null),self__.vs);
});
schema.core.EnumSchema.cljs$lang$type = true;
schema.core.EnumSchema.cljs$lang$ctorPrSeq = (function (this__4266__auto__){return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/EnumSchema");
});
schema.core.EnumSchema.cljs$lang$ctorPrWriter = (function (this__4266__auto__,writer__4267__auto__){return cljs.core._write(writer__4267__auto__,"schema.core/EnumSchema");
});
schema.core.__GT_EnumSchema = (function __GT_EnumSchema(vs){return (new schema.core.EnumSchema(vs));
});
schema.core.map__GT_EnumSchema = (function map__GT_EnumSchema(G__69532){return (new schema.core.EnumSchema(cljs.core.constant$keyword$1339.cljs$core$IFn$_invoke$arity$1(G__69532),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__69532,cljs.core.constant$keyword$1339)));
});
/**
* A value that must be = to some element of vs.
* @param {...*} var_args
*/
schema.core.enum$ = (function() { 
var enum$__delegate = function (vs){return (new schema.core.EnumSchema(cljs.core.set(vs)));
};
var enum$ = function (var_args){
var vs = null;if (arguments.length > 0) {
  vs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return enum$__delegate.call(this,vs);};
enum$.cljs$lang$maxFixedArity = 0;
enum$.cljs$lang$applyTo = (function (arglist__69540){
var vs = cljs.core.seq(arglist__69540);
return enum$__delegate(vs);
});
enum$.cljs$core$IFn$_invoke$arity$variadic = enum$__delegate;
return enum$;
})()
;

/**
* @constructor
* @param {*} p_QMARK_
* @param {*} pred_name
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
schema.core.Predicate = (function (p_QMARK_,pred_name,__meta,__extmap){
this.p_QMARK_ = p_QMARK_;
this.pred_name = pred_name;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>2){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
schema.core.Predicate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4232__auto__,k__4233__auto__){var self__ = this;
var this__4232__auto____$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4232__auto____$1,k__4233__auto__,null);
});
schema.core.Predicate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4234__auto__,k69542,else__4235__auto__){var self__ = this;
var this__4234__auto____$1 = this;var G__69544 = (((k69542 instanceof cljs.core.Keyword))?k69542.fqn:null);switch (G__69544) {
case "pred-name":
return self__.pred_name;

break;
case "p?":
return self__.p_QMARK_;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k69542,else__4235__auto__);

}
});
schema.core.Predicate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4246__auto__,writer__4247__auto__,opts__4248__auto__){var self__ = this;
var this__4246__auto____$1 = this;var pr_pair__4249__auto__ = ((function (this__4246__auto____$1){
return (function (keyval__4250__auto__){return cljs.core.pr_sequential_writer(writer__4247__auto__,cljs.core.pr_writer,""," ","",opts__4248__auto__,keyval__4250__auto__);
});})(this__4246__auto____$1))
;return cljs.core.pr_sequential_writer(writer__4247__auto__,pr_pair__4249__auto__,"#schema.core.Predicate{",", ","}",opts__4248__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$1340,self__.p_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$1341,self__.pred_name],null))], null),self__.__extmap));
});
schema.core.Predicate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4230__auto__){var self__ = this;
var this__4230__auto____$1 = this;return self__.__meta;
});
schema.core.Predicate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4226__auto__){var self__ = this;
var this__4226__auto____$1 = this;return (new schema.core.Predicate(self__.p_QMARK_,self__.pred_name,self__.__meta,self__.__extmap,self__.__hash));
});
schema.core.Predicate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4236__auto__){var self__ = this;
var this__4236__auto____$1 = this;return (2 + cljs.core.count(self__.__extmap));
});
schema.core.Predicate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4227__auto__){var self__ = this;
var this__4227__auto____$1 = this;var h__4048__auto__ = self__.__hash;if(!((h__4048__auto__ == null)))
{return h__4048__auto__;
} else
{var h__4048__auto____$1 = cljs.core.hash_imap(this__4227__auto____$1);self__.__hash = h__4048__auto____$1;
return h__4048__auto____$1;
}
});
schema.core.Predicate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4228__auto__,other__4229__auto__){var self__ = this;
var this__4228__auto____$1 = this;if(cljs.core.truth_((function (){var and__3625__auto__ = other__4229__auto__;if(cljs.core.truth_(and__3625__auto__))
{return ((this__4228__auto____$1.constructor === other__4229__auto__.constructor)) && (cljs.core.equiv_map(this__4228__auto____$1,other__4229__auto__));
} else
{return and__3625__auto__;
}
})()))
{return true;
} else
{return false;
}
});
schema.core.Predicate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4241__auto__,k__4242__auto__){var self__ = this;
var this__4241__auto____$1 = this;if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1341,null,cljs.core.constant$keyword$1340,null], null), null),k__4242__auto__))
{return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4241__auto____$1),self__.__meta),k__4242__auto__);
} else
{return (new schema.core.Predicate(self__.p_QMARK_,self__.pred_name,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4242__auto__)),null));
}
});
schema.core.Predicate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4239__auto__,k__4240__auto__,G__69541){var self__ = this;
var this__4239__auto____$1 = this;var pred__69545 = cljs.core.keyword_identical_QMARK_;var expr__69546 = k__4240__auto__;if(cljs.core.truth_((function (){var G__69548 = cljs.core.constant$keyword$1340;var G__69549 = expr__69546;return (pred__69545.cljs$core$IFn$_invoke$arity$2 ? pred__69545.cljs$core$IFn$_invoke$arity$2(G__69548,G__69549) : pred__69545.call(null,G__69548,G__69549));
})()))
{return (new schema.core.Predicate(G__69541,self__.pred_name,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__69550 = cljs.core.constant$keyword$1341;var G__69551 = expr__69546;return (pred__69545.cljs$core$IFn$_invoke$arity$2 ? pred__69545.cljs$core$IFn$_invoke$arity$2(G__69550,G__69551) : pred__69545.call(null,G__69550,G__69551));
})()))
{return (new schema.core.Predicate(self__.p_QMARK_,G__69541,self__.__meta,self__.__extmap,null));
} else
{return (new schema.core.Predicate(self__.p_QMARK_,self__.pred_name,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4240__auto__,G__69541),null));
}
}
});
schema.core.Predicate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4244__auto__){var self__ = this;
var this__4244__auto____$1 = this;return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$1340,self__.p_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$1341,self__.pred_name],null))], null),self__.__extmap));
});
schema.core.Predicate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4231__auto__,G__69541){var self__ = this;
var this__4231__auto____$1 = this;return (new schema.core.Predicate(self__.p_QMARK_,self__.pred_name,G__69541,self__.__extmap,self__.__hash));
});
schema.core.Predicate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4237__auto__,entry__4238__auto__){var self__ = this;
var this__4237__auto____$1 = this;if(cljs.core.vector_QMARK_(entry__4238__auto__))
{return cljs.core._assoc(this__4237__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4238__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4238__auto__,(1)));
} else
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4237__auto____$1,entry__4238__auto__);
}
});
schema.core.Predicate.prototype.schema$core$Schema$ = true;
schema.core.Predicate.prototype.schema$core$Schema$walker$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return ((function (this$__$1){
return (function (x){var temp__4124__auto__ = (function (){try{if(cljs.core.truth_((function (){var G__69553 = x;return (self__.p_QMARK_.cljs$core$IFn$_invoke$arity$1 ? self__.p_QMARK_.cljs$core$IFn$_invoke$arity$1(G__69553) : self__.p_QMARK_.call(null,G__69553));
})()))
{return null;
} else
{return new cljs.core.Symbol(null,"not","not",1044554643,null);
}
}catch (e69552){if((e69552 instanceof Object))
{var e = e69552;return new cljs.core.Symbol(null,"throws?","throws?",789734533,null);
} else
{throw e69552;

}
}})();if(cljs.core.truth_(temp__4124__auto__))
{var reason = temp__4124__auto__;return schema.utils.error(schema.utils.__GT_ValidationError(this$__$1,x,(new cljs.core.Delay(((function (reason,temp__4124__auto__,this$__$1){
return (function (){return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.utils.value_name(x)),self__.pred_name);
});})(reason,temp__4124__auto__,this$__$1))
,null)),reason));
} else
{return x;
}
});
;})(this$__$1))
});
schema.core.Predicate.prototype.schema$core$Schema$explain$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.p_QMARK_,cljs.core.integer_QMARK_))
{return new cljs.core.Symbol(null,"Int","Int",-2116888740,null);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.p_QMARK_,cljs.core.keyword_QMARK_))
{return new cljs.core.Symbol(null,"Keyword","Keyword",-850065993,null);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.p_QMARK_,cljs.core.symbol_QMARK_))
{return new cljs.core.Symbol(null,"Symbol","Symbol",716452869,null);
} else
{return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,self__.pred_name),new cljs.core.Symbol(null,"pred","pred",-727012372,null));

}
}
}
});
schema.core.Predicate.cljs$lang$type = true;
schema.core.Predicate.cljs$lang$ctorPrSeq = (function (this__4266__auto__){return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/Predicate");
});
schema.core.Predicate.cljs$lang$ctorPrWriter = (function (this__4266__auto__,writer__4267__auto__){return cljs.core._write(writer__4267__auto__,"schema.core/Predicate");
});
schema.core.__GT_Predicate = (function __GT_Predicate(p_QMARK_,pred_name){return (new schema.core.Predicate(p_QMARK_,pred_name));
});
schema.core.map__GT_Predicate = (function map__GT_Predicate(G__69543){return (new schema.core.Predicate(cljs.core.constant$keyword$1340.cljs$core$IFn$_invoke$arity$1(G__69543),cljs.core.constant$keyword$1341.cljs$core$IFn$_invoke$arity$1(G__69543),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__69543,cljs.core.constant$keyword$1340,cljs.core.array_seq([cljs.core.constant$keyword$1341], 0))));
});
/**
* A value for which p? returns true (and does not throw).
* Optional pred-name can be passed for nicer validation errors.
*/
schema.core.pred = (function() {
var pred = null;
var pred__1 = (function (p_QMARK_){return pred.cljs$core$IFn$_invoke$arity$2(p_QMARK_,p_QMARK_);
});
var pred__2 = (function (p_QMARK_,pred_name){if(cljs.core.ifn_QMARK_(p_QMARK_))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Not a function: %s",cljs.core.array_seq([p_QMARK_], 0))));
}
return (new schema.core.Predicate(p_QMARK_,pred_name));
});
pred = function(p_QMARK_,pred_name){
switch(arguments.length){
case 1:
return pred__1.call(this,p_QMARK_);
case 2:
return pred__2.call(this,p_QMARK_,pred_name);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pred.cljs$core$IFn$_invoke$arity$1 = pred__1;
pred.cljs$core$IFn$_invoke$arity$2 = pred__2;
return pred;
})()
;
schema.core.protocol_name = (function protocol_name(protocol){return cljs.core.constant$keyword$1342.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(protocol));
});

/**
* @constructor
* @param {*} p
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
schema.core.Protocol = (function (p,__meta,__extmap){
this.p = p;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>1){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
schema.core.Protocol.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4232__auto__,k__4233__auto__){var self__ = this;
var this__4232__auto____$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4232__auto____$1,k__4233__auto__,null);
});
schema.core.Protocol.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4234__auto__,k69558,else__4235__auto__){var self__ = this;
var this__4234__auto____$1 = this;var G__69560 = (((k69558 instanceof cljs.core.Keyword))?k69558.fqn:null);switch (G__69560) {
case "p":
return self__.p;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k69558,else__4235__auto__);

}
});
schema.core.Protocol.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4246__auto__,writer__4247__auto__,opts__4248__auto__){var self__ = this;
var this__4246__auto____$1 = this;var pr_pair__4249__auto__ = ((function (this__4246__auto____$1){
return (function (keyval__4250__auto__){return cljs.core.pr_sequential_writer(writer__4247__auto__,cljs.core.pr_writer,""," ","",opts__4248__auto__,keyval__4250__auto__);
});})(this__4246__auto____$1))
;return cljs.core.pr_sequential_writer(writer__4247__auto__,pr_pair__4249__auto__,"#schema.core.Protocol{",", ","}",opts__4248__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$1343,self__.p],null))], null),self__.__extmap));
});
schema.core.Protocol.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4230__auto__){var self__ = this;
var this__4230__auto____$1 = this;return self__.__meta;
});
schema.core.Protocol.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4226__auto__){var self__ = this;
var this__4226__auto____$1 = this;return (new schema.core.Protocol(self__.p,self__.__meta,self__.__extmap,self__.__hash));
});
schema.core.Protocol.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4236__auto__){var self__ = this;
var this__4236__auto____$1 = this;return (1 + cljs.core.count(self__.__extmap));
});
schema.core.Protocol.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4227__auto__){var self__ = this;
var this__4227__auto____$1 = this;var h__4048__auto__ = self__.__hash;if(!((h__4048__auto__ == null)))
{return h__4048__auto__;
} else
{var h__4048__auto____$1 = cljs.core.hash_imap(this__4227__auto____$1);self__.__hash = h__4048__auto____$1;
return h__4048__auto____$1;
}
});
schema.core.Protocol.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4228__auto__,other__4229__auto__){var self__ = this;
var this__4228__auto____$1 = this;if(cljs.core.truth_((function (){var and__3625__auto__ = other__4229__auto__;if(cljs.core.truth_(and__3625__auto__))
{return ((this__4228__auto____$1.constructor === other__4229__auto__.constructor)) && (cljs.core.equiv_map(this__4228__auto____$1,other__4229__auto__));
} else
{return and__3625__auto__;
}
})()))
{return true;
} else
{return false;
}
});
schema.core.Protocol.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4241__auto__,k__4242__auto__){var self__ = this;
var this__4241__auto____$1 = this;if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1343,null], null), null),k__4242__auto__))
{return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4241__auto____$1),self__.__meta),k__4242__auto__);
} else
{return (new schema.core.Protocol(self__.p,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4242__auto__)),null));
}
});
schema.core.Protocol.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4239__auto__,k__4240__auto__,G__69557){var self__ = this;
var this__4239__auto____$1 = this;var pred__69561 = cljs.core.keyword_identical_QMARK_;var expr__69562 = k__4240__auto__;if(cljs.core.truth_((function (){var G__69564 = cljs.core.constant$keyword$1343;var G__69565 = expr__69562;return (pred__69561.cljs$core$IFn$_invoke$arity$2 ? pred__69561.cljs$core$IFn$_invoke$arity$2(G__69564,G__69565) : pred__69561.call(null,G__69564,G__69565));
})()))
{return (new schema.core.Protocol(G__69557,self__.__meta,self__.__extmap,null));
} else
{return (new schema.core.Protocol(self__.p,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4240__auto__,G__69557),null));
}
});
schema.core.Protocol.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4244__auto__){var self__ = this;
var this__4244__auto____$1 = this;return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$1343,self__.p],null))], null),self__.__extmap));
});
schema.core.Protocol.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4231__auto__,G__69557){var self__ = this;
var this__4231__auto____$1 = this;return (new schema.core.Protocol(self__.p,G__69557,self__.__extmap,self__.__hash));
});
schema.core.Protocol.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4237__auto__,entry__4238__auto__){var self__ = this;
var this__4237__auto____$1 = this;if(cljs.core.vector_QMARK_(entry__4238__auto__))
{return cljs.core._assoc(this__4237__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4238__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4238__auto__,(1)));
} else
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4237__auto____$1,entry__4238__auto__);
}
});
schema.core.Protocol.prototype.schema$core$Schema$ = true;
schema.core.Protocol.prototype.schema$core$Schema$walker$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return ((function (this$__$1){
return (function (x){if(cljs.core.truth_(cljs.core.constant$keyword$1344.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(this$__$1)).call(null,x)))
{return x;
} else
{return schema.utils.error(schema.utils.__GT_ValidationError(this$__$1,x,(new cljs.core.Delay(((function (this$__$1){
return (function (){return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.utils.value_name(x)),schema.core.protocol_name(this$__$1)),new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null));
});})(this$__$1))
,null)),null));
}
});
;})(this$__$1))
});
schema.core.Protocol.prototype.schema$core$Schema$explain$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.core.protocol_name(this$__$1)),new cljs.core.Symbol(null,"protocol","protocol",-2001965651,null));
});
schema.core.Protocol.cljs$lang$type = true;
schema.core.Protocol.cljs$lang$ctorPrSeq = (function (this__4266__auto__){return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/Protocol");
});
schema.core.Protocol.cljs$lang$ctorPrWriter = (function (this__4266__auto__,writer__4267__auto__){return cljs.core._write(writer__4267__auto__,"schema.core/Protocol");
});
schema.core.__GT_Protocol = (function __GT_Protocol(p){return (new schema.core.Protocol(p));
});
schema.core.map__GT_Protocol = (function map__GT_Protocol(G__69559){return (new schema.core.Protocol(cljs.core.constant$keyword$1343.cljs$core$IFn$_invoke$arity$1(G__69559),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__69559,cljs.core.constant$keyword$1343)));
});
RegExp.prototype.schema$core$Schema$ = true;
RegExp.prototype.schema$core$Schema$walker$arity$1 = (function (this$){var this$__$1 = this;return ((function (this$__$1){
return (function (x){if(!(typeof x === 'string'))
{return schema.utils.error(schema.utils.__GT_ValidationError(this$__$1,x,(new cljs.core.Delay(((function (this$__$1){
return (function (){return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.utils.value_name(x)),new cljs.core.Symbol(null,"string?","string?",-1129175764,null));
});})(this$__$1))
,null)),null));
} else
{if(cljs.core.not(cljs.core.re_find(this$__$1,x)))
{return schema.utils.error(schema.utils.__GT_ValidationError(this$__$1,x,(new cljs.core.Delay(((function (this$__$1){
return (function (){return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.utils.value_name(x)),schema.core.explain(this$__$1)),new cljs.core.Symbol(null,"re-find","re-find",1143444147,null));
});})(this$__$1))
,null)),null));
} else
{return x;

}
}
});
;})(this$__$1))
});
RegExp.prototype.schema$core$Schema$explain$arity$1 = (function (this$){var this$__$1 = this;return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(("#\""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$__$1)).slice((1),(-1)))+"\""));
});
/**
* Satisfied only by String.
* Is (pred string?) and not js/String in cljs because of keywords.
*/
schema.core.Str = schema.core.pred.cljs$core$IFn$_invoke$arity$1(cljs.core.string_QMARK_);
/**
* Boolean true or false
*/
schema.core.Bool = Boolean;
/**
* Any number
*/
schema.core.Num = Number;
/**
* Any integral number
*/
schema.core.Int = schema.core.pred.cljs$core$IFn$_invoke$arity$2(cljs.core.integer_QMARK_,new cljs.core.Symbol(null,"integer?","integer?",1303791671,null));
/**
* A keyword
*/
schema.core.Keyword = schema.core.pred.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword_QMARK_,new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null));
/**
* A symbol
*/
schema.core.Symbol = schema.core.pred.cljs$core$IFn$_invoke$arity$2(cljs.core.symbol_QMARK_,new cljs.core.Symbol(null,"symbol?","symbol?",1820680511,null));
/**
* A regular expression
*/
schema.core.Regex = RegExp;
/**
* The local representation of #inst ...
*/
schema.core.Inst = Date;
/**
* The local representation of #uuid ...
*/
schema.core.Uuid = cljs.core.UUID;

/**
* @constructor
* @param {*} schema
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
schema.core.Maybe = (function (schema,__meta,__extmap){
this.schema = schema;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>1){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
schema.core.Maybe.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4232__auto__,k__4233__auto__){var self__ = this;
var this__4232__auto____$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4232__auto____$1,k__4233__auto__,null);
});
schema.core.Maybe.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4234__auto__,k69568,else__4235__auto__){var self__ = this;
var this__4234__auto____$1 = this;var G__69570 = (((k69568 instanceof cljs.core.Keyword))?k69568.fqn:null);switch (G__69570) {
case "schema":
return self__.schema;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k69568,else__4235__auto__);

}
});
schema.core.Maybe.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4246__auto__,writer__4247__auto__,opts__4248__auto__){var self__ = this;
var this__4246__auto____$1 = this;var pr_pair__4249__auto__ = ((function (this__4246__auto____$1){
return (function (keyval__4250__auto__){return cljs.core.pr_sequential_writer(writer__4247__auto__,cljs.core.pr_writer,""," ","",opts__4248__auto__,keyval__4250__auto__);
});})(this__4246__auto____$1))
;return cljs.core.pr_sequential_writer(writer__4247__auto__,pr_pair__4249__auto__,"#schema.core.Maybe{",", ","}",opts__4248__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$1336,self__.schema],null))], null),self__.__extmap));
});
schema.core.Maybe.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4230__auto__){var self__ = this;
var this__4230__auto____$1 = this;return self__.__meta;
});
schema.core.Maybe.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4226__auto__){var self__ = this;
var this__4226__auto____$1 = this;return (new schema.core.Maybe(self__.schema,self__.__meta,self__.__extmap,self__.__hash));
});
schema.core.Maybe.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4236__auto__){var self__ = this;
var this__4236__auto____$1 = this;return (1 + cljs.core.count(self__.__extmap));
});
schema.core.Maybe.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4227__auto__){var self__ = this;
var this__4227__auto____$1 = this;var h__4048__auto__ = self__.__hash;if(!((h__4048__auto__ == null)))
{return h__4048__auto__;
} else
{var h__4048__auto____$1 = cljs.core.hash_imap(this__4227__auto____$1);self__.__hash = h__4048__auto____$1;
return h__4048__auto____$1;
}
});
schema.core.Maybe.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4228__auto__,other__4229__auto__){var self__ = this;
var this__4228__auto____$1 = this;if(cljs.core.truth_((function (){var and__3625__auto__ = other__4229__auto__;if(cljs.core.truth_(and__3625__auto__))
{return ((this__4228__auto____$1.constructor === other__4229__auto__.constructor)) && (cljs.core.equiv_map(this__4228__auto____$1,other__4229__auto__));
} else
{return and__3625__auto__;
}
})()))
{return true;
} else
{return false;
}
});
schema.core.Maybe.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4241__auto__,k__4242__auto__){var self__ = this;
var this__4241__auto____$1 = this;if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1336,null], null), null),k__4242__auto__))
{return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4241__auto____$1),self__.__meta),k__4242__auto__);
} else
{return (new schema.core.Maybe(self__.schema,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4242__auto__)),null));
}
});
schema.core.Maybe.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4239__auto__,k__4240__auto__,G__69567){var self__ = this;
var this__4239__auto____$1 = this;var pred__69571 = cljs.core.keyword_identical_QMARK_;var expr__69572 = k__4240__auto__;if(cljs.core.truth_((function (){var G__69574 = cljs.core.constant$keyword$1336;var G__69575 = expr__69572;return (pred__69571.cljs$core$IFn$_invoke$arity$2 ? pred__69571.cljs$core$IFn$_invoke$arity$2(G__69574,G__69575) : pred__69571.call(null,G__69574,G__69575));
})()))
{return (new schema.core.Maybe(G__69567,self__.__meta,self__.__extmap,null));
} else
{return (new schema.core.Maybe(self__.schema,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4240__auto__,G__69567),null));
}
});
schema.core.Maybe.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4244__auto__){var self__ = this;
var this__4244__auto____$1 = this;return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$1336,self__.schema],null))], null),self__.__extmap));
});
schema.core.Maybe.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4231__auto__,G__69567){var self__ = this;
var this__4231__auto____$1 = this;return (new schema.core.Maybe(self__.schema,G__69567,self__.__extmap,self__.__hash));
});
schema.core.Maybe.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4237__auto__,entry__4238__auto__){var self__ = this;
var this__4237__auto____$1 = this;if(cljs.core.vector_QMARK_(entry__4238__auto__))
{return cljs.core._assoc(this__4237__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4238__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4238__auto__,(1)));
} else
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4237__auto____$1,entry__4238__auto__);
}
});
schema.core.Maybe.prototype.schema$core$Schema$ = true;
schema.core.Maybe.prototype.schema$core$Schema$walker$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var sub_walker = (schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1 ? schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1(self__.schema) : schema.core.subschema_walker.call(null,self__.schema));return ((function (sub_walker,this$__$1){
return (function (x){if((x == null))
{return null;
} else
{var G__69576 = x;return (sub_walker.cljs$core$IFn$_invoke$arity$1 ? sub_walker.cljs$core$IFn$_invoke$arity$1(G__69576) : sub_walker.call(null,G__69576));
}
});
;})(sub_walker,this$__$1))
});
schema.core.Maybe.prototype.schema$core$Schema$explain$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.core.explain(self__.schema)),new cljs.core.Symbol(null,"maybe","maybe",1326133967,null));
});
schema.core.Maybe.cljs$lang$type = true;
schema.core.Maybe.cljs$lang$ctorPrSeq = (function (this__4266__auto__){return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/Maybe");
});
schema.core.Maybe.cljs$lang$ctorPrWriter = (function (this__4266__auto__,writer__4267__auto__){return cljs.core._write(writer__4267__auto__,"schema.core/Maybe");
});
schema.core.__GT_Maybe = (function __GT_Maybe(schema__$1){return (new schema.core.Maybe(schema__$1));
});
schema.core.map__GT_Maybe = (function map__GT_Maybe(G__69569){return (new schema.core.Maybe(cljs.core.constant$keyword$1336.cljs$core$IFn$_invoke$arity$1(G__69569),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__69569,cljs.core.constant$keyword$1336)));
});
/**
* A value that must either be nil or satisfy schema
*/
schema.core.maybe = (function maybe(schema__$1){return (new schema.core.Maybe(schema__$1));
});

/**
* @constructor
* @param {*} schema
* @param {*} name
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
schema.core.NamedSchema = (function (schema,name,__meta,__extmap){
this.schema = schema;
this.name = name;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>2){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
schema.core.NamedSchema.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4232__auto__,k__4233__auto__){var self__ = this;
var this__4232__auto____$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4232__auto____$1,k__4233__auto__,null);
});
schema.core.NamedSchema.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4234__auto__,k69579,else__4235__auto__){var self__ = this;
var this__4234__auto____$1 = this;var G__69581 = (((k69579 instanceof cljs.core.Keyword))?k69579.fqn:null);switch (G__69581) {
case "name":
return self__.name;

break;
case "schema":
return self__.schema;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k69579,else__4235__auto__);

}
});
schema.core.NamedSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4246__auto__,writer__4247__auto__,opts__4248__auto__){var self__ = this;
var this__4246__auto____$1 = this;var pr_pair__4249__auto__ = ((function (this__4246__auto____$1){
return (function (keyval__4250__auto__){return cljs.core.pr_sequential_writer(writer__4247__auto__,cljs.core.pr_writer,""," ","",opts__4248__auto__,keyval__4250__auto__);
});})(this__4246__auto____$1))
;return cljs.core.pr_sequential_writer(writer__4247__auto__,pr_pair__4249__auto__,"#schema.core.NamedSchema{",", ","}",opts__4248__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$1336,self__.schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$1274,self__.name],null))], null),self__.__extmap));
});
schema.core.NamedSchema.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4230__auto__){var self__ = this;
var this__4230__auto____$1 = this;return self__.__meta;
});
schema.core.NamedSchema.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4226__auto__){var self__ = this;
var this__4226__auto____$1 = this;return (new schema.core.NamedSchema(self__.schema,self__.name,self__.__meta,self__.__extmap,self__.__hash));
});
schema.core.NamedSchema.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4236__auto__){var self__ = this;
var this__4236__auto____$1 = this;return (2 + cljs.core.count(self__.__extmap));
});
schema.core.NamedSchema.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4227__auto__){var self__ = this;
var this__4227__auto____$1 = this;var h__4048__auto__ = self__.__hash;if(!((h__4048__auto__ == null)))
{return h__4048__auto__;
} else
{var h__4048__auto____$1 = cljs.core.hash_imap(this__4227__auto____$1);self__.__hash = h__4048__auto____$1;
return h__4048__auto____$1;
}
});
schema.core.NamedSchema.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4228__auto__,other__4229__auto__){var self__ = this;
var this__4228__auto____$1 = this;if(cljs.core.truth_((function (){var and__3625__auto__ = other__4229__auto__;if(cljs.core.truth_(and__3625__auto__))
{return ((this__4228__auto____$1.constructor === other__4229__auto__.constructor)) && (cljs.core.equiv_map(this__4228__auto____$1,other__4229__auto__));
} else
{return and__3625__auto__;
}
})()))
{return true;
} else
{return false;
}
});
schema.core.NamedSchema.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4241__auto__,k__4242__auto__){var self__ = this;
var this__4241__auto____$1 = this;if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1336,null,cljs.core.constant$keyword$1274,null], null), null),k__4242__auto__))
{return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4241__auto____$1),self__.__meta),k__4242__auto__);
} else
{return (new schema.core.NamedSchema(self__.schema,self__.name,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4242__auto__)),null));
}
});
schema.core.NamedSchema.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4239__auto__,k__4240__auto__,G__69578){var self__ = this;
var this__4239__auto____$1 = this;var pred__69582 = cljs.core.keyword_identical_QMARK_;var expr__69583 = k__4240__auto__;if(cljs.core.truth_((function (){var G__69585 = cljs.core.constant$keyword$1336;var G__69586 = expr__69583;return (pred__69582.cljs$core$IFn$_invoke$arity$2 ? pred__69582.cljs$core$IFn$_invoke$arity$2(G__69585,G__69586) : pred__69582.call(null,G__69585,G__69586));
})()))
{return (new schema.core.NamedSchema(G__69578,self__.name,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__69587 = cljs.core.constant$keyword$1274;var G__69588 = expr__69583;return (pred__69582.cljs$core$IFn$_invoke$arity$2 ? pred__69582.cljs$core$IFn$_invoke$arity$2(G__69587,G__69588) : pred__69582.call(null,G__69587,G__69588));
})()))
{return (new schema.core.NamedSchema(self__.schema,G__69578,self__.__meta,self__.__extmap,null));
} else
{return (new schema.core.NamedSchema(self__.schema,self__.name,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4240__auto__,G__69578),null));
}
}
});
schema.core.NamedSchema.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4244__auto__){var self__ = this;
var this__4244__auto____$1 = this;return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$1336,self__.schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$1274,self__.name],null))], null),self__.__extmap));
});
schema.core.NamedSchema.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4231__auto__,G__69578){var self__ = this;
var this__4231__auto____$1 = this;return (new schema.core.NamedSchema(self__.schema,self__.name,G__69578,self__.__extmap,self__.__hash));
});
schema.core.NamedSchema.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4237__auto__,entry__4238__auto__){var self__ = this;
var this__4237__auto____$1 = this;if(cljs.core.vector_QMARK_(entry__4238__auto__))
{return cljs.core._assoc(this__4237__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4238__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4238__auto__,(1)));
} else
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4237__auto____$1,entry__4238__auto__);
}
});
schema.core.NamedSchema.prototype.schema$core$Schema$ = true;
schema.core.NamedSchema.prototype.schema$core$Schema$walker$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var sub_walker = (schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1 ? schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1(self__.schema) : schema.core.subschema_walker.call(null,self__.schema));return ((function (sub_walker,this$__$1){
return (function (x){return schema.utils.wrap_error_name(self__.name,(function (){var G__69589 = x;return (sub_walker.cljs$core$IFn$_invoke$arity$1 ? sub_walker.cljs$core$IFn$_invoke$arity$1(G__69589) : sub_walker.call(null,G__69589));
})());
});
;})(sub_walker,this$__$1))
});
schema.core.NamedSchema.prototype.schema$core$Schema$explain$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,self__.name),schema.core.explain(self__.schema)),new cljs.core.Symbol(null,"named","named",1218138048,null));
});
schema.core.NamedSchema.cljs$lang$type = true;
schema.core.NamedSchema.cljs$lang$ctorPrSeq = (function (this__4266__auto__){return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/NamedSchema");
});
schema.core.NamedSchema.cljs$lang$ctorPrWriter = (function (this__4266__auto__,writer__4267__auto__){return cljs.core._write(writer__4267__auto__,"schema.core/NamedSchema");
});
schema.core.__GT_NamedSchema = (function __GT_NamedSchema(schema__$1,name){return (new schema.core.NamedSchema(schema__$1,name));
});
schema.core.map__GT_NamedSchema = (function map__GT_NamedSchema(G__69580){return (new schema.core.NamedSchema(cljs.core.constant$keyword$1336.cljs$core$IFn$_invoke$arity$1(G__69580),cljs.core.constant$keyword$1274.cljs$core$IFn$_invoke$arity$1(G__69580),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__69580,cljs.core.constant$keyword$1336,cljs.core.array_seq([cljs.core.constant$keyword$1274], 0))));
});
/**
* A value that must satisfy schema, and has a name for documentation purposes.
*/
schema.core.named = (function named(schema__$1,name){return (new schema.core.NamedSchema(schema__$1,name));
});

/**
* @constructor
* @param {*} schemas
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
schema.core.Either = (function (schemas,__meta,__extmap){
this.schemas = schemas;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>1){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
schema.core.Either.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4232__auto__,k__4233__auto__){var self__ = this;
var this__4232__auto____$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4232__auto____$1,k__4233__auto__,null);
});
schema.core.Either.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4234__auto__,k69592,else__4235__auto__){var self__ = this;
var this__4234__auto____$1 = this;var G__69594 = (((k69592 instanceof cljs.core.Keyword))?k69592.fqn:null);switch (G__69594) {
case "schemas":
return self__.schemas;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k69592,else__4235__auto__);

}
});
schema.core.Either.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4246__auto__,writer__4247__auto__,opts__4248__auto__){var self__ = this;
var this__4246__auto____$1 = this;var pr_pair__4249__auto__ = ((function (this__4246__auto____$1){
return (function (keyval__4250__auto__){return cljs.core.pr_sequential_writer(writer__4247__auto__,cljs.core.pr_writer,""," ","",opts__4248__auto__,keyval__4250__auto__);
});})(this__4246__auto____$1))
;return cljs.core.pr_sequential_writer(writer__4247__auto__,pr_pair__4249__auto__,"#schema.core.Either{",", ","}",opts__4248__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$1345,self__.schemas],null))], null),self__.__extmap));
});
schema.core.Either.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4230__auto__){var self__ = this;
var this__4230__auto____$1 = this;return self__.__meta;
});
schema.core.Either.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4226__auto__){var self__ = this;
var this__4226__auto____$1 = this;return (new schema.core.Either(self__.schemas,self__.__meta,self__.__extmap,self__.__hash));
});
schema.core.Either.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4236__auto__){var self__ = this;
var this__4236__auto____$1 = this;return (1 + cljs.core.count(self__.__extmap));
});
schema.core.Either.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4227__auto__){var self__ = this;
var this__4227__auto____$1 = this;var h__4048__auto__ = self__.__hash;if(!((h__4048__auto__ == null)))
{return h__4048__auto__;
} else
{var h__4048__auto____$1 = cljs.core.hash_imap(this__4227__auto____$1);self__.__hash = h__4048__auto____$1;
return h__4048__auto____$1;
}
});
schema.core.Either.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4228__auto__,other__4229__auto__){var self__ = this;
var this__4228__auto____$1 = this;if(cljs.core.truth_((function (){var and__3625__auto__ = other__4229__auto__;if(cljs.core.truth_(and__3625__auto__))
{return ((this__4228__auto____$1.constructor === other__4229__auto__.constructor)) && (cljs.core.equiv_map(this__4228__auto____$1,other__4229__auto__));
} else
{return and__3625__auto__;
}
})()))
{return true;
} else
{return false;
}
});
schema.core.Either.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4241__auto__,k__4242__auto__){var self__ = this;
var this__4241__auto____$1 = this;if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1345,null], null), null),k__4242__auto__))
{return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4241__auto____$1),self__.__meta),k__4242__auto__);
} else
{return (new schema.core.Either(self__.schemas,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4242__auto__)),null));
}
});
schema.core.Either.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4239__auto__,k__4240__auto__,G__69591){var self__ = this;
var this__4239__auto____$1 = this;var pred__69595 = cljs.core.keyword_identical_QMARK_;var expr__69596 = k__4240__auto__;if(cljs.core.truth_((function (){var G__69598 = cljs.core.constant$keyword$1345;var G__69599 = expr__69596;return (pred__69595.cljs$core$IFn$_invoke$arity$2 ? pred__69595.cljs$core$IFn$_invoke$arity$2(G__69598,G__69599) : pred__69595.call(null,G__69598,G__69599));
})()))
{return (new schema.core.Either(G__69591,self__.__meta,self__.__extmap,null));
} else
{return (new schema.core.Either(self__.schemas,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4240__auto__,G__69591),null));
}
});
schema.core.Either.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4244__auto__){var self__ = this;
var this__4244__auto____$1 = this;return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$1345,self__.schemas],null))], null),self__.__extmap));
});
schema.core.Either.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4231__auto__,G__69591){var self__ = this;
var this__4231__auto____$1 = this;return (new schema.core.Either(self__.schemas,G__69591,self__.__extmap,self__.__hash));
});
schema.core.Either.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4237__auto__,entry__4238__auto__){var self__ = this;
var this__4237__auto____$1 = this;if(cljs.core.vector_QMARK_(entry__4238__auto__))
{return cljs.core._assoc(this__4237__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4238__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4238__auto__,(1)));
} else
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4237__auto____$1,entry__4238__auto__);
}
});
schema.core.Either.prototype.schema$core$Schema$ = true;
schema.core.Either.prototype.schema$core$Schema$walker$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var sub_walkers = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(schema.core.subschema_walker,self__.schemas);return ((function (sub_walkers,this$__$1){
return (function (x){var sub_walkers__$1 = cljs.core.seq(sub_walkers);while(true){
if(cljs.core.not(sub_walkers__$1))
{return schema.utils.error(schema.utils.__GT_ValidationError(this$__$1,x,(new cljs.core.Delay(((function (sub_walkers__$1,sub_walkers,this$__$1){
return (function (){return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"schemas","schemas",-2079365190,null)),cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.utils.value_name(x)),new cljs.core.Symbol(null,"%","%",-950237169,null)),new cljs.core.Symbol(null,"check","check",-1428126865,null))),new cljs.core.Symbol(null,"some","some",-310548046,null));
});})(sub_walkers__$1,sub_walkers,this$__$1))
,null)),null));
} else
{var res = cljs.core.first(sub_walkers__$1).call(null,x);if(!(schema.utils.error_QMARK_(res)))
{return res;
} else
{{
var G__69601 = cljs.core.next(sub_walkers__$1);
sub_walkers__$1 = G__69601;
continue;
}
}
}
break;
}
});
;})(sub_walkers,this$__$1))
});
schema.core.Either.prototype.schema$core$Schema$explain$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core.cons(new cljs.core.Symbol(null,"either","either",-2144373018,null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(schema.core.explain,self__.schemas));
});
schema.core.Either.cljs$lang$type = true;
schema.core.Either.cljs$lang$ctorPrSeq = (function (this__4266__auto__){return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/Either");
});
schema.core.Either.cljs$lang$ctorPrWriter = (function (this__4266__auto__,writer__4267__auto__){return cljs.core._write(writer__4267__auto__,"schema.core/Either");
});
schema.core.__GT_Either = (function __GT_Either(schemas){return (new schema.core.Either(schemas));
});
schema.core.map__GT_Either = (function map__GT_Either(G__69593){return (new schema.core.Either(cljs.core.constant$keyword$1345.cljs$core$IFn$_invoke$arity$1(G__69593),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__69593,cljs.core.constant$keyword$1345)));
});
/**
* A value that must satisfy at least one schema in schemas.
* @param {...*} var_args
*/
schema.core.either = (function() { 
var either__delegate = function (schemas){return (new schema.core.Either(schemas));
};
var either = function (var_args){
var schemas = null;if (arguments.length > 0) {
  schemas = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return either__delegate.call(this,schemas);};
either.cljs$lang$maxFixedArity = 0;
either.cljs$lang$applyTo = (function (arglist__69602){
var schemas = cljs.core.seq(arglist__69602);
return either__delegate(schemas);
});
either.cljs$core$IFn$_invoke$arity$variadic = either__delegate;
return either;
})()
;

/**
* @constructor
* @param {*} schemas
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
schema.core.Both = (function (schemas,__meta,__extmap){
this.schemas = schemas;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>1){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
schema.core.Both.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4232__auto__,k__4233__auto__){var self__ = this;
var this__4232__auto____$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4232__auto____$1,k__4233__auto__,null);
});
schema.core.Both.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4234__auto__,k69604,else__4235__auto__){var self__ = this;
var this__4234__auto____$1 = this;var G__69606 = (((k69604 instanceof cljs.core.Keyword))?k69604.fqn:null);switch (G__69606) {
case "schemas":
return self__.schemas;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k69604,else__4235__auto__);

}
});
schema.core.Both.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4246__auto__,writer__4247__auto__,opts__4248__auto__){var self__ = this;
var this__4246__auto____$1 = this;var pr_pair__4249__auto__ = ((function (this__4246__auto____$1){
return (function (keyval__4250__auto__){return cljs.core.pr_sequential_writer(writer__4247__auto__,cljs.core.pr_writer,""," ","",opts__4248__auto__,keyval__4250__auto__);
});})(this__4246__auto____$1))
;return cljs.core.pr_sequential_writer(writer__4247__auto__,pr_pair__4249__auto__,"#schema.core.Both{",", ","}",opts__4248__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$1345,self__.schemas],null))], null),self__.__extmap));
});
schema.core.Both.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4230__auto__){var self__ = this;
var this__4230__auto____$1 = this;return self__.__meta;
});
schema.core.Both.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4226__auto__){var self__ = this;
var this__4226__auto____$1 = this;return (new schema.core.Both(self__.schemas,self__.__meta,self__.__extmap,self__.__hash));
});
schema.core.Both.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4236__auto__){var self__ = this;
var this__4236__auto____$1 = this;return (1 + cljs.core.count(self__.__extmap));
});
schema.core.Both.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4227__auto__){var self__ = this;
var this__4227__auto____$1 = this;var h__4048__auto__ = self__.__hash;if(!((h__4048__auto__ == null)))
{return h__4048__auto__;
} else
{var h__4048__auto____$1 = cljs.core.hash_imap(this__4227__auto____$1);self__.__hash = h__4048__auto____$1;
return h__4048__auto____$1;
}
});
schema.core.Both.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4228__auto__,other__4229__auto__){var self__ = this;
var this__4228__auto____$1 = this;if(cljs.core.truth_((function (){var and__3625__auto__ = other__4229__auto__;if(cljs.core.truth_(and__3625__auto__))
{return ((this__4228__auto____$1.constructor === other__4229__auto__.constructor)) && (cljs.core.equiv_map(this__4228__auto____$1,other__4229__auto__));
} else
{return and__3625__auto__;
}
})()))
{return true;
} else
{return false;
}
});
schema.core.Both.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4241__auto__,k__4242__auto__){var self__ = this;
var this__4241__auto____$1 = this;if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1345,null], null), null),k__4242__auto__))
{return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4241__auto____$1),self__.__meta),k__4242__auto__);
} else
{return (new schema.core.Both(self__.schemas,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4242__auto__)),null));
}
});
schema.core.Both.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4239__auto__,k__4240__auto__,G__69603){var self__ = this;
var this__4239__auto____$1 = this;var pred__69607 = cljs.core.keyword_identical_QMARK_;var expr__69608 = k__4240__auto__;if(cljs.core.truth_((function (){var G__69610 = cljs.core.constant$keyword$1345;var G__69611 = expr__69608;return (pred__69607.cljs$core$IFn$_invoke$arity$2 ? pred__69607.cljs$core$IFn$_invoke$arity$2(G__69610,G__69611) : pred__69607.call(null,G__69610,G__69611));
})()))
{return (new schema.core.Both(G__69603,self__.__meta,self__.__extmap,null));
} else
{return (new schema.core.Both(self__.schemas,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4240__auto__,G__69603),null));
}
});
schema.core.Both.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4244__auto__){var self__ = this;
var this__4244__auto____$1 = this;return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$1345,self__.schemas],null))], null),self__.__extmap));
});
schema.core.Both.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4231__auto__,G__69603){var self__ = this;
var this__4231__auto____$1 = this;return (new schema.core.Both(self__.schemas,G__69603,self__.__extmap,self__.__hash));
});
schema.core.Both.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4237__auto__,entry__4238__auto__){var self__ = this;
var this__4237__auto____$1 = this;if(cljs.core.vector_QMARK_(entry__4238__auto__))
{return cljs.core._assoc(this__4237__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4238__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4238__auto__,(1)));
} else
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4237__auto____$1,entry__4238__auto__);
}
});
schema.core.Both.prototype.schema$core$Schema$ = true;
schema.core.Both.prototype.schema$core$Schema$walker$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var sub_walkers = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(schema.core.subschema_walker,self__.schemas);return ((function (sub_walkers,this$__$1){
return (function (x){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (sub_walkers,this$__$1){
return (function (x__$1,sub_walker){if(schema.utils.error_QMARK_(x__$1))
{return x__$1;
} else
{var G__69612 = x__$1;return (sub_walker.cljs$core$IFn$_invoke$arity$1 ? sub_walker.cljs$core$IFn$_invoke$arity$1(G__69612) : sub_walker.call(null,G__69612));
}
});})(sub_walkers,this$__$1))
,x,sub_walkers);
});
;})(sub_walkers,this$__$1))
});
schema.core.Both.prototype.schema$core$Schema$explain$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core.cons(new cljs.core.Symbol(null,"both","both",1246882687,null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(schema.core.explain,self__.schemas));
});
schema.core.Both.cljs$lang$type = true;
schema.core.Both.cljs$lang$ctorPrSeq = (function (this__4266__auto__){return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/Both");
});
schema.core.Both.cljs$lang$ctorPrWriter = (function (this__4266__auto__,writer__4267__auto__){return cljs.core._write(writer__4267__auto__,"schema.core/Both");
});
schema.core.__GT_Both = (function __GT_Both(schemas){return (new schema.core.Both(schemas));
});
schema.core.map__GT_Both = (function map__GT_Both(G__69605){return (new schema.core.Both(cljs.core.constant$keyword$1345.cljs$core$IFn$_invoke$arity$1(G__69605),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__69605,cljs.core.constant$keyword$1345)));
});
/**
* A value that must satisfy every schema in schemas.
* @param {...*} var_args
*/
schema.core.both = (function() { 
var both__delegate = function (schemas){return (new schema.core.Both(schemas));
};
var both = function (var_args){
var schemas = null;if (arguments.length > 0) {
  schemas = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return both__delegate.call(this,schemas);};
both.cljs$lang$maxFixedArity = 0;
both.cljs$lang$applyTo = (function (arglist__69614){
var schemas = cljs.core.seq(arglist__69614);
return both__delegate(schemas);
});
both.cljs$core$IFn$_invoke$arity$variadic = both__delegate;
return both;
})()
;

/**
* @constructor
* @param {*} preds_and_schemas
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
schema.core.ConditionalSchema = (function (preds_and_schemas,__meta,__extmap){
this.preds_and_schemas = preds_and_schemas;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>1){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
schema.core.ConditionalSchema.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4232__auto__,k__4233__auto__){var self__ = this;
var this__4232__auto____$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4232__auto____$1,k__4233__auto__,null);
});
schema.core.ConditionalSchema.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4234__auto__,k69616,else__4235__auto__){var self__ = this;
var this__4234__auto____$1 = this;var G__69618 = (((k69616 instanceof cljs.core.Keyword))?k69616.fqn:null);switch (G__69618) {
case "preds-and-schemas":
return self__.preds_and_schemas;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k69616,else__4235__auto__);

}
});
schema.core.ConditionalSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4246__auto__,writer__4247__auto__,opts__4248__auto__){var self__ = this;
var this__4246__auto____$1 = this;var pr_pair__4249__auto__ = ((function (this__4246__auto____$1){
return (function (keyval__4250__auto__){return cljs.core.pr_sequential_writer(writer__4247__auto__,cljs.core.pr_writer,""," ","",opts__4248__auto__,keyval__4250__auto__);
});})(this__4246__auto____$1))
;return cljs.core.pr_sequential_writer(writer__4247__auto__,pr_pair__4249__auto__,"#schema.core.ConditionalSchema{",", ","}",opts__4248__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$1346,self__.preds_and_schemas],null))], null),self__.__extmap));
});
schema.core.ConditionalSchema.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4230__auto__){var self__ = this;
var this__4230__auto____$1 = this;return self__.__meta;
});
schema.core.ConditionalSchema.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4226__auto__){var self__ = this;
var this__4226__auto____$1 = this;return (new schema.core.ConditionalSchema(self__.preds_and_schemas,self__.__meta,self__.__extmap,self__.__hash));
});
schema.core.ConditionalSchema.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4236__auto__){var self__ = this;
var this__4236__auto____$1 = this;return (1 + cljs.core.count(self__.__extmap));
});
schema.core.ConditionalSchema.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4227__auto__){var self__ = this;
var this__4227__auto____$1 = this;var h__4048__auto__ = self__.__hash;if(!((h__4048__auto__ == null)))
{return h__4048__auto__;
} else
{var h__4048__auto____$1 = cljs.core.hash_imap(this__4227__auto____$1);self__.__hash = h__4048__auto____$1;
return h__4048__auto____$1;
}
});
schema.core.ConditionalSchema.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4228__auto__,other__4229__auto__){var self__ = this;
var this__4228__auto____$1 = this;if(cljs.core.truth_((function (){var and__3625__auto__ = other__4229__auto__;if(cljs.core.truth_(and__3625__auto__))
{return ((this__4228__auto____$1.constructor === other__4229__auto__.constructor)) && (cljs.core.equiv_map(this__4228__auto____$1,other__4229__auto__));
} else
{return and__3625__auto__;
}
})()))
{return true;
} else
{return false;
}
});
schema.core.ConditionalSchema.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4241__auto__,k__4242__auto__){var self__ = this;
var this__4241__auto____$1 = this;if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1346,null], null), null),k__4242__auto__))
{return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4241__auto____$1),self__.__meta),k__4242__auto__);
} else
{return (new schema.core.ConditionalSchema(self__.preds_and_schemas,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4242__auto__)),null));
}
});
schema.core.ConditionalSchema.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4239__auto__,k__4240__auto__,G__69615){var self__ = this;
var this__4239__auto____$1 = this;var pred__69619 = cljs.core.keyword_identical_QMARK_;var expr__69620 = k__4240__auto__;if(cljs.core.truth_((function (){var G__69622 = cljs.core.constant$keyword$1346;var G__69623 = expr__69620;return (pred__69619.cljs$core$IFn$_invoke$arity$2 ? pred__69619.cljs$core$IFn$_invoke$arity$2(G__69622,G__69623) : pred__69619.call(null,G__69622,G__69623));
})()))
{return (new schema.core.ConditionalSchema(G__69615,self__.__meta,self__.__extmap,null));
} else
{return (new schema.core.ConditionalSchema(self__.preds_and_schemas,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4240__auto__,G__69615),null));
}
});
schema.core.ConditionalSchema.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4244__auto__){var self__ = this;
var this__4244__auto____$1 = this;return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$1346,self__.preds_and_schemas],null))], null),self__.__extmap));
});
schema.core.ConditionalSchema.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4231__auto__,G__69615){var self__ = this;
var this__4231__auto____$1 = this;return (new schema.core.ConditionalSchema(self__.preds_and_schemas,G__69615,self__.__extmap,self__.__hash));
});
schema.core.ConditionalSchema.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4237__auto__,entry__4238__auto__){var self__ = this;
var this__4237__auto____$1 = this;if(cljs.core.vector_QMARK_(entry__4238__auto__))
{return cljs.core._assoc(this__4237__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4238__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4238__auto__,(1)));
} else
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4237__auto____$1,entry__4238__auto__);
}
});
schema.core.ConditionalSchema.prototype.schema$core$Schema$ = true;
schema.core.ConditionalSchema.prototype.schema$core$Schema$walker$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var preds_and_walkers = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (this$__$1){
return (function (p__69624){var vec__69625 = p__69624;var pred = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69625,(0),null);var schema__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69625,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pred,(schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1 ? schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1(schema__$1) : schema.core.subschema_walker.call(null,schema__$1))], null);
});})(this$__$1))
,self__.preds_and_schemas);return ((function (preds_and_walkers,this$__$1){
return (function (x){var temp__4124__auto__ = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (preds_and_walkers,this$__$1){
return (function (p__69626){var vec__69627 = p__69626;var pred = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69627,(0),null);var G__69628 = x;return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(G__69628) : pred.call(null,G__69628));
});})(preds_and_walkers,this$__$1))
,preds_and_walkers));if(cljs.core.truth_(temp__4124__auto__))
{var vec__69629 = temp__4124__auto__;var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69629,(0),null);var match = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69629,(1),null);var G__69630 = x;return (match.cljs$core$IFn$_invoke$arity$1 ? match.cljs$core$IFn$_invoke$arity$1(G__69630) : match.call(null,G__69630));
} else
{return schema.utils.error(schema.utils.__GT_ValidationError(this$__$1,x,(new cljs.core.Delay(((function (temp__4124__auto__,preds_and_walkers,this$__$1){
return (function (){return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.utils.value_name(x)),new cljs.core.Symbol(null,"matches-some-condition?","matches-some-condition?",2097370044,null));
});})(temp__4124__auto__,preds_and_walkers,this$__$1))
,null)),null));
}
});
;})(preds_and_walkers,this$__$1))
});
schema.core.ConditionalSchema.prototype.schema$core$Schema$explain$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core.cons(new cljs.core.Symbol(null,"conditional","conditional",-1212542970,null),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (this$__$1){
return (function (p__69631){var vec__69632 = p__69631;var pred = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69632,(0),null);var schema__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69632,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pred,schema.core.explain(schema__$1)], null);
});})(this$__$1))
,cljs.core.array_seq([self__.preds_and_schemas], 0)));
});
schema.core.ConditionalSchema.cljs$lang$type = true;
schema.core.ConditionalSchema.cljs$lang$ctorPrSeq = (function (this__4266__auto__){return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/ConditionalSchema");
});
schema.core.ConditionalSchema.cljs$lang$ctorPrWriter = (function (this__4266__auto__,writer__4267__auto__){return cljs.core._write(writer__4267__auto__,"schema.core/ConditionalSchema");
});
schema.core.__GT_ConditionalSchema = (function __GT_ConditionalSchema(preds_and_schemas){return (new schema.core.ConditionalSchema(preds_and_schemas));
});
schema.core.map__GT_ConditionalSchema = (function map__GT_ConditionalSchema(G__69617){return (new schema.core.ConditionalSchema(cljs.core.constant$keyword$1346.cljs$core$IFn$_invoke$arity$1(G__69617),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__69617,cljs.core.constant$keyword$1346)));
});
/**
* Define a conditional schema.  Takes args like cond,
* (conditional pred1 schema1 pred2 schema2 ...),
* and checks the first schema where pred is true on the value.
* Unlike cond, throws if the value does not match any condition.
* :else may be used as a final condition in the place of (constantly true).
* More efficient than either, since only one schema must be checked.
* @param {...*} var_args
*/
schema.core.conditional = (function() { 
var conditional__delegate = function (preds_and_schemas){if((cljs.core.seq(preds_and_schemas)) && (cljs.core.even_QMARK_(cljs.core.count(preds_and_schemas))))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Expected even, nonzero number of args; got %s",cljs.core.array_seq([cljs.core.count(preds_and_schemas)], 0))));
}
return (new schema.core.ConditionalSchema((function (){var iter__4375__auto__ = (function iter__69644(s__69645){return (new cljs.core.LazySeq(null,(function (){var s__69645__$1 = s__69645;while(true){
var temp__4126__auto__ = cljs.core.seq(s__69645__$1);if(temp__4126__auto__)
{var s__69645__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__69645__$2))
{var c__4373__auto__ = cljs.core.chunk_first(s__69645__$2);var size__4374__auto__ = cljs.core.count(c__4373__auto__);var b__69647 = cljs.core.chunk_buffer(size__4374__auto__);if((function (){var i__69646 = (0);while(true){
if((i__69646 < size__4374__auto__))
{var vec__69652 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4373__auto__,i__69646);var pred = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69652,(0),null);var schema__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69652,(1),null);cljs.core.chunk_append(b__69647,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pred,cljs.core.constant$keyword$1110))?cljs.core.constantly(true):pred),schema__$1], null));
{
var G__69654 = (i__69646 + (1));
i__69646 = G__69654;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__69647),iter__69644(cljs.core.chunk_rest(s__69645__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__69647),null);
}
} else
{var vec__69653 = cljs.core.first(s__69645__$2);var pred = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69653,(0),null);var schema__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69653,(1),null);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pred,cljs.core.constant$keyword$1110))?cljs.core.constantly(true):pred),schema__$1], null),iter__69644(cljs.core.rest(s__69645__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4375__auto__(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),preds_and_schemas));
})()));
};
var conditional = function (var_args){
var preds_and_schemas = null;if (arguments.length > 0) {
  preds_and_schemas = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return conditional__delegate.call(this,preds_and_schemas);};
conditional.cljs$lang$maxFixedArity = 0;
conditional.cljs$lang$applyTo = (function (arglist__69655){
var preds_and_schemas = cljs.core.seq(arglist__69655);
return conditional__delegate(preds_and_schemas);
});
conditional.cljs$core$IFn$_invoke$arity$variadic = conditional__delegate;
return conditional;
})()
;
/**
* if the predicate returns truthy, use the if-schema, otherwise use the else-schema
*/
schema.core.if$ = (function if$(pred,if_schema,else_schema){return schema.core.conditional.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([pred,if_schema,cljs.core.constantly(true),else_schema], 0));
});
/**
* A sentinel value representing missing portions of the input data.
*/
schema.core._PLUS_missing_PLUS_ = cljs.core.constant$keyword$1347;

/**
* @constructor
* @param {*} k
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
schema.core.RequiredKey = (function (k,__meta,__extmap){
this.k = k;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>1){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
schema.core.RequiredKey.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4232__auto__,k__4233__auto__){var self__ = this;
var this__4232__auto____$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4232__auto____$1,k__4233__auto__,null);
});
schema.core.RequiredKey.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4234__auto__,k69657,else__4235__auto__){var self__ = this;
var this__4234__auto____$1 = this;var G__69659 = (((k69657 instanceof cljs.core.Keyword))?k69657.fqn:null);switch (G__69659) {
case "k":
return self__.k;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k69657,else__4235__auto__);

}
});
schema.core.RequiredKey.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4246__auto__,writer__4247__auto__,opts__4248__auto__){var self__ = this;
var this__4246__auto____$1 = this;var pr_pair__4249__auto__ = ((function (this__4246__auto____$1){
return (function (keyval__4250__auto__){return cljs.core.pr_sequential_writer(writer__4247__auto__,cljs.core.pr_writer,""," ","",opts__4248__auto__,keyval__4250__auto__);
});})(this__4246__auto____$1))
;return cljs.core.pr_sequential_writer(writer__4247__auto__,pr_pair__4249__auto__,"#schema.core.RequiredKey{",", ","}",opts__4248__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$1348,self__.k],null))], null),self__.__extmap));
});
schema.core.RequiredKey.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4230__auto__){var self__ = this;
var this__4230__auto____$1 = this;return self__.__meta;
});
schema.core.RequiredKey.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4226__auto__){var self__ = this;
var this__4226__auto____$1 = this;return (new schema.core.RequiredKey(self__.k,self__.__meta,self__.__extmap,self__.__hash));
});
schema.core.RequiredKey.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4236__auto__){var self__ = this;
var this__4236__auto____$1 = this;return (1 + cljs.core.count(self__.__extmap));
});
schema.core.RequiredKey.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4227__auto__){var self__ = this;
var this__4227__auto____$1 = this;var h__4048__auto__ = self__.__hash;if(!((h__4048__auto__ == null)))
{return h__4048__auto__;
} else
{var h__4048__auto____$1 = cljs.core.hash_imap(this__4227__auto____$1);self__.__hash = h__4048__auto____$1;
return h__4048__auto____$1;
}
});
schema.core.RequiredKey.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4228__auto__,other__4229__auto__){var self__ = this;
var this__4228__auto____$1 = this;if(cljs.core.truth_((function (){var and__3625__auto__ = other__4229__auto__;if(cljs.core.truth_(and__3625__auto__))
{return ((this__4228__auto____$1.constructor === other__4229__auto__.constructor)) && (cljs.core.equiv_map(this__4228__auto____$1,other__4229__auto__));
} else
{return and__3625__auto__;
}
})()))
{return true;
} else
{return false;
}
});
schema.core.RequiredKey.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4241__auto__,k__4242__auto__){var self__ = this;
var this__4241__auto____$1 = this;if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1348,null], null), null),k__4242__auto__))
{return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4241__auto____$1),self__.__meta),k__4242__auto__);
} else
{return (new schema.core.RequiredKey(self__.k,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4242__auto__)),null));
}
});
schema.core.RequiredKey.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4239__auto__,k__4240__auto__,G__69656){var self__ = this;
var this__4239__auto____$1 = this;var pred__69660 = cljs.core.keyword_identical_QMARK_;var expr__69661 = k__4240__auto__;if(cljs.core.truth_((function (){var G__69663 = cljs.core.constant$keyword$1348;var G__69664 = expr__69661;return (pred__69660.cljs$core$IFn$_invoke$arity$2 ? pred__69660.cljs$core$IFn$_invoke$arity$2(G__69663,G__69664) : pred__69660.call(null,G__69663,G__69664));
})()))
{return (new schema.core.RequiredKey(G__69656,self__.__meta,self__.__extmap,null));
} else
{return (new schema.core.RequiredKey(self__.k,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4240__auto__,G__69656),null));
}
});
schema.core.RequiredKey.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4244__auto__){var self__ = this;
var this__4244__auto____$1 = this;return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$1348,self__.k],null))], null),self__.__extmap));
});
schema.core.RequiredKey.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4231__auto__,G__69656){var self__ = this;
var this__4231__auto____$1 = this;return (new schema.core.RequiredKey(self__.k,G__69656,self__.__extmap,self__.__hash));
});
schema.core.RequiredKey.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4237__auto__,entry__4238__auto__){var self__ = this;
var this__4237__auto____$1 = this;if(cljs.core.vector_QMARK_(entry__4238__auto__))
{return cljs.core._assoc(this__4237__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4238__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4238__auto__,(1)));
} else
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4237__auto____$1,entry__4238__auto__);
}
});
schema.core.RequiredKey.cljs$lang$type = true;
schema.core.RequiredKey.cljs$lang$ctorPrSeq = (function (this__4266__auto__){return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/RequiredKey");
});
schema.core.RequiredKey.cljs$lang$ctorPrWriter = (function (this__4266__auto__,writer__4267__auto__){return cljs.core._write(writer__4267__auto__,"schema.core/RequiredKey");
});
schema.core.__GT_RequiredKey = (function __GT_RequiredKey(k){return (new schema.core.RequiredKey(k));
});
schema.core.map__GT_RequiredKey = (function map__GT_RequiredKey(G__69658){return (new schema.core.RequiredKey(cljs.core.constant$keyword$1348.cljs$core$IFn$_invoke$arity$1(G__69658),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__69658,cljs.core.constant$keyword$1348)));
});
/**
* A required key in a map
*/
schema.core.required_key = (function required_key(k){if((k instanceof cljs.core.Keyword))
{return k;
} else
{return (new schema.core.RequiredKey(k));
}
});
schema.core.required_key_QMARK_ = (function required_key_QMARK_(ks){return ((ks instanceof cljs.core.Keyword)) || ((ks instanceof schema.core.RequiredKey));
});

/**
* @constructor
* @param {*} k
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
schema.core.OptionalKey = (function (k,__meta,__extmap){
this.k = k;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>1){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
schema.core.OptionalKey.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4232__auto__,k__4233__auto__){var self__ = this;
var this__4232__auto____$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4232__auto____$1,k__4233__auto__,null);
});
schema.core.OptionalKey.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4234__auto__,k69667,else__4235__auto__){var self__ = this;
var this__4234__auto____$1 = this;var G__69669 = (((k69667 instanceof cljs.core.Keyword))?k69667.fqn:null);switch (G__69669) {
case "k":
return self__.k;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k69667,else__4235__auto__);

}
});
schema.core.OptionalKey.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4246__auto__,writer__4247__auto__,opts__4248__auto__){var self__ = this;
var this__4246__auto____$1 = this;var pr_pair__4249__auto__ = ((function (this__4246__auto____$1){
return (function (keyval__4250__auto__){return cljs.core.pr_sequential_writer(writer__4247__auto__,cljs.core.pr_writer,""," ","",opts__4248__auto__,keyval__4250__auto__);
});})(this__4246__auto____$1))
;return cljs.core.pr_sequential_writer(writer__4247__auto__,pr_pair__4249__auto__,"#schema.core.OptionalKey{",", ","}",opts__4248__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$1348,self__.k],null))], null),self__.__extmap));
});
schema.core.OptionalKey.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4230__auto__){var self__ = this;
var this__4230__auto____$1 = this;return self__.__meta;
});
schema.core.OptionalKey.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4226__auto__){var self__ = this;
var this__4226__auto____$1 = this;return (new schema.core.OptionalKey(self__.k,self__.__meta,self__.__extmap,self__.__hash));
});
schema.core.OptionalKey.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4236__auto__){var self__ = this;
var this__4236__auto____$1 = this;return (1 + cljs.core.count(self__.__extmap));
});
schema.core.OptionalKey.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4227__auto__){var self__ = this;
var this__4227__auto____$1 = this;var h__4048__auto__ = self__.__hash;if(!((h__4048__auto__ == null)))
{return h__4048__auto__;
} else
{var h__4048__auto____$1 = cljs.core.hash_imap(this__4227__auto____$1);self__.__hash = h__4048__auto____$1;
return h__4048__auto____$1;
}
});
schema.core.OptionalKey.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4228__auto__,other__4229__auto__){var self__ = this;
var this__4228__auto____$1 = this;if(cljs.core.truth_((function (){var and__3625__auto__ = other__4229__auto__;if(cljs.core.truth_(and__3625__auto__))
{return ((this__4228__auto____$1.constructor === other__4229__auto__.constructor)) && (cljs.core.equiv_map(this__4228__auto____$1,other__4229__auto__));
} else
{return and__3625__auto__;
}
})()))
{return true;
} else
{return false;
}
});
schema.core.OptionalKey.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4241__auto__,k__4242__auto__){var self__ = this;
var this__4241__auto____$1 = this;if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1348,null], null), null),k__4242__auto__))
{return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4241__auto____$1),self__.__meta),k__4242__auto__);
} else
{return (new schema.core.OptionalKey(self__.k,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4242__auto__)),null));
}
});
schema.core.OptionalKey.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4239__auto__,k__4240__auto__,G__69666){var self__ = this;
var this__4239__auto____$1 = this;var pred__69670 = cljs.core.keyword_identical_QMARK_;var expr__69671 = k__4240__auto__;if(cljs.core.truth_((function (){var G__69673 = cljs.core.constant$keyword$1348;var G__69674 = expr__69671;return (pred__69670.cljs$core$IFn$_invoke$arity$2 ? pred__69670.cljs$core$IFn$_invoke$arity$2(G__69673,G__69674) : pred__69670.call(null,G__69673,G__69674));
})()))
{return (new schema.core.OptionalKey(G__69666,self__.__meta,self__.__extmap,null));
} else
{return (new schema.core.OptionalKey(self__.k,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4240__auto__,G__69666),null));
}
});
schema.core.OptionalKey.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4244__auto__){var self__ = this;
var this__4244__auto____$1 = this;return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$1348,self__.k],null))], null),self__.__extmap));
});
schema.core.OptionalKey.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4231__auto__,G__69666){var self__ = this;
var this__4231__auto____$1 = this;return (new schema.core.OptionalKey(self__.k,G__69666,self__.__extmap,self__.__hash));
});
schema.core.OptionalKey.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4237__auto__,entry__4238__auto__){var self__ = this;
var this__4237__auto____$1 = this;if(cljs.core.vector_QMARK_(entry__4238__auto__))
{return cljs.core._assoc(this__4237__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4238__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4238__auto__,(1)));
} else
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4237__auto____$1,entry__4238__auto__);
}
});
schema.core.OptionalKey.cljs$lang$type = true;
schema.core.OptionalKey.cljs$lang$ctorPrSeq = (function (this__4266__auto__){return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/OptionalKey");
});
schema.core.OptionalKey.cljs$lang$ctorPrWriter = (function (this__4266__auto__,writer__4267__auto__){return cljs.core._write(writer__4267__auto__,"schema.core/OptionalKey");
});
schema.core.__GT_OptionalKey = (function __GT_OptionalKey(k){return (new schema.core.OptionalKey(k));
});
schema.core.map__GT_OptionalKey = (function map__GT_OptionalKey(G__69668){return (new schema.core.OptionalKey(cljs.core.constant$keyword$1348.cljs$core$IFn$_invoke$arity$1(G__69668),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__69668,cljs.core.constant$keyword$1348)));
});
/**
* An optional key in a map
*/
schema.core.optional_key = (function optional_key(k){return (new schema.core.OptionalKey(k));
});
schema.core.optional_key_QMARK_ = (function optional_key_QMARK_(ks){return (ks instanceof schema.core.OptionalKey);
});
schema.core.explicit_schema_key = (function explicit_schema_key(ks){if((ks instanceof cljs.core.Keyword))
{return ks;
} else
{if((ks instanceof schema.core.RequiredKey))
{return ks.k;
} else
{if(schema.core.optional_key_QMARK_(ks))
{return ks.k;
} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Bad explicit key: %s",cljs.core.array_seq([ks], 0))));

}
}
}
});
schema.core.specific_key_QMARK_ = (function specific_key_QMARK_(ks){return (schema.core.required_key_QMARK_(ks)) || (schema.core.optional_key_QMARK_(ks));
});
schema.core.explain_kspec = (function explain_kspec(kspec){if(schema.core.specific_key_QMARK_(kspec))
{if((kspec instanceof cljs.core.Keyword))
{return kspec;
} else
{return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.core.explicit_schema_key(kspec)),((schema.core.required_key_QMARK_(kspec))?new cljs.core.Symbol(null,"required-key","required-key",1624616412,null):((schema.core.optional_key_QMARK_(kspec))?new cljs.core.Symbol(null,"optional-key","optional-key",988406145,null):null)));
}
} else
{return schema.core.explain(kspec);
}
});

/**
* @constructor
* @param {*} kspec
* @param {*} val_schema
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
schema.core.MapEntry = (function (kspec,val_schema,__meta,__extmap){
this.kspec = kspec;
this.val_schema = val_schema;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>2){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
schema.core.MapEntry.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4232__auto__,k__4233__auto__){var self__ = this;
var this__4232__auto____$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4232__auto____$1,k__4233__auto__,null);
});
schema.core.MapEntry.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4234__auto__,k69677,else__4235__auto__){var self__ = this;
var this__4234__auto____$1 = this;var G__69679 = (((k69677 instanceof cljs.core.Keyword))?k69677.fqn:null);switch (G__69679) {
case "val-schema":
return self__.val_schema;

break;
case "kspec":
return self__.kspec;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k69677,else__4235__auto__);

}
});
schema.core.MapEntry.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4246__auto__,writer__4247__auto__,opts__4248__auto__){var self__ = this;
var this__4246__auto____$1 = this;var pr_pair__4249__auto__ = ((function (this__4246__auto____$1){
return (function (keyval__4250__auto__){return cljs.core.pr_sequential_writer(writer__4247__auto__,cljs.core.pr_writer,""," ","",opts__4248__auto__,keyval__4250__auto__);
});})(this__4246__auto____$1))
;return cljs.core.pr_sequential_writer(writer__4247__auto__,pr_pair__4249__auto__,"#schema.core.MapEntry{",", ","}",opts__4248__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$1349,self__.kspec],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$1350,self__.val_schema],null))], null),self__.__extmap));
});
schema.core.MapEntry.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4230__auto__){var self__ = this;
var this__4230__auto____$1 = this;return self__.__meta;
});
schema.core.MapEntry.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4226__auto__){var self__ = this;
var this__4226__auto____$1 = this;return (new schema.core.MapEntry(self__.kspec,self__.val_schema,self__.__meta,self__.__extmap,self__.__hash));
});
schema.core.MapEntry.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4236__auto__){var self__ = this;
var this__4236__auto____$1 = this;return (2 + cljs.core.count(self__.__extmap));
});
schema.core.MapEntry.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4227__auto__){var self__ = this;
var this__4227__auto____$1 = this;var h__4048__auto__ = self__.__hash;if(!((h__4048__auto__ == null)))
{return h__4048__auto__;
} else
{var h__4048__auto____$1 = cljs.core.hash_imap(this__4227__auto____$1);self__.__hash = h__4048__auto____$1;
return h__4048__auto____$1;
}
});
schema.core.MapEntry.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4228__auto__,other__4229__auto__){var self__ = this;
var this__4228__auto____$1 = this;if(cljs.core.truth_((function (){var and__3625__auto__ = other__4229__auto__;if(cljs.core.truth_(and__3625__auto__))
{return ((this__4228__auto____$1.constructor === other__4229__auto__.constructor)) && (cljs.core.equiv_map(this__4228__auto____$1,other__4229__auto__));
} else
{return and__3625__auto__;
}
})()))
{return true;
} else
{return false;
}
});
schema.core.MapEntry.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4241__auto__,k__4242__auto__){var self__ = this;
var this__4241__auto____$1 = this;if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1349,null,cljs.core.constant$keyword$1350,null], null), null),k__4242__auto__))
{return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4241__auto____$1),self__.__meta),k__4242__auto__);
} else
{return (new schema.core.MapEntry(self__.kspec,self__.val_schema,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4242__auto__)),null));
}
});
schema.core.MapEntry.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4239__auto__,k__4240__auto__,G__69676){var self__ = this;
var this__4239__auto____$1 = this;var pred__69680 = cljs.core.keyword_identical_QMARK_;var expr__69681 = k__4240__auto__;if(cljs.core.truth_((function (){var G__69683 = cljs.core.constant$keyword$1349;var G__69684 = expr__69681;return (pred__69680.cljs$core$IFn$_invoke$arity$2 ? pred__69680.cljs$core$IFn$_invoke$arity$2(G__69683,G__69684) : pred__69680.call(null,G__69683,G__69684));
})()))
{return (new schema.core.MapEntry(G__69676,self__.val_schema,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__69685 = cljs.core.constant$keyword$1350;var G__69686 = expr__69681;return (pred__69680.cljs$core$IFn$_invoke$arity$2 ? pred__69680.cljs$core$IFn$_invoke$arity$2(G__69685,G__69686) : pred__69680.call(null,G__69685,G__69686));
})()))
{return (new schema.core.MapEntry(self__.kspec,G__69676,self__.__meta,self__.__extmap,null));
} else
{return (new schema.core.MapEntry(self__.kspec,self__.val_schema,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4240__auto__,G__69676),null));
}
}
});
schema.core.MapEntry.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4244__auto__){var self__ = this;
var this__4244__auto____$1 = this;return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$1349,self__.kspec],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$1350,self__.val_schema],null))], null),self__.__extmap));
});
schema.core.MapEntry.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4231__auto__,G__69676){var self__ = this;
var this__4231__auto____$1 = this;return (new schema.core.MapEntry(self__.kspec,self__.val_schema,G__69676,self__.__extmap,self__.__hash));
});
schema.core.MapEntry.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4237__auto__,entry__4238__auto__){var self__ = this;
var this__4237__auto____$1 = this;if(cljs.core.vector_QMARK_(entry__4238__auto__))
{return cljs.core._assoc(this__4237__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4238__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4238__auto__,(1)));
} else
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4237__auto____$1,entry__4238__auto__);
}
});
schema.core.MapEntry.prototype.schema$core$Schema$ = true;
schema.core.MapEntry.prototype.schema$core$Schema$walker$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var val_walker = (schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1 ? schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1(self__.val_schema) : schema.core.subschema_walker.call(null,self__.val_schema));if(schema.core.specific_key_QMARK_(self__.kspec))
{var optional_QMARK_ = schema.core.optional_key_QMARK_(self__.kspec);var k = schema.core.explicit_schema_key(self__.kspec);return ((function (optional_QMARK_,k,val_walker,this$__$1){
return (function (x){if((schema.core._PLUS_missing_PLUS_ === x))
{if(optional_QMARK_)
{return null;
} else
{return schema.utils.error(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null)], null));
}
} else
{if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(x))))
{return schema.utils.error(schema.utils.__GT_ValidationError(this$__$1,x,(new cljs.core.Delay(((function (optional_QMARK_,k,val_walker,this$__$1){
return (function (){return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.utils.value_name(x)),new cljs.core.Symbol(null,"count","count",-514511684,null))),(2)),cljs.core._EQ_);
});})(optional_QMARK_,k,val_walker,this$__$1))
,null)),null));
} else
{var vec__69687 = x;var xk = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69687,(0),null);var xv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69687,(1),null);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(xk,k))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"xk","xk",741114825,null),new cljs.core.Symbol(null,"k","k",-505765866,null))], 0))))));
}
var vres = (function (){var G__69688 = xv;return (val_walker.cljs$core$IFn$_invoke$arity$1 ? val_walker.cljs$core$IFn$_invoke$arity$1(G__69688) : val_walker.call(null,G__69688));
})();var temp__4124__auto__ = schema.utils.error_val(vres);if(cljs.core.truth_(temp__4124__auto__))
{var ve = temp__4124__auto__;return schema.utils.error(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xk,ve], null));
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xk,vres], null);
}

}
}
});
;})(optional_QMARK_,k,val_walker,this$__$1))
} else
{var key_walker = (schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1 ? schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1(self__.kspec) : schema.core.subschema_walker.call(null,self__.kspec));return ((function (key_walker,val_walker,this$__$1){
return (function (x){if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(x))))
{return schema.utils.error(schema.utils.__GT_ValidationError(this$__$1,x,(new cljs.core.Delay(((function (key_walker,val_walker,this$__$1){
return (function (){return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.utils.value_name(x)),new cljs.core.Symbol(null,"count","count",-514511684,null))),(2)),cljs.core._EQ_);
});})(key_walker,val_walker,this$__$1))
,null)),null));
} else
{var out_k = (function (){var G__69689 = cljs.core.key(x);return (key_walker.cljs$core$IFn$_invoke$arity$1 ? key_walker.cljs$core$IFn$_invoke$arity$1(G__69689) : key_walker.call(null,G__69689));
})();var out_ke = schema.utils.error_val(out_k);var out_v = (function (){var G__69690 = cljs.core.val(x);return (val_walker.cljs$core$IFn$_invoke$arity$1 ? val_walker.cljs$core$IFn$_invoke$arity$1(G__69690) : val_walker.call(null,G__69690));
})();var out_ve = schema.utils.error_val(out_v);if(cljs.core.truth_((function (){var or__3637__auto__ = out_ke;if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return out_ve;
}
})()))
{return schema.utils.error(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__3637__auto__ = out_ke;if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return cljs.core.key(x);
}
})(),(function (){var or__3637__auto__ = out_ve;if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return new cljs.core.Symbol(null,"invalid-key","invalid-key",-1461682245,null);
}
})()], null));
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [out_k,out_v], null);
}
}
});
;})(key_walker,val_walker,this$__$1))
}
});
schema.core.MapEntry.prototype.schema$core$Schema$explain$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.core.explain(self__.val_schema)),schema.core.explain_kspec(self__.kspec)),new cljs.core.Symbol(null,"map-entry","map-entry",329617471,null));
});
schema.core.MapEntry.cljs$lang$type = true;
schema.core.MapEntry.cljs$lang$ctorPrSeq = (function (this__4266__auto__){return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/MapEntry");
});
schema.core.MapEntry.cljs$lang$ctorPrWriter = (function (this__4266__auto__,writer__4267__auto__){return cljs.core._write(writer__4267__auto__,"schema.core/MapEntry");
});
schema.core.__GT_MapEntry = (function __GT_MapEntry(kspec,val_schema){return (new schema.core.MapEntry(kspec,val_schema));
});
schema.core.map__GT_MapEntry = (function map__GT_MapEntry(G__69678){return (new schema.core.MapEntry(cljs.core.constant$keyword$1349.cljs$core$IFn$_invoke$arity$1(G__69678),cljs.core.constant$keyword$1350.cljs$core$IFn$_invoke$arity$1(G__69678),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__69678,cljs.core.constant$keyword$1349,cljs.core.array_seq([cljs.core.constant$keyword$1350], 0))));
});
schema.core.map_entry = (function map_entry(kspec,val_schema){return (new schema.core.MapEntry(kspec,val_schema));
});
schema.core.find_extra_keys_schema = (function find_extra_keys_schema(map_schema){var key_schemata = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(schema.core.specific_key_QMARK_,cljs.core.keys(map_schema));if((cljs.core.count(key_schemata) < (2)))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("More than one non-optional/required key schemata: %s",cljs.core.array_seq([cljs.core.vec(key_schemata)], 0))));
}
return cljs.core.first(key_schemata);
});
schema.core.map_walker = (function map_walker(map_schema){var extra_keys_schema = schema.core.find_extra_keys_schema(map_schema);var extra_walker = (cljs.core.truth_(extra_keys_schema)?(schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1 ? schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(schema.core.map_entry,cljs.core.find(map_schema,extra_keys_schema))) : schema.core.subschema_walker.call(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(schema.core.map_entry,cljs.core.find(map_schema,extra_keys_schema)))):null);var explicit_schema = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(map_schema,extra_keys_schema);var explicit_walkers = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4375__auto__ = ((function (extra_keys_schema,extra_walker,explicit_schema){
return (function iter__69714(s__69715){return (new cljs.core.LazySeq(null,((function (extra_keys_schema,extra_walker,explicit_schema){
return (function (){var s__69715__$1 = s__69715;while(true){
var temp__4126__auto__ = cljs.core.seq(s__69715__$1);if(temp__4126__auto__)
{var s__69715__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__69715__$2))
{var c__4373__auto__ = cljs.core.chunk_first(s__69715__$2);var size__4374__auto__ = cljs.core.count(c__4373__auto__);var b__69717 = cljs.core.chunk_buffer(size__4374__auto__);if((function (){var i__69716 = (0);while(true){
if((i__69716 < size__4374__auto__))
{var vec__69722 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4373__auto__,i__69716);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69722,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69722,(1),null);cljs.core.chunk_append(b__69717,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.explicit_schema_key(k),(schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1 ? schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1(schema.core.map_entry(k,v)) : schema.core.subschema_walker.call(null,schema.core.map_entry(k,v)))], null));
{
var G__69735 = (i__69716 + (1));
i__69716 = G__69735;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__69717),iter__69714(cljs.core.chunk_rest(s__69715__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__69717),null);
}
} else
{var vec__69723 = cljs.core.first(s__69715__$2);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69723,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69723,(1),null);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.explicit_schema_key(k),(schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1 ? schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1(schema.core.map_entry(k,v)) : schema.core.subschema_walker.call(null,schema.core.map_entry(k,v)))], null),iter__69714(cljs.core.rest(s__69715__$2)));
}
} else
{return null;
}
break;
}
});})(extra_keys_schema,extra_walker,explicit_schema))
,null,null));
});})(extra_keys_schema,extra_walker,explicit_schema))
;return iter__4375__auto__(explicit_schema);
})());var err_conj = schema.utils.result_builder(cljs.core.constantly(cljs.core.PersistentArrayMap.EMPTY));if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(explicit_schema),cljs.core.count(explicit_walkers)))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Schema has multiple variants of the same explicit key: %s",cljs.core.array_seq([cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(schema.core.explain_kspec,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (extra_keys_schema,extra_walker,explicit_schema,explicit_walkers,err_conj){
return (function (p1__69692_SHARP_){return (cljs.core.count(p1__69692_SHARP_) > (1));
});})(extra_keys_schema,extra_walker,explicit_schema,explicit_walkers,err_conj))
,cljs.core.vals(cljs.core.group_by(schema.core.explicit_schema_key,cljs.core.keys(explicit_schema))))))], 0))));
}
return ((function (extra_keys_schema,extra_walker,explicit_schema,explicit_walkers,err_conj){
return (function (x){if(!(cljs.core.map_QMARK_(x)))
{return schema.utils.error(schema.utils.__GT_ValidationError(map_schema,x,(new cljs.core.Delay(((function (extra_keys_schema,extra_walker,explicit_schema,explicit_walkers,err_conj){
return (function (){return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.utils.value_name(x)),new cljs.core.Symbol(null,"map?","map?",-1780568534,null));
});})(extra_keys_schema,extra_walker,explicit_schema,explicit_walkers,err_conj))
,null)),null));
} else
{var x__$1 = x;var explicit_walkers__$1 = cljs.core.seq(explicit_walkers);var out = cljs.core.PersistentArrayMap.EMPTY;while(true){
if(cljs.core.not(explicit_walkers__$1))
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((cljs.core.truth_(extra_walker)?((function (x__$1,explicit_walkers__$1,out,extra_keys_schema,extra_walker,explicit_schema,explicit_walkers,err_conj){
return (function (out__$1,e){var G__69724 = out__$1;var G__69725 = (function (){var G__69726 = e;return (extra_walker.cljs$core$IFn$_invoke$arity$1 ? extra_walker.cljs$core$IFn$_invoke$arity$1(G__69726) : extra_walker.call(null,G__69726));
})();return (err_conj.cljs$core$IFn$_invoke$arity$2 ? err_conj.cljs$core$IFn$_invoke$arity$2(G__69724,G__69725) : err_conj.call(null,G__69724,G__69725));
});})(x__$1,explicit_walkers__$1,out,extra_keys_schema,extra_walker,explicit_schema,explicit_walkers,err_conj))
:((function (x__$1,explicit_walkers__$1,out,extra_keys_schema,extra_walker,explicit_schema,explicit_walkers,err_conj){
return (function (out__$1,p__69727){var vec__69728 = p__69727;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69728,(0),null);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69728,(1),null);var G__69729 = out__$1;var G__69730 = schema.utils.error(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.Symbol(null,"disallowed-key","disallowed-key",-1877785633,null)], null));return (err_conj.cljs$core$IFn$_invoke$arity$2 ? err_conj.cljs$core$IFn$_invoke$arity$2(G__69729,G__69730) : err_conj.call(null,G__69729,G__69730));
});})(x__$1,explicit_walkers__$1,out,extra_keys_schema,extra_walker,explicit_schema,explicit_walkers,err_conj))
),out,x__$1);
} else
{var vec__69731 = cljs.core.first(explicit_walkers__$1);var wk = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69731,(0),null);var wv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69731,(1),null);{
var G__69736 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(x__$1,wk);
var G__69737 = cljs.core.next(explicit_walkers__$1);
var G__69738 = (function (){var G__69732 = out;var G__69733 = (function (){var G__69734 = (function (){var or__3637__auto__ = cljs.core.find(x__$1,wk);if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return schema.core._PLUS_missing_PLUS_;
}
})();return (wv.cljs$core$IFn$_invoke$arity$1 ? wv.cljs$core$IFn$_invoke$arity$1(G__69734) : wv.call(null,G__69734));
})();return (err_conj.cljs$core$IFn$_invoke$arity$2 ? err_conj.cljs$core$IFn$_invoke$arity$2(G__69732,G__69733) : err_conj.call(null,G__69732,G__69733));
})();
x__$1 = G__69736;
explicit_walkers__$1 = G__69737;
out = G__69738;
continue;
}
}
break;
}
}
});
;})(extra_keys_schema,extra_walker,explicit_schema,explicit_walkers,err_conj))
});
schema.core.map_explain = (function map_explain(this$){return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4375__auto__ = (function iter__69749(s__69750){return (new cljs.core.LazySeq(null,(function (){var s__69750__$1 = s__69750;while(true){
var temp__4126__auto__ = cljs.core.seq(s__69750__$1);if(temp__4126__auto__)
{var s__69750__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__69750__$2))
{var c__4373__auto__ = cljs.core.chunk_first(s__69750__$2);var size__4374__auto__ = cljs.core.count(c__4373__auto__);var b__69752 = cljs.core.chunk_buffer(size__4374__auto__);if((function (){var i__69751 = (0);while(true){
if((i__69751 < size__4374__auto__))
{var vec__69757 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4373__auto__,i__69751);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69757,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69757,(1),null);cljs.core.chunk_append(b__69752,cljs.core.vec(cljs.core.next(schema.core.map_entry(k,v).schema$core$Schema$explain$arity$1(null))));
{
var G__69759 = (i__69751 + (1));
i__69751 = G__69759;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__69752),iter__69749(cljs.core.chunk_rest(s__69750__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__69752),null);
}
} else
{var vec__69758 = cljs.core.first(s__69750__$2);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69758,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69758,(1),null);return cljs.core.cons(cljs.core.vec(cljs.core.next(schema.core.map_entry(k,v).schema$core$Schema$explain$arity$1(null))),iter__69749(cljs.core.rest(s__69750__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4375__auto__(this$);
})());
});
cljs.core.PersistentHashMap.prototype.schema$core$Schema$ = true;
cljs.core.PersistentHashMap.prototype.schema$core$Schema$walker$arity$1 = (function (this$){var this$__$1 = this;return schema.core.map_walker(this$__$1);
});
cljs.core.PersistentHashMap.prototype.schema$core$Schema$explain$arity$1 = (function (this$){var this$__$1 = this;return schema.core.map_explain(this$__$1);
});
cljs.core.PersistentArrayMap.prototype.schema$core$Schema$ = true;
cljs.core.PersistentArrayMap.prototype.schema$core$Schema$walker$arity$1 = (function (this$){var this$__$1 = this;return schema.core.map_walker(this$__$1);
});
cljs.core.PersistentArrayMap.prototype.schema$core$Schema$explain$arity$1 = (function (this$){var this$__$1 = this;return schema.core.map_explain(this$__$1);
});
cljs.core.PersistentHashSet.prototype.schema$core$Schema$ = true;
cljs.core.PersistentHashSet.prototype.schema$core$Schema$walker$arity$1 = (function (this$){var this$__$1 = this;if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(this$__$1),(1)))
{} else
{throw (new Error(schema.utils.format_STAR_("Set schema must have exactly one element")));
}
var sub_walker = (schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1 ? schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1(cljs.core.first(this$__$1)) : schema.core.subschema_walker.call(null,cljs.core.first(this$__$1)));return ((function (sub_walker,this$__$1){
return (function (x){var or__3637__auto__ = ((cljs.core.set_QMARK_(x))?null:schema.utils.error(schema.utils.__GT_ValidationError(this$__$1,x,(new cljs.core.Delay(((function (sub_walker,this$__$1){
return (function (){return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.utils.value_name(x)),new cljs.core.Symbol(null,"set?","set?",1636014792,null));
});})(sub_walker,this$__$1))
,null)),null)));if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{var vec__69760 = cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.remove,cljs.core.keep).call(null,schema.utils.error_val,cljs.core.map.cljs$core$IFn$_invoke$arity$2(sub_walker,x));var good = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69760,(0),null);var bad = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69760,(1),null);if(cljs.core.seq(bad))
{return schema.utils.error(cljs.core.set(bad));
} else
{return cljs.core.set(good);
}
}
});
;})(sub_walker,this$__$1))
});
cljs.core.PersistentHashSet.prototype.schema$core$Schema$explain$arity$1 = (function (this$){var this$__$1 = this;return cljs.core.set(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.explain(cljs.core.first(this$__$1))], null));
});

/**
* @constructor
* @param {*} schema
* @param {*} optional_QMARK_
* @param {*} name
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
schema.core.One = (function (schema,optional_QMARK_,name,__meta,__extmap){
this.schema = schema;
this.optional_QMARK_ = optional_QMARK_;
this.name = name;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>3){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
schema.core.One.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4232__auto__,k__4233__auto__){var self__ = this;
var this__4232__auto____$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4232__auto____$1,k__4233__auto__,null);
});
schema.core.One.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4234__auto__,k69762,else__4235__auto__){var self__ = this;
var this__4234__auto____$1 = this;var G__69764 = (((k69762 instanceof cljs.core.Keyword))?k69762.fqn:null);switch (G__69764) {
case "name":
return self__.name;

break;
case "optional?":
return self__.optional_QMARK_;

break;
case "schema":
return self__.schema;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k69762,else__4235__auto__);

}
});
schema.core.One.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4246__auto__,writer__4247__auto__,opts__4248__auto__){var self__ = this;
var this__4246__auto____$1 = this;var pr_pair__4249__auto__ = ((function (this__4246__auto____$1){
return (function (keyval__4250__auto__){return cljs.core.pr_sequential_writer(writer__4247__auto__,cljs.core.pr_writer,""," ","",opts__4248__auto__,keyval__4250__auto__);
});})(this__4246__auto____$1))
;return cljs.core.pr_sequential_writer(writer__4247__auto__,pr_pair__4249__auto__,"#schema.core.One{",", ","}",opts__4248__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$1336,self__.schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$1351,self__.optional_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$1274,self__.name],null))], null),self__.__extmap));
});
schema.core.One.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4230__auto__){var self__ = this;
var this__4230__auto____$1 = this;return self__.__meta;
});
schema.core.One.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4226__auto__){var self__ = this;
var this__4226__auto____$1 = this;return (new schema.core.One(self__.schema,self__.optional_QMARK_,self__.name,self__.__meta,self__.__extmap,self__.__hash));
});
schema.core.One.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4236__auto__){var self__ = this;
var this__4236__auto____$1 = this;return (3 + cljs.core.count(self__.__extmap));
});
schema.core.One.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4227__auto__){var self__ = this;
var this__4227__auto____$1 = this;var h__4048__auto__ = self__.__hash;if(!((h__4048__auto__ == null)))
{return h__4048__auto__;
} else
{var h__4048__auto____$1 = cljs.core.hash_imap(this__4227__auto____$1);self__.__hash = h__4048__auto____$1;
return h__4048__auto____$1;
}
});
schema.core.One.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4228__auto__,other__4229__auto__){var self__ = this;
var this__4228__auto____$1 = this;if(cljs.core.truth_((function (){var and__3625__auto__ = other__4229__auto__;if(cljs.core.truth_(and__3625__auto__))
{return ((this__4228__auto____$1.constructor === other__4229__auto__.constructor)) && (cljs.core.equiv_map(this__4228__auto____$1,other__4229__auto__));
} else
{return and__3625__auto__;
}
})()))
{return true;
} else
{return false;
}
});
schema.core.One.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4241__auto__,k__4242__auto__){var self__ = this;
var this__4241__auto____$1 = this;if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1336,null,cljs.core.constant$keyword$1274,null,cljs.core.constant$keyword$1351,null], null), null),k__4242__auto__))
{return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4241__auto____$1),self__.__meta),k__4242__auto__);
} else
{return (new schema.core.One(self__.schema,self__.optional_QMARK_,self__.name,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4242__auto__)),null));
}
});
schema.core.One.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4239__auto__,k__4240__auto__,G__69761){var self__ = this;
var this__4239__auto____$1 = this;var pred__69765 = cljs.core.keyword_identical_QMARK_;var expr__69766 = k__4240__auto__;if(cljs.core.truth_((function (){var G__69768 = cljs.core.constant$keyword$1336;var G__69769 = expr__69766;return (pred__69765.cljs$core$IFn$_invoke$arity$2 ? pred__69765.cljs$core$IFn$_invoke$arity$2(G__69768,G__69769) : pred__69765.call(null,G__69768,G__69769));
})()))
{return (new schema.core.One(G__69761,self__.optional_QMARK_,self__.name,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__69770 = cljs.core.constant$keyword$1351;var G__69771 = expr__69766;return (pred__69765.cljs$core$IFn$_invoke$arity$2 ? pred__69765.cljs$core$IFn$_invoke$arity$2(G__69770,G__69771) : pred__69765.call(null,G__69770,G__69771));
})()))
{return (new schema.core.One(self__.schema,G__69761,self__.name,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__69772 = cljs.core.constant$keyword$1274;var G__69773 = expr__69766;return (pred__69765.cljs$core$IFn$_invoke$arity$2 ? pred__69765.cljs$core$IFn$_invoke$arity$2(G__69772,G__69773) : pred__69765.call(null,G__69772,G__69773));
})()))
{return (new schema.core.One(self__.schema,self__.optional_QMARK_,G__69761,self__.__meta,self__.__extmap,null));
} else
{return (new schema.core.One(self__.schema,self__.optional_QMARK_,self__.name,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4240__auto__,G__69761),null));
}
}
}
});
schema.core.One.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4244__auto__){var self__ = this;
var this__4244__auto____$1 = this;return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$1336,self__.schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$1351,self__.optional_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$1274,self__.name],null))], null),self__.__extmap));
});
schema.core.One.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4231__auto__,G__69761){var self__ = this;
var this__4231__auto____$1 = this;return (new schema.core.One(self__.schema,self__.optional_QMARK_,self__.name,G__69761,self__.__extmap,self__.__hash));
});
schema.core.One.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4237__auto__,entry__4238__auto__){var self__ = this;
var this__4237__auto____$1 = this;if(cljs.core.vector_QMARK_(entry__4238__auto__))
{return cljs.core._assoc(this__4237__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4238__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4238__auto__,(1)));
} else
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4237__auto____$1,entry__4238__auto__);
}
});
schema.core.One.cljs$lang$type = true;
schema.core.One.cljs$lang$ctorPrSeq = (function (this__4266__auto__){return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/One");
});
schema.core.One.cljs$lang$ctorPrWriter = (function (this__4266__auto__,writer__4267__auto__){return cljs.core._write(writer__4267__auto__,"schema.core/One");
});
schema.core.__GT_One = (function __GT_One(schema__$1,optional_QMARK_,name){return (new schema.core.One(schema__$1,optional_QMARK_,name));
});
schema.core.map__GT_One = (function map__GT_One(G__69763){return (new schema.core.One(cljs.core.constant$keyword$1336.cljs$core$IFn$_invoke$arity$1(G__69763),cljs.core.constant$keyword$1351.cljs$core$IFn$_invoke$arity$1(G__69763),cljs.core.constant$keyword$1274.cljs$core$IFn$_invoke$arity$1(G__69763),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__69763,cljs.core.constant$keyword$1336,cljs.core.array_seq([cljs.core.constant$keyword$1351,cljs.core.constant$keyword$1274], 0))));
});
/**
* A single required element of a sequence (not repeated, the implicit default)
*/
schema.core.one = (function one(schema__$1,name){return (new schema.core.One(schema__$1,false,name));
});
/**
* A single optional element of a sequence (not repeated, the implicit default)
*/
schema.core.optional = (function optional(schema__$1,name){return (new schema.core.One(schema__$1,true,name));
});
schema.core.parse_sequence_schema = (function parse_sequence_schema(s){var vec__69780 = cljs.core.split_with((function (p1__69775_SHARP_){return ((p1__69775_SHARP_ instanceof schema.core.One)) && (cljs.core.not(cljs.core.constant$keyword$1351.cljs$core$IFn$_invoke$arity$1(p1__69775_SHARP_)));
}),s);var required = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69780,(0),null);var more = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69780,(1),null);var vec__69781 = cljs.core.split_with(((function (vec__69780,required,more){
return (function (p1__69776_SHARP_){var and__3625__auto__ = (p1__69776_SHARP_ instanceof schema.core.One);if(and__3625__auto__)
{return cljs.core.constant$keyword$1351.cljs$core$IFn$_invoke$arity$1(p1__69776_SHARP_);
} else
{return and__3625__auto__;
}
});})(vec__69780,required,more))
,more);var optional = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69781,(0),null);var more__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69781,(1),null);if(((cljs.core.count(more__$1) <= (1))) && (cljs.core.every_QMARK_(((function (vec__69780,required,more,vec__69781,optional,more__$1){
return (function (p1__69777_SHARP_){return !((p1__69777_SHARP_ instanceof schema.core.One));
});})(vec__69780,required,more,vec__69781,optional,more__$1))
,more__$1)))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Sequence schema %s does not match [one* optional* rest-schema?]",cljs.core.array_seq([s], 0))));
}
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.concat.cljs$core$IFn$_invoke$arity$2(required,optional),cljs.core.first(more__$1)], null);
});
cljs.core.PersistentVector.prototype.schema$core$Schema$ = true;
cljs.core.PersistentVector.prototype.schema$core$Schema$walker$arity$1 = (function (this$){var this$__$1 = this;var vec__69782 = schema.core.parse_sequence_schema(this$__$1);var singles = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69782,(0),null);var multi = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69782,(1),null);var single_walkers = cljs.core.vec((function (){var iter__4375__auto__ = ((function (vec__69782,singles,multi,this$__$1){
return (function iter__69783(s__69784){return (new cljs.core.LazySeq(null,((function (vec__69782,singles,multi,this$__$1){
return (function (){var s__69784__$1 = s__69784;while(true){
var temp__4126__auto__ = cljs.core.seq(s__69784__$1);if(temp__4126__auto__)
{var s__69784__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__69784__$2))
{var c__4373__auto__ = cljs.core.chunk_first(s__69784__$2);var size__4374__auto__ = cljs.core.count(c__4373__auto__);var b__69786 = cljs.core.chunk_buffer(size__4374__auto__);if((function (){var i__69785 = (0);while(true){
if((i__69785 < size__4374__auto__))
{var s = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4373__auto__,i__69785);cljs.core.chunk_append(b__69786,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,(schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1 ? schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1(s.schema) : schema.core.subschema_walker.call(null,s.schema))], null));
{
var G__69814 = (i__69785 + (1));
i__69785 = G__69814;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__69786),iter__69783(cljs.core.chunk_rest(s__69784__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__69786),null);
}
} else
{var s = cljs.core.first(s__69784__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,(schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1 ? schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1(s.schema) : schema.core.subschema_walker.call(null,s.schema))], null),iter__69783(cljs.core.rest(s__69784__$2)));
}
} else
{return null;
}
break;
}
});})(vec__69782,singles,multi,this$__$1))
,null,null));
});})(vec__69782,singles,multi,this$__$1))
;return iter__4375__auto__(singles);
})());var multi_walker = (cljs.core.truth_(multi)?(schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1 ? schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1(multi) : schema.core.subschema_walker.call(null,multi)):null);var err_conj = schema.utils.result_builder(((function (vec__69782,singles,multi,single_walkers,multi_walker,this$__$1){
return (function (m){return cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(m),null));
});})(vec__69782,singles,multi,single_walkers,multi_walker,this$__$1))
);return ((function (vec__69782,singles,multi,single_walkers,multi_walker,err_conj,this$__$1){
return (function (x){var or__3637__auto__ = ((((x == null)) || (cljs.core.sequential_QMARK_(x)))?null:schema.utils.error(schema.utils.__GT_ValidationError(this$__$1,x,(new cljs.core.Delay(((function (vec__69782,singles,multi,single_walkers,multi_walker,err_conj,this$__$1){
return (function (){return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.utils.value_name(x)),new cljs.core.Symbol(null,"sequential?","sequential?",1102351463,null));
});})(vec__69782,singles,multi,single_walkers,multi_walker,err_conj,this$__$1))
,null)),null)));if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{var single_walkers__$1 = single_walkers;var x__$1 = x;var out = cljs.core.PersistentVector.EMPTY;while(true){
var temp__4124__auto__ = cljs.core.first(single_walkers__$1);if(cljs.core.truth_(temp__4124__auto__))
{var vec__69789 = temp__4124__auto__;var first_single = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69789,(0),null);var single_walker = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69789,(1),null);if(cljs.core.empty_QMARK_(x__$1))
{if(cljs.core.truth_(first_single.optional_QMARK_))
{return out;
} else
{var G__69790 = out;var G__69791 = schema.utils.error(schema.utils.__GT_ValidationError(cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,single_walkers__$1)),null,(new cljs.core.Delay(((function (single_walkers__$1,x__$1,out,G__69790,vec__69789,first_single,single_walker,temp__4124__auto__,or__3637__auto__,vec__69782,singles,multi,single_walkers,multi_walker,err_conj,this$__$1){
return (function (){return cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"present?","present?",-1810613791,null),(function (){var iter__4375__auto__ = ((function (single_walkers__$1,x__$1,out,G__69790,vec__69789,first_single,single_walker,temp__4124__auto__,or__3637__auto__,vec__69782,singles,multi,single_walkers,multi_walker,err_conj,this$__$1){
return (function iter__69792(s__69793){return (new cljs.core.LazySeq(null,((function (single_walkers__$1,x__$1,out,G__69790,vec__69789,first_single,single_walker,temp__4124__auto__,or__3637__auto__,vec__69782,singles,multi,single_walkers,multi_walker,err_conj,this$__$1){
return (function (){var s__69793__$1 = s__69793;while(true){
var temp__4126__auto__ = cljs.core.seq(s__69793__$1);if(temp__4126__auto__)
{var s__69793__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__69793__$2))
{var c__4373__auto__ = cljs.core.chunk_first(s__69793__$2);var size__4374__auto__ = cljs.core.count(c__4373__auto__);var b__69795 = cljs.core.chunk_buffer(size__4374__auto__);if((function (){var i__69794 = (0);while(true){
if((i__69794 < size__4374__auto__))
{var vec__69800 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4373__auto__,i__69794);var single = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69800,(0),null);if(cljs.core.not(single.optional_QMARK_))
{cljs.core.chunk_append(b__69795,single.name);
{
var G__69815 = (i__69794 + (1));
i__69794 = G__69815;
continue;
}
} else
{return null;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__69795),iter__69792(cljs.core.chunk_rest(s__69793__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__69795),null);
}
} else
{var vec__69801 = cljs.core.first(s__69793__$2);var single = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69801,(0),null);if(cljs.core.not(single.optional_QMARK_))
{return cljs.core.cons(single.name,iter__69792(cljs.core.rest(s__69793__$2)));
} else
{return null;
}
}
} else
{return null;
}
break;
}
});})(single_walkers__$1,x__$1,out,G__69790,vec__69789,first_single,single_walker,temp__4124__auto__,or__3637__auto__,vec__69782,singles,multi,single_walkers,multi_walker,err_conj,this$__$1))
,null,null));
});})(single_walkers__$1,x__$1,out,G__69790,vec__69789,first_single,single_walker,temp__4124__auto__,or__3637__auto__,vec__69782,singles,multi,single_walkers,multi_walker,err_conj,this$__$1))
;return iter__4375__auto__(single_walkers__$1);
})());
});})(single_walkers__$1,x__$1,out,G__69790,vec__69789,first_single,single_walker,temp__4124__auto__,or__3637__auto__,vec__69782,singles,multi,single_walkers,multi_walker,err_conj,this$__$1))
,null)),null));return (err_conj.cljs$core$IFn$_invoke$arity$2 ? err_conj.cljs$core$IFn$_invoke$arity$2(G__69790,G__69791) : err_conj.call(null,G__69790,G__69791));
}
} else
{{
var G__69816 = cljs.core.next(single_walkers__$1);
var G__69817 = cljs.core.rest(x__$1);
var G__69818 = (function (){var G__69802 = out;var G__69803 = schema.utils.wrap_error_name(first_single.name,(function (){var G__69804 = cljs.core.first(x__$1);return (single_walker.cljs$core$IFn$_invoke$arity$1 ? single_walker.cljs$core$IFn$_invoke$arity$1(G__69804) : single_walker.call(null,G__69804));
})());return (err_conj.cljs$core$IFn$_invoke$arity$2 ? err_conj.cljs$core$IFn$_invoke$arity$2(G__69802,G__69803) : err_conj.call(null,G__69802,G__69803));
})();
single_walkers__$1 = G__69816;
x__$1 = G__69817;
out = G__69818;
continue;
}
}
} else
{if(cljs.core.truth_(multi))
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(err_conj,out,cljs.core.map.cljs$core$IFn$_invoke$arity$2(multi_walker,x__$1));
} else
{if(cljs.core.seq(x__$1))
{var G__69805 = out;var G__69806 = schema.utils.error(schema.utils.__GT_ValidationError(null,x__$1,(new cljs.core.Delay(((function (single_walkers__$1,x__$1,out,G__69805,temp__4124__auto__,or__3637__auto__,vec__69782,singles,multi,single_walkers,multi_walker,err_conj,this$__$1){
return (function (){return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.count(x__$1)),new cljs.core.Symbol(null,"has-extra-elts?","has-extra-elts?",-1376562869,null));
});})(single_walkers__$1,x__$1,out,G__69805,temp__4124__auto__,or__3637__auto__,vec__69782,singles,multi,single_walkers,multi_walker,err_conj,this$__$1))
,null)),null));return (err_conj.cljs$core$IFn$_invoke$arity$2 ? err_conj.cljs$core$IFn$_invoke$arity$2(G__69805,G__69806) : err_conj.call(null,G__69805,G__69806));
} else
{return out;

}
}
}
break;
}
}
});
;})(vec__69782,singles,multi,single_walkers,multi_walker,err_conj,this$__$1))
});
cljs.core.PersistentVector.prototype.schema$core$Schema$explain$arity$1 = (function (this$){var this$__$1 = this;var vec__69807 = schema.core.parse_sequence_schema(this$__$1);var singles = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69807,(0),null);var multi = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69807,(1),null);return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var iter__4375__auto__ = ((function (vec__69807,singles,multi,this$__$1){
return (function iter__69808(s__69809){return (new cljs.core.LazySeq(null,((function (vec__69807,singles,multi,this$__$1){
return (function (){var s__69809__$1 = s__69809;while(true){
var temp__4126__auto__ = cljs.core.seq(s__69809__$1);if(temp__4126__auto__)
{var s__69809__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__69809__$2))
{var c__4373__auto__ = cljs.core.chunk_first(s__69809__$2);var size__4374__auto__ = cljs.core.count(c__4373__auto__);var b__69811 = cljs.core.chunk_buffer(size__4374__auto__);if((function (){var i__69810 = (0);while(true){
if((i__69810 < size__4374__auto__))
{var s = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4373__auto__,i__69810);cljs.core.chunk_append(b__69811,cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.constant$keyword$1274.cljs$core$IFn$_invoke$arity$1(s)),schema.core.explain(cljs.core.constant$keyword$1336.cljs$core$IFn$_invoke$arity$1(s))),(cljs.core.truth_(s.optional_QMARK_)?new cljs.core.Symbol(null,"optional","optional",-600484260,null):new cljs.core.Symbol(null,"one","one",-1719427865,null))));
{
var G__69819 = (i__69810 + (1));
i__69810 = G__69819;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__69811),iter__69808(cljs.core.chunk_rest(s__69809__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__69811),null);
}
} else
{var s = cljs.core.first(s__69809__$2);return cljs.core.cons(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.constant$keyword$1274.cljs$core$IFn$_invoke$arity$1(s)),schema.core.explain(cljs.core.constant$keyword$1336.cljs$core$IFn$_invoke$arity$1(s))),(cljs.core.truth_(s.optional_QMARK_)?new cljs.core.Symbol(null,"optional","optional",-600484260,null):new cljs.core.Symbol(null,"one","one",-1719427865,null))),iter__69808(cljs.core.rest(s__69809__$2)));
}
} else
{return null;
}
break;
}
});})(vec__69807,singles,multi,this$__$1))
,null,null));
});})(vec__69807,singles,multi,this$__$1))
;return iter__4375__auto__(singles);
})(),(cljs.core.truth_(multi)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.explain(multi)], null):null)));
});
/**
* A schema for a pair of schemas and their names
*/
schema.core.pair = (function pair(first_schema,first_name,second_schema,second_name){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(first_schema,first_name),schema.core.one(second_schema,second_name)], null);
});

/**
* @constructor
* @param {*} klass
* @param {*} schema
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
schema.core.Record = (function (klass,schema,__meta,__extmap){
this.klass = klass;
this.schema = schema;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>2){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
schema.core.Record.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4232__auto__,k__4233__auto__){var self__ = this;
var this__4232__auto____$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4232__auto____$1,k__4233__auto__,null);
});
schema.core.Record.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4234__auto__,k69821,else__4235__auto__){var self__ = this;
var this__4234__auto____$1 = this;var G__69823 = (((k69821 instanceof cljs.core.Keyword))?k69821.fqn:null);switch (G__69823) {
case "schema":
return self__.schema;

break;
case "klass":
return self__.klass;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k69821,else__4235__auto__);

}
});
schema.core.Record.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4246__auto__,writer__4247__auto__,opts__4248__auto__){var self__ = this;
var this__4246__auto____$1 = this;var pr_pair__4249__auto__ = ((function (this__4246__auto____$1){
return (function (keyval__4250__auto__){return cljs.core.pr_sequential_writer(writer__4247__auto__,cljs.core.pr_writer,""," ","",opts__4248__auto__,keyval__4250__auto__);
});})(this__4246__auto____$1))
;return cljs.core.pr_sequential_writer(writer__4247__auto__,pr_pair__4249__auto__,"#schema.core.Record{",", ","}",opts__4248__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$1352,self__.klass],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$1336,self__.schema],null))], null),self__.__extmap));
});
schema.core.Record.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4230__auto__){var self__ = this;
var this__4230__auto____$1 = this;return self__.__meta;
});
schema.core.Record.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4226__auto__){var self__ = this;
var this__4226__auto____$1 = this;return (new schema.core.Record(self__.klass,self__.schema,self__.__meta,self__.__extmap,self__.__hash));
});
schema.core.Record.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4236__auto__){var self__ = this;
var this__4236__auto____$1 = this;return (2 + cljs.core.count(self__.__extmap));
});
schema.core.Record.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4227__auto__){var self__ = this;
var this__4227__auto____$1 = this;var h__4048__auto__ = self__.__hash;if(!((h__4048__auto__ == null)))
{return h__4048__auto__;
} else
{var h__4048__auto____$1 = cljs.core.hash_imap(this__4227__auto____$1);self__.__hash = h__4048__auto____$1;
return h__4048__auto____$1;
}
});
schema.core.Record.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4228__auto__,other__4229__auto__){var self__ = this;
var this__4228__auto____$1 = this;if(cljs.core.truth_((function (){var and__3625__auto__ = other__4229__auto__;if(cljs.core.truth_(and__3625__auto__))
{return ((this__4228__auto____$1.constructor === other__4229__auto__.constructor)) && (cljs.core.equiv_map(this__4228__auto____$1,other__4229__auto__));
} else
{return and__3625__auto__;
}
})()))
{return true;
} else
{return false;
}
});
schema.core.Record.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4241__auto__,k__4242__auto__){var self__ = this;
var this__4241__auto____$1 = this;if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1336,null,cljs.core.constant$keyword$1352,null], null), null),k__4242__auto__))
{return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4241__auto____$1),self__.__meta),k__4242__auto__);
} else
{return (new schema.core.Record(self__.klass,self__.schema,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4242__auto__)),null));
}
});
schema.core.Record.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4239__auto__,k__4240__auto__,G__69820){var self__ = this;
var this__4239__auto____$1 = this;var pred__69824 = cljs.core.keyword_identical_QMARK_;var expr__69825 = k__4240__auto__;if(cljs.core.truth_((function (){var G__69827 = cljs.core.constant$keyword$1352;var G__69828 = expr__69825;return (pred__69824.cljs$core$IFn$_invoke$arity$2 ? pred__69824.cljs$core$IFn$_invoke$arity$2(G__69827,G__69828) : pred__69824.call(null,G__69827,G__69828));
})()))
{return (new schema.core.Record(G__69820,self__.schema,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__69829 = cljs.core.constant$keyword$1336;var G__69830 = expr__69825;return (pred__69824.cljs$core$IFn$_invoke$arity$2 ? pred__69824.cljs$core$IFn$_invoke$arity$2(G__69829,G__69830) : pred__69824.call(null,G__69829,G__69830));
})()))
{return (new schema.core.Record(self__.klass,G__69820,self__.__meta,self__.__extmap,null));
} else
{return (new schema.core.Record(self__.klass,self__.schema,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4240__auto__,G__69820),null));
}
}
});
schema.core.Record.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4244__auto__){var self__ = this;
var this__4244__auto____$1 = this;return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$1352,self__.klass],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$1336,self__.schema],null))], null),self__.__extmap));
});
schema.core.Record.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4231__auto__,G__69820){var self__ = this;
var this__4231__auto____$1 = this;return (new schema.core.Record(self__.klass,self__.schema,G__69820,self__.__extmap,self__.__hash));
});
schema.core.Record.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4237__auto__,entry__4238__auto__){var self__ = this;
var this__4237__auto____$1 = this;if(cljs.core.vector_QMARK_(entry__4238__auto__))
{return cljs.core._assoc(this__4237__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4238__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4238__auto__,(1)));
} else
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4237__auto____$1,entry__4238__auto__);
}
});
schema.core.Record.prototype.schema$core$Schema$ = true;
schema.core.Record.prototype.schema$core$Schema$walker$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var map_checker = (schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1 ? schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1(self__.schema) : schema.core.subschema_walker.call(null,self__.schema));var pred_checker = (function (){var temp__4126__auto__ = cljs.core.constant$keyword$1353.cljs$core$IFn$_invoke$arity$1(this$__$1);if(cljs.core.truth_(temp__4126__auto__))
{var evf = temp__4126__auto__;return (schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1 ? schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1(schema.core.pred.cljs$core$IFn$_invoke$arity$1(evf)) : schema.core.subschema_walker.call(null,schema.core.pred.cljs$core$IFn$_invoke$arity$1(evf)));
} else
{return null;
}
})();return ((function (map_checker,pred_checker,this$__$1){
return (function (r){var or__3637__auto__ = (((r instanceof self__.klass))?null:schema.utils.error(schema.utils.__GT_ValidationError(this$__$1,r,(new cljs.core.Delay(((function (map_checker,pred_checker,this$__$1){
return (function (){return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.utils.value_name(r)),self__.klass),new cljs.core.Symbol(null,"instance?","instance?",1075939923,null));
});})(map_checker,pred_checker,this$__$1))
,null)),null)));if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{var res = (function (){var G__69831 = r;return (map_checker.cljs$core$IFn$_invoke$arity$1 ? map_checker.cljs$core$IFn$_invoke$arity$1(G__69831) : map_checker.call(null,G__69831));
})();if(schema.utils.error_QMARK_(res))
{return res;
} else
{var pred_res = (cljs.core.truth_(pred_checker)?(function (){var G__69832 = r;return (pred_checker.cljs$core$IFn$_invoke$arity$1 ? pred_checker.cljs$core$IFn$_invoke$arity$1(G__69832) : pred_checker.call(null,G__69832));
})():null);if(schema.utils.error_QMARK_(pred_res))
{return pred_res;
} else
{return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([r,res], 0));
}
}
}
});
;})(map_checker,pred_checker,this$__$1))
});
schema.core.Record.prototype.schema$core$Schema$explain$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.core.explain(self__.schema)),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([self__.klass], 0)))),new cljs.core.Symbol(null,"record","record",861424668,null));
});
schema.core.Record.cljs$lang$type = true;
schema.core.Record.cljs$lang$ctorPrSeq = (function (this__4266__auto__){return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/Record");
});
schema.core.Record.cljs$lang$ctorPrWriter = (function (this__4266__auto__,writer__4267__auto__){return cljs.core._write(writer__4267__auto__,"schema.core/Record");
});
schema.core.__GT_Record = (function __GT_Record(klass,schema__$1){return (new schema.core.Record(klass,schema__$1));
});
schema.core.map__GT_Record = (function map__GT_Record(G__69822){return (new schema.core.Record(cljs.core.constant$keyword$1352.cljs$core$IFn$_invoke$arity$1(G__69822),cljs.core.constant$keyword$1336.cljs$core$IFn$_invoke$arity$1(G__69822),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__69822,cljs.core.constant$keyword$1352,cljs.core.array_seq([cljs.core.constant$keyword$1336], 0))));
});
/**
* A Record instance of type klass, whose elements match map schema 'schema'.
*/
schema.core.record = (function record(klass,schema__$1){if(cljs.core.map_QMARK_(schema__$1))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Expected map, got %s",cljs.core.array_seq([schema.utils.type_of(schema__$1)], 0))));
}
return (new schema.core.Record(klass,schema__$1));
});
schema.core.explain_input_schema = (function explain_input_schema(input_schema){var vec__69837 = cljs.core.split_with((function (p1__69834_SHARP_){return (p1__69834_SHARP_ instanceof schema.core.One);
}),input_schema);var required = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69837,(0),null);var more = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69837,(1),null);return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__69837,required,more){
return (function (p1__69835_SHARP_){return schema.core.explain(p1__69835_SHARP_.schema);
});})(vec__69837,required,more))
,required),((cljs.core.seq(more))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",-2144855648,null),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(schema.core.explain,more)], null):null));
});

/**
* @constructor
* @param {*} output_schema
* @param {*} input_schemas
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
schema.core.FnSchema = (function (output_schema,input_schemas,__meta,__extmap){
this.output_schema = output_schema;
this.input_schemas = input_schemas;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>2){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
schema.core.FnSchema.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4232__auto__,k__4233__auto__){var self__ = this;
var this__4232__auto____$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4232__auto____$1,k__4233__auto__,null);
});
schema.core.FnSchema.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4234__auto__,k69839,else__4235__auto__){var self__ = this;
var this__4234__auto____$1 = this;var G__69841 = (((k69839 instanceof cljs.core.Keyword))?k69839.fqn:null);switch (G__69841) {
case "input-schemas":
return self__.input_schemas;

break;
case "output-schema":
return self__.output_schema;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k69839,else__4235__auto__);

}
});
schema.core.FnSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4246__auto__,writer__4247__auto__,opts__4248__auto__){var self__ = this;
var this__4246__auto____$1 = this;var pr_pair__4249__auto__ = ((function (this__4246__auto____$1){
return (function (keyval__4250__auto__){return cljs.core.pr_sequential_writer(writer__4247__auto__,cljs.core.pr_writer,""," ","",opts__4248__auto__,keyval__4250__auto__);
});})(this__4246__auto____$1))
;return cljs.core.pr_sequential_writer(writer__4247__auto__,pr_pair__4249__auto__,"#schema.core.FnSchema{",", ","}",opts__4248__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$1354,self__.output_schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$1355,self__.input_schemas],null))], null),self__.__extmap));
});
schema.core.FnSchema.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4230__auto__){var self__ = this;
var this__4230__auto____$1 = this;return self__.__meta;
});
schema.core.FnSchema.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4226__auto__){var self__ = this;
var this__4226__auto____$1 = this;return (new schema.core.FnSchema(self__.output_schema,self__.input_schemas,self__.__meta,self__.__extmap,self__.__hash));
});
schema.core.FnSchema.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4236__auto__){var self__ = this;
var this__4236__auto____$1 = this;return (2 + cljs.core.count(self__.__extmap));
});
schema.core.FnSchema.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4227__auto__){var self__ = this;
var this__4227__auto____$1 = this;var h__4048__auto__ = self__.__hash;if(!((h__4048__auto__ == null)))
{return h__4048__auto__;
} else
{var h__4048__auto____$1 = cljs.core.hash_imap(this__4227__auto____$1);self__.__hash = h__4048__auto____$1;
return h__4048__auto____$1;
}
});
schema.core.FnSchema.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4228__auto__,other__4229__auto__){var self__ = this;
var this__4228__auto____$1 = this;if(cljs.core.truth_((function (){var and__3625__auto__ = other__4229__auto__;if(cljs.core.truth_(and__3625__auto__))
{return ((this__4228__auto____$1.constructor === other__4229__auto__.constructor)) && (cljs.core.equiv_map(this__4228__auto____$1,other__4229__auto__));
} else
{return and__3625__auto__;
}
})()))
{return true;
} else
{return false;
}
});
schema.core.FnSchema.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4241__auto__,k__4242__auto__){var self__ = this;
var this__4241__auto____$1 = this;if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1354,null,cljs.core.constant$keyword$1355,null], null), null),k__4242__auto__))
{return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4241__auto____$1),self__.__meta),k__4242__auto__);
} else
{return (new schema.core.FnSchema(self__.output_schema,self__.input_schemas,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4242__auto__)),null));
}
});
schema.core.FnSchema.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4239__auto__,k__4240__auto__,G__69838){var self__ = this;
var this__4239__auto____$1 = this;var pred__69842 = cljs.core.keyword_identical_QMARK_;var expr__69843 = k__4240__auto__;if(cljs.core.truth_((function (){var G__69845 = cljs.core.constant$keyword$1354;var G__69846 = expr__69843;return (pred__69842.cljs$core$IFn$_invoke$arity$2 ? pred__69842.cljs$core$IFn$_invoke$arity$2(G__69845,G__69846) : pred__69842.call(null,G__69845,G__69846));
})()))
{return (new schema.core.FnSchema(G__69838,self__.input_schemas,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__69847 = cljs.core.constant$keyword$1355;var G__69848 = expr__69843;return (pred__69842.cljs$core$IFn$_invoke$arity$2 ? pred__69842.cljs$core$IFn$_invoke$arity$2(G__69847,G__69848) : pred__69842.call(null,G__69847,G__69848));
})()))
{return (new schema.core.FnSchema(self__.output_schema,G__69838,self__.__meta,self__.__extmap,null));
} else
{return (new schema.core.FnSchema(self__.output_schema,self__.input_schemas,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4240__auto__,G__69838),null));
}
}
});
schema.core.FnSchema.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4244__auto__){var self__ = this;
var this__4244__auto____$1 = this;return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$1354,self__.output_schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$1355,self__.input_schemas],null))], null),self__.__extmap));
});
schema.core.FnSchema.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4231__auto__,G__69838){var self__ = this;
var this__4231__auto____$1 = this;return (new schema.core.FnSchema(self__.output_schema,self__.input_schemas,G__69838,self__.__extmap,self__.__hash));
});
schema.core.FnSchema.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4237__auto__,entry__4238__auto__){var self__ = this;
var this__4237__auto____$1 = this;if(cljs.core.vector_QMARK_(entry__4238__auto__))
{return cljs.core._assoc(this__4237__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4238__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4238__auto__,(1)));
} else
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4237__auto____$1,entry__4238__auto__);
}
});
schema.core.FnSchema.prototype.schema$core$Schema$ = true;
schema.core.FnSchema.prototype.schema$core$Schema$walker$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return ((function (this$__$1){
return (function (x){if(cljs.core.fn_QMARK_(x))
{return x;
} else
{return schema.utils.error(schema.utils.__GT_ValidationError(this$__$1,x,(new cljs.core.Delay(((function (this$__$1){
return (function (){return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.utils.value_name(x)),new cljs.core.Symbol(null,"fn?","fn?",1820990818,null));
});})(this$__$1))
,null)),null));
}
});
;})(this$__$1))
});
schema.core.FnSchema.prototype.schema$core$Schema$explain$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if((cljs.core.count(self__.input_schemas) > (1)))
{return cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol(null,"=>*","=>*",1909690043,null),schema.core.explain(self__.output_schema),cljs.core.map.cljs$core$IFn$_invoke$arity$2(schema.core.explain_input_schema,self__.input_schemas));
} else
{return cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol(null,"=>","=>",-813269641,null),schema.core.explain(self__.output_schema),schema.core.explain_input_schema(cljs.core.first(self__.input_schemas)));
}
});
schema.core.FnSchema.cljs$lang$type = true;
schema.core.FnSchema.cljs$lang$ctorPrSeq = (function (this__4266__auto__){return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/FnSchema");
});
schema.core.FnSchema.cljs$lang$ctorPrWriter = (function (this__4266__auto__,writer__4267__auto__){return cljs.core._write(writer__4267__auto__,"schema.core/FnSchema");
});
schema.core.__GT_FnSchema = (function __GT_FnSchema(output_schema,input_schemas){return (new schema.core.FnSchema(output_schema,input_schemas));
});
schema.core.map__GT_FnSchema = (function map__GT_FnSchema(G__69840){return (new schema.core.FnSchema(cljs.core.constant$keyword$1354.cljs$core$IFn$_invoke$arity$1(G__69840),cljs.core.constant$keyword$1355.cljs$core$IFn$_invoke$arity$1(G__69840),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__69840,cljs.core.constant$keyword$1354,cljs.core.array_seq([cljs.core.constant$keyword$1355], 0))));
});
schema.core.arity = (function arity(input_schema){if(cljs.core.seq(input_schema))
{if((cljs.core.last(input_schema) instanceof schema.core.One))
{return cljs.core.count(input_schema);
} else
{return Number.MAX_VALUE;
}
} else
{return (0);
}
});
/**
* A function outputting a value in output schema, whose argument vector must match one of
* input-schemas, each of which should be a sequence schema.
* Currently function schemas are purely descriptive; they validate against any function,
* regargless of actual input and output types.
*/
schema.core.make_fn_schema = (function make_fn_schema(output_schema,input_schemas){if(cljs.core.seq(input_schemas))
{} else
{throw (new Error(schema.utils.format_STAR_("Function must have at least one input schema")));
}
if(cljs.core.every_QMARK_(cljs.core.vector_QMARK_,input_schemas))
{} else
{throw (new Error(schema.utils.format_STAR_("Each arity must be a vector.")));
}
if(cljs.core.truth_(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.distinct_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(schema.core.arity,input_schemas))))
{} else
{throw (new Error(schema.utils.format_STAR_("Arities must be distinct")));
}
return (new schema.core.FnSchema(output_schema,cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(schema.core.arity,input_schemas)));
});
/**
* Get the current global schema validation setting.
*/
schema.core.fn_validation_QMARK_ = (function fn_validation_QMARK_(){return schema.utils.use_fn_validation.get_cell();
});
/**
* Globally turn on schema validation for all s/fn and s/defn instances.
*/
schema.core.set_fn_validation_BANG_ = (function set_fn_validation_BANG_(on_QMARK_){return schema.utils.use_fn_validation.set_cell(on_QMARK_);
});
/**
* Attach the schema to fn f at runtime, extractable by fn-schema.
*/
schema.core.schematize_fn = (function schematize_fn(f,schema__$1){return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(f,cljs.core.assoc,cljs.core.constant$keyword$1336,schema__$1);
});
/**
* Produce the schema for a function defined with s/fn or s/defn.
*/
schema.core.fn_schema = (function fn_schema(f){if(cljs.core.fn_QMARK_(f))
{} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Non-function %s",cljs.core.array_seq([schema.utils.type_of(f)], 0))));
}
var or__3637__auto__ = schema.utils.class_schema(schema.utils.fn_schema_bearer(f));if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{var m__13341__auto__ = cljs.core.meta(f);var k__13342__auto__ = cljs.core.constant$keyword$1336;var temp__4124__auto__ = cljs.core.find(m__13341__auto__,k__13342__auto__);if(cljs.core.truth_(temp__4124__auto__))
{var pair__13343__auto__ = temp__4124__auto__;return cljs.core.val(pair__13343__auto__);
} else
{throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Key %s not found in %s",cljs.core.array_seq([k__13342__auto__,m__13341__auto__], 0))));
}
}
});
schema.core.schema_with_name = (function schema_with_name(schema__$1,name){return cljs.core.with_meta(schema__$1,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1274,name], null));
});
schema.core.schema_name = (function schema_name(schema__$1){return cljs.core.constant$keyword$1274.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(schema__$1));
});
