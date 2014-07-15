// Compiled by ClojureScript 0.0-2261
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('clojure.string');
goog.require('sablono.util');
goog.require('goog.dom');
goog.require('goog.dom');
goog.require('sablono.interpreter');
goog.require('sablono.interpreter');
goog.require('sablono.util');
goog.require('clojure.walk');
goog.require('clojure.string');
/**
* Add an optional attribute argument to a function that returns a element vector.
*/
sablono.core.wrap_attrs = (function wrap_attrs(func){return (function() { 
var G__28738__delegate = function (args){if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))
{var vec__28737 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));var tag = cljs.core.nth.call(null,vec__28737,(0),null);var body = cljs.core.nthnext.call(null,vec__28737,(1));if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body)))
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__28738 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__28738__delegate.call(this,args);};
G__28738.cljs$lang$maxFixedArity = 0;
G__28738.cljs$lang$applyTo = (function (arglist__28739){
var args = cljs.core.seq(arglist__28739);
return G__28738__delegate(args);
});
G__28738.cljs$core$IFn$_invoke$arity$variadic = G__28738__delegate;
return G__28738;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4268__auto__ = (function iter__28744(s__28745){return (new cljs.core.LazySeq(null,(function (){var s__28745__$1 = s__28745;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__28745__$1);if(temp__4126__auto__)
{var s__28745__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__28745__$2))
{var c__4266__auto__ = cljs.core.chunk_first.call(null,s__28745__$2);var size__4267__auto__ = cljs.core.count.call(null,c__4266__auto__);var b__28747 = cljs.core.chunk_buffer.call(null,size__4267__auto__);if((function (){var i__28746 = (0);while(true){
if((i__28746 < size__4267__auto__))
{var args = cljs.core._nth.call(null,c__4266__auto__,i__28746);cljs.core.chunk_append.call(null,b__28747,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));
{
var G__28748 = (i__28746 + (1));
i__28746 = G__28748;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28747),iter__28744.call(null,cljs.core.chunk_rest.call(null,s__28745__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28747),null);
}
} else
{var args = cljs.core.first.call(null,s__28745__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),iter__28744.call(null,cljs.core.rest.call(null,s__28745__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4268__auto__.call(null,arglists);
});
/**
* Render the React `component` as an HTML string.
*/
sablono.core.render = (function render(component){return React.renderComponentToString(component);
});
/**
* Include a list of external stylesheet files.
* @param {...*} var_args
*/
sablono.core.include_css = (function() { 
var include_css__delegate = function (styles){var iter__4268__auto__ = (function iter__28753(s__28754){return (new cljs.core.LazySeq(null,(function (){var s__28754__$1 = s__28754;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__28754__$1);if(temp__4126__auto__)
{var s__28754__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__28754__$2))
{var c__4266__auto__ = cljs.core.chunk_first.call(null,s__28754__$2);var size__4267__auto__ = cljs.core.count.call(null,c__4266__auto__);var b__28756 = cljs.core.chunk_buffer.call(null,size__4267__auto__);if((function (){var i__28755 = (0);while(true){
if((i__28755 < size__4267__auto__))
{var style = cljs.core._nth.call(null,c__4266__auto__,i__28755);cljs.core.chunk_append.call(null,b__28756,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));
{
var G__28757 = (i__28755 + (1));
i__28755 = G__28757;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28756),iter__28753.call(null,cljs.core.chunk_rest.call(null,s__28754__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28756),null);
}
} else
{var style = cljs.core.first.call(null,s__28754__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),iter__28753.call(null,cljs.core.rest.call(null,s__28754__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4268__auto__.call(null,styles);
};
var include_css = function (var_args){
var styles = null;if (arguments.length > 0) {
  styles = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return include_css__delegate.call(this,styles);};
include_css.cljs$lang$maxFixedArity = 0;
include_css.cljs$lang$applyTo = (function (arglist__28758){
var styles = cljs.core.seq(arglist__28758);
return include_css__delegate(styles);
});
include_css.cljs$core$IFn$_invoke$arity$variadic = include_css__delegate;
return include_css;
})()
;
/**
* Include the JavaScript library at `src`.
*/
sablono.core.include_js = (function include_js(src){return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",{"src": src}));
});
/**
* Include Facebook's React JavaScript library.
*/
sablono.core.include_react = (function include_react(){return sablono.core.include_js.call(null,"http://fb.me/react-0.9.0.js");
});
/**
* Wraps some content in a HTML hyperlink with the supplied URL.
* @param {...*} var_args
*/
sablono.core.link_to28759 = (function() { 
var link_to28759__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to28759 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to28759__delegate.call(this,url,content);};
link_to28759.cljs$lang$maxFixedArity = 1;
link_to28759.cljs$lang$applyTo = (function (arglist__28760){
var url = cljs.core.first(arglist__28760);
var content = cljs.core.rest(arglist__28760);
return link_to28759__delegate(url,content);
});
link_to28759.cljs$core$IFn$_invoke$arity$variadic = link_to28759__delegate;
return link_to28759;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to28759);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to28761 = (function() { 
var mail_to28761__delegate = function (e_mail,p__28762){var vec__28764 = p__28762;var content = cljs.core.nth.call(null,vec__28764,(0),null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),("mailto:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail))], null),(function (){var or__3543__auto__ = content;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to28761 = function (e_mail,var_args){
var p__28762 = null;if (arguments.length > 1) {
  p__28762 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to28761__delegate.call(this,e_mail,p__28762);};
mail_to28761.cljs$lang$maxFixedArity = 1;
mail_to28761.cljs$lang$applyTo = (function (arglist__28765){
var e_mail = cljs.core.first(arglist__28765);
var p__28762 = cljs.core.rest(arglist__28765);
return mail_to28761__delegate(e_mail,p__28762);
});
mail_to28761.cljs$core$IFn$_invoke$arity$variadic = mail_to28761__delegate;
return mail_to28761;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to28761);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list28766 = (function unordered_list28766(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4268__auto__ = (function iter__28771(s__28772){return (new cljs.core.LazySeq(null,(function (){var s__28772__$1 = s__28772;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__28772__$1);if(temp__4126__auto__)
{var s__28772__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__28772__$2))
{var c__4266__auto__ = cljs.core.chunk_first.call(null,s__28772__$2);var size__4267__auto__ = cljs.core.count.call(null,c__4266__auto__);var b__28774 = cljs.core.chunk_buffer.call(null,size__4267__auto__);if((function (){var i__28773 = (0);while(true){
if((i__28773 < size__4267__auto__))
{var x = cljs.core._nth.call(null,c__4266__auto__,i__28773);cljs.core.chunk_append.call(null,b__28774,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));
{
var G__28775 = (i__28773 + (1));
i__28773 = G__28775;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28774),iter__28771.call(null,cljs.core.chunk_rest.call(null,s__28772__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28774),null);
}
} else
{var x = cljs.core.first.call(null,s__28772__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__28771.call(null,cljs.core.rest.call(null,s__28772__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4268__auto__.call(null,coll);
})()], null);
});
sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list28766);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list28776 = (function ordered_list28776(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4268__auto__ = (function iter__28781(s__28782){return (new cljs.core.LazySeq(null,(function (){var s__28782__$1 = s__28782;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__28782__$1);if(temp__4126__auto__)
{var s__28782__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__28782__$2))
{var c__4266__auto__ = cljs.core.chunk_first.call(null,s__28782__$2);var size__4267__auto__ = cljs.core.count.call(null,c__4266__auto__);var b__28784 = cljs.core.chunk_buffer.call(null,size__4267__auto__);if((function (){var i__28783 = (0);while(true){
if((i__28783 < size__4267__auto__))
{var x = cljs.core._nth.call(null,c__4266__auto__,i__28783);cljs.core.chunk_append.call(null,b__28784,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));
{
var G__28785 = (i__28783 + (1));
i__28783 = G__28785;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28784),iter__28781.call(null,cljs.core.chunk_rest.call(null,s__28782__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28784),null);
}
} else
{var x = cljs.core.first.call(null,s__28782__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__28781.call(null,cljs.core.rest.call(null,s__28782__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4268__auto__.call(null,coll);
})()], null);
});
sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list28776);
/**
* Create an image element.
*/
sablono.core.image28786 = (function() {
var image28786 = null;
var image28786__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});
var image28786__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});
image28786 = function(src,alt){
switch(arguments.length){
case 1:
return image28786__1.call(this,src);
case 2:
return image28786__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image28786.cljs$core$IFn$_invoke$arity$1 = image28786__1;
image28786.cljs$core$IFn$_invoke$arity$2 = image28786__2;
return image28786;
})()
;
sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image28786);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.call(null,(function (p1__28787_SHARP_,p2__28788_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__28787_SHARP_)+"["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__28788_SHARP_)+"]");
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.call(null,(function (p1__28789_SHARP_,p2__28790_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__28789_SHARP_)+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__28790_SHARP_));
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Creates a new <input> element.
*/
sablono.core.input_field_STAR_ = (function input_field_STAR_(type,name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
/**
* Creates a color input field.
*/
sablono.core.color_field28791 = (function() {
var color_field28791 = null;
var color_field28791__1 = (function (name__10173__auto__){return color_field28791.call(null,name__10173__auto__,null);
});
var color_field28791__2 = (function (name__10173__auto__,value__10174__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))),name__10173__auto__,value__10174__auto__);
});
color_field28791 = function(name__10173__auto__,value__10174__auto__){
switch(arguments.length){
case 1:
return color_field28791__1.call(this,name__10173__auto__);
case 2:
return color_field28791__2.call(this,name__10173__auto__,value__10174__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
color_field28791.cljs$core$IFn$_invoke$arity$1 = color_field28791__1;
color_field28791.cljs$core$IFn$_invoke$arity$2 = color_field28791__2;
return color_field28791;
})()
;
sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field28791);
/**
* Creates a date input field.
*/
sablono.core.date_field28792 = (function() {
var date_field28792 = null;
var date_field28792__1 = (function (name__10173__auto__){return date_field28792.call(null,name__10173__auto__,null);
});
var date_field28792__2 = (function (name__10173__auto__,value__10174__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))),name__10173__auto__,value__10174__auto__);
});
date_field28792 = function(name__10173__auto__,value__10174__auto__){
switch(arguments.length){
case 1:
return date_field28792__1.call(this,name__10173__auto__);
case 2:
return date_field28792__2.call(this,name__10173__auto__,value__10174__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
date_field28792.cljs$core$IFn$_invoke$arity$1 = date_field28792__1;
date_field28792.cljs$core$IFn$_invoke$arity$2 = date_field28792__2;
return date_field28792;
})()
;
sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field28792);
/**
* Creates a datetime input field.
*/
sablono.core.datetime_field28793 = (function() {
var datetime_field28793 = null;
var datetime_field28793__1 = (function (name__10173__auto__){return datetime_field28793.call(null,name__10173__auto__,null);
});
var datetime_field28793__2 = (function (name__10173__auto__,value__10174__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))),name__10173__auto__,value__10174__auto__);
});
datetime_field28793 = function(name__10173__auto__,value__10174__auto__){
switch(arguments.length){
case 1:
return datetime_field28793__1.call(this,name__10173__auto__);
case 2:
return datetime_field28793__2.call(this,name__10173__auto__,value__10174__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_field28793.cljs$core$IFn$_invoke$arity$1 = datetime_field28793__1;
datetime_field28793.cljs$core$IFn$_invoke$arity$2 = datetime_field28793__2;
return datetime_field28793;
})()
;
sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field28793);
/**
* Creates a datetime-local input field.
*/
sablono.core.datetime_local_field28794 = (function() {
var datetime_local_field28794 = null;
var datetime_local_field28794__1 = (function (name__10173__auto__){return datetime_local_field28794.call(null,name__10173__auto__,null);
});
var datetime_local_field28794__2 = (function (name__10173__auto__,value__10174__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))),name__10173__auto__,value__10174__auto__);
});
datetime_local_field28794 = function(name__10173__auto__,value__10174__auto__){
switch(arguments.length){
case 1:
return datetime_local_field28794__1.call(this,name__10173__auto__);
case 2:
return datetime_local_field28794__2.call(this,name__10173__auto__,value__10174__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_local_field28794.cljs$core$IFn$_invoke$arity$1 = datetime_local_field28794__1;
datetime_local_field28794.cljs$core$IFn$_invoke$arity$2 = datetime_local_field28794__2;
return datetime_local_field28794;
})()
;
sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field28794);
/**
* Creates a email input field.
*/
sablono.core.email_field28795 = (function() {
var email_field28795 = null;
var email_field28795__1 = (function (name__10173__auto__){return email_field28795.call(null,name__10173__auto__,null);
});
var email_field28795__2 = (function (name__10173__auto__,value__10174__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))),name__10173__auto__,value__10174__auto__);
});
email_field28795 = function(name__10173__auto__,value__10174__auto__){
switch(arguments.length){
case 1:
return email_field28795__1.call(this,name__10173__auto__);
case 2:
return email_field28795__2.call(this,name__10173__auto__,value__10174__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field28795.cljs$core$IFn$_invoke$arity$1 = email_field28795__1;
email_field28795.cljs$core$IFn$_invoke$arity$2 = email_field28795__2;
return email_field28795;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field28795);
/**
* Creates a file input field.
*/
sablono.core.file_field28796 = (function() {
var file_field28796 = null;
var file_field28796__1 = (function (name__10173__auto__){return file_field28796.call(null,name__10173__auto__,null);
});
var file_field28796__2 = (function (name__10173__auto__,value__10174__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))),name__10173__auto__,value__10174__auto__);
});
file_field28796 = function(name__10173__auto__,value__10174__auto__){
switch(arguments.length){
case 1:
return file_field28796__1.call(this,name__10173__auto__);
case 2:
return file_field28796__2.call(this,name__10173__auto__,value__10174__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
file_field28796.cljs$core$IFn$_invoke$arity$1 = file_field28796__1;
file_field28796.cljs$core$IFn$_invoke$arity$2 = file_field28796__2;
return file_field28796;
})()
;
sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field28796);
/**
* Creates a hidden input field.
*/
sablono.core.hidden_field28797 = (function() {
var hidden_field28797 = null;
var hidden_field28797__1 = (function (name__10173__auto__){return hidden_field28797.call(null,name__10173__auto__,null);
});
var hidden_field28797__2 = (function (name__10173__auto__,value__10174__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))),name__10173__auto__,value__10174__auto__);
});
hidden_field28797 = function(name__10173__auto__,value__10174__auto__){
switch(arguments.length){
case 1:
return hidden_field28797__1.call(this,name__10173__auto__);
case 2:
return hidden_field28797__2.call(this,name__10173__auto__,value__10174__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field28797.cljs$core$IFn$_invoke$arity$1 = hidden_field28797__1;
hidden_field28797.cljs$core$IFn$_invoke$arity$2 = hidden_field28797__2;
return hidden_field28797;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field28797);
/**
* Creates a month input field.
*/
sablono.core.month_field28798 = (function() {
var month_field28798 = null;
var month_field28798__1 = (function (name__10173__auto__){return month_field28798.call(null,name__10173__auto__,null);
});
var month_field28798__2 = (function (name__10173__auto__,value__10174__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))),name__10173__auto__,value__10174__auto__);
});
month_field28798 = function(name__10173__auto__,value__10174__auto__){
switch(arguments.length){
case 1:
return month_field28798__1.call(this,name__10173__auto__);
case 2:
return month_field28798__2.call(this,name__10173__auto__,value__10174__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
month_field28798.cljs$core$IFn$_invoke$arity$1 = month_field28798__1;
month_field28798.cljs$core$IFn$_invoke$arity$2 = month_field28798__2;
return month_field28798;
})()
;
sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field28798);
/**
* Creates a number input field.
*/
sablono.core.number_field28799 = (function() {
var number_field28799 = null;
var number_field28799__1 = (function (name__10173__auto__){return number_field28799.call(null,name__10173__auto__,null);
});
var number_field28799__2 = (function (name__10173__auto__,value__10174__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))),name__10173__auto__,value__10174__auto__);
});
number_field28799 = function(name__10173__auto__,value__10174__auto__){
switch(arguments.length){
case 1:
return number_field28799__1.call(this,name__10173__auto__);
case 2:
return number_field28799__2.call(this,name__10173__auto__,value__10174__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
number_field28799.cljs$core$IFn$_invoke$arity$1 = number_field28799__1;
number_field28799.cljs$core$IFn$_invoke$arity$2 = number_field28799__2;
return number_field28799;
})()
;
sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field28799);
/**
* Creates a password input field.
*/
sablono.core.password_field28800 = (function() {
var password_field28800 = null;
var password_field28800__1 = (function (name__10173__auto__){return password_field28800.call(null,name__10173__auto__,null);
});
var password_field28800__2 = (function (name__10173__auto__,value__10174__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))),name__10173__auto__,value__10174__auto__);
});
password_field28800 = function(name__10173__auto__,value__10174__auto__){
switch(arguments.length){
case 1:
return password_field28800__1.call(this,name__10173__auto__);
case 2:
return password_field28800__2.call(this,name__10173__auto__,value__10174__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field28800.cljs$core$IFn$_invoke$arity$1 = password_field28800__1;
password_field28800.cljs$core$IFn$_invoke$arity$2 = password_field28800__2;
return password_field28800;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field28800);
/**
* Creates a range input field.
*/
sablono.core.range_field28801 = (function() {
var range_field28801 = null;
var range_field28801__1 = (function (name__10173__auto__){return range_field28801.call(null,name__10173__auto__,null);
});
var range_field28801__2 = (function (name__10173__auto__,value__10174__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))),name__10173__auto__,value__10174__auto__);
});
range_field28801 = function(name__10173__auto__,value__10174__auto__){
switch(arguments.length){
case 1:
return range_field28801__1.call(this,name__10173__auto__);
case 2:
return range_field28801__2.call(this,name__10173__auto__,value__10174__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range_field28801.cljs$core$IFn$_invoke$arity$1 = range_field28801__1;
range_field28801.cljs$core$IFn$_invoke$arity$2 = range_field28801__2;
return range_field28801;
})()
;
sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field28801);
/**
* Creates a search input field.
*/
sablono.core.search_field28802 = (function() {
var search_field28802 = null;
var search_field28802__1 = (function (name__10173__auto__){return search_field28802.call(null,name__10173__auto__,null);
});
var search_field28802__2 = (function (name__10173__auto__,value__10174__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))),name__10173__auto__,value__10174__auto__);
});
search_field28802 = function(name__10173__auto__,value__10174__auto__){
switch(arguments.length){
case 1:
return search_field28802__1.call(this,name__10173__auto__);
case 2:
return search_field28802__2.call(this,name__10173__auto__,value__10174__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
search_field28802.cljs$core$IFn$_invoke$arity$1 = search_field28802__1;
search_field28802.cljs$core$IFn$_invoke$arity$2 = search_field28802__2;
return search_field28802;
})()
;
sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field28802);
/**
* Creates a tel input field.
*/
sablono.core.tel_field28803 = (function() {
var tel_field28803 = null;
var tel_field28803__1 = (function (name__10173__auto__){return tel_field28803.call(null,name__10173__auto__,null);
});
var tel_field28803__2 = (function (name__10173__auto__,value__10174__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))),name__10173__auto__,value__10174__auto__);
});
tel_field28803 = function(name__10173__auto__,value__10174__auto__){
switch(arguments.length){
case 1:
return tel_field28803__1.call(this,name__10173__auto__);
case 2:
return tel_field28803__2.call(this,name__10173__auto__,value__10174__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tel_field28803.cljs$core$IFn$_invoke$arity$1 = tel_field28803__1;
tel_field28803.cljs$core$IFn$_invoke$arity$2 = tel_field28803__2;
return tel_field28803;
})()
;
sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field28803);
/**
* Creates a text input field.
*/
sablono.core.text_field28804 = (function() {
var text_field28804 = null;
var text_field28804__1 = (function (name__10173__auto__){return text_field28804.call(null,name__10173__auto__,null);
});
var text_field28804__2 = (function (name__10173__auto__,value__10174__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))),name__10173__auto__,value__10174__auto__);
});
text_field28804 = function(name__10173__auto__,value__10174__auto__){
switch(arguments.length){
case 1:
return text_field28804__1.call(this,name__10173__auto__);
case 2:
return text_field28804__2.call(this,name__10173__auto__,value__10174__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field28804.cljs$core$IFn$_invoke$arity$1 = text_field28804__1;
text_field28804.cljs$core$IFn$_invoke$arity$2 = text_field28804__2;
return text_field28804;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field28804);
/**
* Creates a time input field.
*/
sablono.core.time_field28805 = (function() {
var time_field28805 = null;
var time_field28805__1 = (function (name__10173__auto__){return time_field28805.call(null,name__10173__auto__,null);
});
var time_field28805__2 = (function (name__10173__auto__,value__10174__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))),name__10173__auto__,value__10174__auto__);
});
time_field28805 = function(name__10173__auto__,value__10174__auto__){
switch(arguments.length){
case 1:
return time_field28805__1.call(this,name__10173__auto__);
case 2:
return time_field28805__2.call(this,name__10173__auto__,value__10174__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
time_field28805.cljs$core$IFn$_invoke$arity$1 = time_field28805__1;
time_field28805.cljs$core$IFn$_invoke$arity$2 = time_field28805__2;
return time_field28805;
})()
;
sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field28805);
/**
* Creates a url input field.
*/
sablono.core.url_field28806 = (function() {
var url_field28806 = null;
var url_field28806__1 = (function (name__10173__auto__){return url_field28806.call(null,name__10173__auto__,null);
});
var url_field28806__2 = (function (name__10173__auto__,value__10174__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))),name__10173__auto__,value__10174__auto__);
});
url_field28806 = function(name__10173__auto__,value__10174__auto__){
switch(arguments.length){
case 1:
return url_field28806__1.call(this,name__10173__auto__);
case 2:
return url_field28806__2.call(this,name__10173__auto__,value__10174__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
url_field28806.cljs$core$IFn$_invoke$arity$1 = url_field28806__1;
url_field28806.cljs$core$IFn$_invoke$arity$2 = url_field28806__2;
return url_field28806;
})()
;
sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field28806);
/**
* Creates a week input field.
*/
sablono.core.week_field28807 = (function() {
var week_field28807 = null;
var week_field28807__1 = (function (name__10173__auto__){return week_field28807.call(null,name__10173__auto__,null);
});
var week_field28807__2 = (function (name__10173__auto__,value__10174__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))),name__10173__auto__,value__10174__auto__);
});
week_field28807 = function(name__10173__auto__,value__10174__auto__){
switch(arguments.length){
case 1:
return week_field28807__1.call(this,name__10173__auto__);
case 2:
return week_field28807__2.call(this,name__10173__auto__,value__10174__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
week_field28807.cljs$core$IFn$_invoke$arity$1 = week_field28807__1;
week_field28807.cljs$core$IFn$_invoke$arity$2 = week_field28807__2;
return week_field28807;
})()
;
sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field28807);
sablono.core.file_upload = sablono.core.file_field;
/**
* Creates a check box.
*/
sablono.core.check_box28808 = (function() {
var check_box28808 = null;
var check_box28808__1 = (function (name){return check_box28808.call(null,name,null);
});
var check_box28808__2 = (function (name,checked_QMARK_){return check_box28808.call(null,name,checked_QMARK_,"true");
});
var check_box28808__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
check_box28808 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box28808__1.call(this,name);
case 2:
return check_box28808__2.call(this,name,checked_QMARK_);
case 3:
return check_box28808__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box28808.cljs$core$IFn$_invoke$arity$1 = check_box28808__1;
check_box28808.cljs$core$IFn$_invoke$arity$2 = check_box28808__2;
check_box28808.cljs$core$IFn$_invoke$arity$3 = check_box28808__3;
return check_box28808;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box28808);
/**
* Creates a radio button.
*/
sablono.core.radio_button28809 = (function() {
var radio_button28809 = null;
var radio_button28809__1 = (function (group){return radio_button28809.call(null,group,null);
});
var radio_button28809__2 = (function (group,checked_QMARK_){return radio_button28809.call(null,group,checked_QMARK_,"true");
});
var radio_button28809__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,group))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,value)))),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
radio_button28809 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button28809__1.call(this,group);
case 2:
return radio_button28809__2.call(this,group,checked_QMARK_);
case 3:
return radio_button28809__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button28809.cljs$core$IFn$_invoke$arity$1 = radio_button28809__1;
radio_button28809.cljs$core$IFn$_invoke$arity$2 = radio_button28809__2;
radio_button28809.cljs$core$IFn$_invoke$arity$3 = radio_button28809__3;
return radio_button28809;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button28809);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options28810 = (function() {
var select_options28810 = null;
var select_options28810__1 = (function (coll){return select_options28810.call(null,coll,null);
});
var select_options28810__2 = (function (coll,selected){var iter__4268__auto__ = (function iter__28819(s__28820){return (new cljs.core.LazySeq(null,(function (){var s__28820__$1 = s__28820;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__28820__$1);if(temp__4126__auto__)
{var s__28820__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__28820__$2))
{var c__4266__auto__ = cljs.core.chunk_first.call(null,s__28820__$2);var size__4267__auto__ = cljs.core.count.call(null,c__4266__auto__);var b__28822 = cljs.core.chunk_buffer.call(null,size__4267__auto__);if((function (){var i__28821 = (0);while(true){
if((i__28821 < size__4267__auto__))
{var x = cljs.core._nth.call(null,c__4266__auto__,i__28821);cljs.core.chunk_append.call(null,b__28822,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__28825 = x;var text = cljs.core.nth.call(null,vec__28825,(0),null);var val = cljs.core.nth.call(null,vec__28825,(1),null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__28825,(2),null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options28810.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)));
{
var G__28827 = (i__28821 + (1));
i__28821 = G__28827;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28822),iter__28819.call(null,cljs.core.chunk_rest.call(null,s__28820__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28822),null);
}
} else
{var x = cljs.core.first.call(null,s__28820__$2);return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__28826 = x;var text = cljs.core.nth.call(null,vec__28826,(0),null);var val = cljs.core.nth.call(null,vec__28826,(1),null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__28826,(2),null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options28810.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__28819.call(null,cljs.core.rest.call(null,s__28820__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4268__auto__.call(null,coll);
});
select_options28810 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options28810__1.call(this,coll);
case 2:
return select_options28810__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options28810.cljs$core$IFn$_invoke$arity$1 = select_options28810__1;
select_options28810.cljs$core$IFn$_invoke$arity$2 = select_options28810__2;
return select_options28810;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options28810);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down28828 = (function() {
var drop_down28828 = null;
var drop_down28828__2 = (function (name,options){return drop_down28828.call(null,name,options,null);
});
var drop_down28828__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down28828 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down28828__2.call(this,name,options);
case 3:
return drop_down28828__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down28828.cljs$core$IFn$_invoke$arity$2 = drop_down28828__2;
drop_down28828.cljs$core$IFn$_invoke$arity$3 = drop_down28828__3;
return drop_down28828;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down28828);
/**
* Creates a text area element.
*/
sablono.core.text_area28829 = (function() {
var text_area28829 = null;
var text_area28829__1 = (function (name){return text_area28829.call(null,name,null);
});
var text_area28829__2 = (function (name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
text_area28829 = function(name,value){
switch(arguments.length){
case 1:
return text_area28829__1.call(this,name);
case 2:
return text_area28829__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area28829.cljs$core$IFn$_invoke$arity$1 = text_area28829__1;
text_area28829.cljs$core$IFn$_invoke$arity$2 = text_area28829__2;
return text_area28829;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area28829);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label28830 = (function label28830(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label28830);
/**
* Creates a submit button.
*/
sablono.core.submit_button28831 = (function submit_button28831(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button28831);
/**
* Creates a form reset button.
*/
sablono.core.reset_button28832 = (function reset_button28832(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button28832);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to28833 = (function() { 
var form_to28833__delegate = function (p__28834,body){var vec__28836 = p__28834;var method = cljs.core.nth.call(null,vec__28836,(0),null);var action = cljs.core.nth.call(null,vec__28836,(1),null);var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));var action_uri = sablono.util.to_uri.call(null,action);return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to28833 = function (p__28834,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to28833__delegate.call(this,p__28834,body);};
form_to28833.cljs$lang$maxFixedArity = 1;
form_to28833.cljs$lang$applyTo = (function (arglist__28837){
var p__28834 = cljs.core.first(arglist__28837);
var body = cljs.core.rest(arglist__28837);
return form_to28833__delegate(p__28834,body);
});
form_to28833.cljs$core$IFn$_invoke$arity$variadic = form_to28833__delegate;
return form_to28833;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to28833);
