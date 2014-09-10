// Compiled by ClojureScript 0.0-2268
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
var G__55534__delegate = function (args){if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))
{var vec__55533 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));var tag = cljs.core.nth.call(null,vec__55533,(0),null);var body = cljs.core.nthnext.call(null,vec__55533,(1));if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body)))
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__55534 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__55534__delegate.call(this,args);};
G__55534.cljs$lang$maxFixedArity = 0;
G__55534.cljs$lang$applyTo = (function (arglist__55535){
var args = cljs.core.seq(arglist__55535);
return G__55534__delegate(args);
});
G__55534.cljs$core$IFn$_invoke$arity$variadic = G__55534__delegate;
return G__55534;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4266__auto__ = (function iter__55540(s__55541){return (new cljs.core.LazySeq(null,(function (){var s__55541__$1 = s__55541;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__55541__$1);if(temp__4126__auto__)
{var s__55541__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__55541__$2))
{var c__4264__auto__ = cljs.core.chunk_first.call(null,s__55541__$2);var size__4265__auto__ = cljs.core.count.call(null,c__4264__auto__);var b__55543 = cljs.core.chunk_buffer.call(null,size__4265__auto__);if((function (){var i__55542 = (0);while(true){
if((i__55542 < size__4265__auto__))
{var args = cljs.core._nth.call(null,c__4264__auto__,i__55542);cljs.core.chunk_append.call(null,b__55543,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));
{
var G__55544 = (i__55542 + (1));
i__55542 = G__55544;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__55543),iter__55540.call(null,cljs.core.chunk_rest.call(null,s__55541__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__55543),null);
}
} else
{var args = cljs.core.first.call(null,s__55541__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),iter__55540.call(null,cljs.core.rest.call(null,s__55541__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4266__auto__.call(null,arglists);
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
var include_css__delegate = function (styles){var iter__4266__auto__ = (function iter__55549(s__55550){return (new cljs.core.LazySeq(null,(function (){var s__55550__$1 = s__55550;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__55550__$1);if(temp__4126__auto__)
{var s__55550__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__55550__$2))
{var c__4264__auto__ = cljs.core.chunk_first.call(null,s__55550__$2);var size__4265__auto__ = cljs.core.count.call(null,c__4264__auto__);var b__55552 = cljs.core.chunk_buffer.call(null,size__4265__auto__);if((function (){var i__55551 = (0);while(true){
if((i__55551 < size__4265__auto__))
{var style = cljs.core._nth.call(null,c__4264__auto__,i__55551);cljs.core.chunk_append.call(null,b__55552,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));
{
var G__55553 = (i__55551 + (1));
i__55551 = G__55553;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__55552),iter__55549.call(null,cljs.core.chunk_rest.call(null,s__55550__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__55552),null);
}
} else
{var style = cljs.core.first.call(null,s__55550__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),iter__55549.call(null,cljs.core.rest.call(null,s__55550__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4266__auto__.call(null,styles);
};
var include_css = function (var_args){
var styles = null;if (arguments.length > 0) {
  styles = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return include_css__delegate.call(this,styles);};
include_css.cljs$lang$maxFixedArity = 0;
include_css.cljs$lang$applyTo = (function (arglist__55554){
var styles = cljs.core.seq(arglist__55554);
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
sablono.core.link_to55555 = (function() { 
var link_to55555__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to55555 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to55555__delegate.call(this,url,content);};
link_to55555.cljs$lang$maxFixedArity = 1;
link_to55555.cljs$lang$applyTo = (function (arglist__55556){
var url = cljs.core.first(arglist__55556);
var content = cljs.core.rest(arglist__55556);
return link_to55555__delegate(url,content);
});
link_to55555.cljs$core$IFn$_invoke$arity$variadic = link_to55555__delegate;
return link_to55555;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to55555);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to55557 = (function() { 
var mail_to55557__delegate = function (e_mail,p__55558){var vec__55560 = p__55558;var content = cljs.core.nth.call(null,vec__55560,(0),null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),("mailto:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail))], null),(function (){var or__3541__auto__ = content;if(cljs.core.truth_(or__3541__auto__))
{return or__3541__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to55557 = function (e_mail,var_args){
var p__55558 = null;if (arguments.length > 1) {
  p__55558 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to55557__delegate.call(this,e_mail,p__55558);};
mail_to55557.cljs$lang$maxFixedArity = 1;
mail_to55557.cljs$lang$applyTo = (function (arglist__55561){
var e_mail = cljs.core.first(arglist__55561);
var p__55558 = cljs.core.rest(arglist__55561);
return mail_to55557__delegate(e_mail,p__55558);
});
mail_to55557.cljs$core$IFn$_invoke$arity$variadic = mail_to55557__delegate;
return mail_to55557;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to55557);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list55562 = (function unordered_list55562(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4266__auto__ = (function iter__55567(s__55568){return (new cljs.core.LazySeq(null,(function (){var s__55568__$1 = s__55568;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__55568__$1);if(temp__4126__auto__)
{var s__55568__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__55568__$2))
{var c__4264__auto__ = cljs.core.chunk_first.call(null,s__55568__$2);var size__4265__auto__ = cljs.core.count.call(null,c__4264__auto__);var b__55570 = cljs.core.chunk_buffer.call(null,size__4265__auto__);if((function (){var i__55569 = (0);while(true){
if((i__55569 < size__4265__auto__))
{var x = cljs.core._nth.call(null,c__4264__auto__,i__55569);cljs.core.chunk_append.call(null,b__55570,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));
{
var G__55571 = (i__55569 + (1));
i__55569 = G__55571;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__55570),iter__55567.call(null,cljs.core.chunk_rest.call(null,s__55568__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__55570),null);
}
} else
{var x = cljs.core.first.call(null,s__55568__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__55567.call(null,cljs.core.rest.call(null,s__55568__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4266__auto__.call(null,coll);
})()], null);
});
sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list55562);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list55572 = (function ordered_list55572(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4266__auto__ = (function iter__55577(s__55578){return (new cljs.core.LazySeq(null,(function (){var s__55578__$1 = s__55578;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__55578__$1);if(temp__4126__auto__)
{var s__55578__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__55578__$2))
{var c__4264__auto__ = cljs.core.chunk_first.call(null,s__55578__$2);var size__4265__auto__ = cljs.core.count.call(null,c__4264__auto__);var b__55580 = cljs.core.chunk_buffer.call(null,size__4265__auto__);if((function (){var i__55579 = (0);while(true){
if((i__55579 < size__4265__auto__))
{var x = cljs.core._nth.call(null,c__4264__auto__,i__55579);cljs.core.chunk_append.call(null,b__55580,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));
{
var G__55581 = (i__55579 + (1));
i__55579 = G__55581;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__55580),iter__55577.call(null,cljs.core.chunk_rest.call(null,s__55578__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__55580),null);
}
} else
{var x = cljs.core.first.call(null,s__55578__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__55577.call(null,cljs.core.rest.call(null,s__55578__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4266__auto__.call(null,coll);
})()], null);
});
sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list55572);
/**
* Create an image element.
*/
sablono.core.image55582 = (function() {
var image55582 = null;
var image55582__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});
var image55582__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});
image55582 = function(src,alt){
switch(arguments.length){
case 1:
return image55582__1.call(this,src);
case 2:
return image55582__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image55582.cljs$core$IFn$_invoke$arity$1 = image55582__1;
image55582.cljs$core$IFn$_invoke$arity$2 = image55582__2;
return image55582;
})()
;
sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image55582);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.call(null,(function (p1__55583_SHARP_,p2__55584_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__55583_SHARP_)+"["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__55584_SHARP_)+"]");
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.call(null,(function (p1__55585_SHARP_,p2__55586_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__55585_SHARP_)+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__55586_SHARP_));
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
sablono.core.color_field55587 = (function() {
var color_field55587 = null;
var color_field55587__1 = (function (name__10244__auto__){return color_field55587.call(null,name__10244__auto__,null);
});
var color_field55587__2 = (function (name__10244__auto__,value__10245__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))),name__10244__auto__,value__10245__auto__);
});
color_field55587 = function(name__10244__auto__,value__10245__auto__){
switch(arguments.length){
case 1:
return color_field55587__1.call(this,name__10244__auto__);
case 2:
return color_field55587__2.call(this,name__10244__auto__,value__10245__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
color_field55587.cljs$core$IFn$_invoke$arity$1 = color_field55587__1;
color_field55587.cljs$core$IFn$_invoke$arity$2 = color_field55587__2;
return color_field55587;
})()
;
sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field55587);
/**
* Creates a date input field.
*/
sablono.core.date_field55588 = (function() {
var date_field55588 = null;
var date_field55588__1 = (function (name__10244__auto__){return date_field55588.call(null,name__10244__auto__,null);
});
var date_field55588__2 = (function (name__10244__auto__,value__10245__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))),name__10244__auto__,value__10245__auto__);
});
date_field55588 = function(name__10244__auto__,value__10245__auto__){
switch(arguments.length){
case 1:
return date_field55588__1.call(this,name__10244__auto__);
case 2:
return date_field55588__2.call(this,name__10244__auto__,value__10245__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
date_field55588.cljs$core$IFn$_invoke$arity$1 = date_field55588__1;
date_field55588.cljs$core$IFn$_invoke$arity$2 = date_field55588__2;
return date_field55588;
})()
;
sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field55588);
/**
* Creates a datetime input field.
*/
sablono.core.datetime_field55589 = (function() {
var datetime_field55589 = null;
var datetime_field55589__1 = (function (name__10244__auto__){return datetime_field55589.call(null,name__10244__auto__,null);
});
var datetime_field55589__2 = (function (name__10244__auto__,value__10245__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))),name__10244__auto__,value__10245__auto__);
});
datetime_field55589 = function(name__10244__auto__,value__10245__auto__){
switch(arguments.length){
case 1:
return datetime_field55589__1.call(this,name__10244__auto__);
case 2:
return datetime_field55589__2.call(this,name__10244__auto__,value__10245__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_field55589.cljs$core$IFn$_invoke$arity$1 = datetime_field55589__1;
datetime_field55589.cljs$core$IFn$_invoke$arity$2 = datetime_field55589__2;
return datetime_field55589;
})()
;
sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field55589);
/**
* Creates a datetime-local input field.
*/
sablono.core.datetime_local_field55590 = (function() {
var datetime_local_field55590 = null;
var datetime_local_field55590__1 = (function (name__10244__auto__){return datetime_local_field55590.call(null,name__10244__auto__,null);
});
var datetime_local_field55590__2 = (function (name__10244__auto__,value__10245__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))),name__10244__auto__,value__10245__auto__);
});
datetime_local_field55590 = function(name__10244__auto__,value__10245__auto__){
switch(arguments.length){
case 1:
return datetime_local_field55590__1.call(this,name__10244__auto__);
case 2:
return datetime_local_field55590__2.call(this,name__10244__auto__,value__10245__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_local_field55590.cljs$core$IFn$_invoke$arity$1 = datetime_local_field55590__1;
datetime_local_field55590.cljs$core$IFn$_invoke$arity$2 = datetime_local_field55590__2;
return datetime_local_field55590;
})()
;
sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field55590);
/**
* Creates a email input field.
*/
sablono.core.email_field55591 = (function() {
var email_field55591 = null;
var email_field55591__1 = (function (name__10244__auto__){return email_field55591.call(null,name__10244__auto__,null);
});
var email_field55591__2 = (function (name__10244__auto__,value__10245__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))),name__10244__auto__,value__10245__auto__);
});
email_field55591 = function(name__10244__auto__,value__10245__auto__){
switch(arguments.length){
case 1:
return email_field55591__1.call(this,name__10244__auto__);
case 2:
return email_field55591__2.call(this,name__10244__auto__,value__10245__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field55591.cljs$core$IFn$_invoke$arity$1 = email_field55591__1;
email_field55591.cljs$core$IFn$_invoke$arity$2 = email_field55591__2;
return email_field55591;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field55591);
/**
* Creates a file input field.
*/
sablono.core.file_field55592 = (function() {
var file_field55592 = null;
var file_field55592__1 = (function (name__10244__auto__){return file_field55592.call(null,name__10244__auto__,null);
});
var file_field55592__2 = (function (name__10244__auto__,value__10245__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))),name__10244__auto__,value__10245__auto__);
});
file_field55592 = function(name__10244__auto__,value__10245__auto__){
switch(arguments.length){
case 1:
return file_field55592__1.call(this,name__10244__auto__);
case 2:
return file_field55592__2.call(this,name__10244__auto__,value__10245__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
file_field55592.cljs$core$IFn$_invoke$arity$1 = file_field55592__1;
file_field55592.cljs$core$IFn$_invoke$arity$2 = file_field55592__2;
return file_field55592;
})()
;
sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field55592);
/**
* Creates a hidden input field.
*/
sablono.core.hidden_field55593 = (function() {
var hidden_field55593 = null;
var hidden_field55593__1 = (function (name__10244__auto__){return hidden_field55593.call(null,name__10244__auto__,null);
});
var hidden_field55593__2 = (function (name__10244__auto__,value__10245__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))),name__10244__auto__,value__10245__auto__);
});
hidden_field55593 = function(name__10244__auto__,value__10245__auto__){
switch(arguments.length){
case 1:
return hidden_field55593__1.call(this,name__10244__auto__);
case 2:
return hidden_field55593__2.call(this,name__10244__auto__,value__10245__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field55593.cljs$core$IFn$_invoke$arity$1 = hidden_field55593__1;
hidden_field55593.cljs$core$IFn$_invoke$arity$2 = hidden_field55593__2;
return hidden_field55593;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field55593);
/**
* Creates a month input field.
*/
sablono.core.month_field55594 = (function() {
var month_field55594 = null;
var month_field55594__1 = (function (name__10244__auto__){return month_field55594.call(null,name__10244__auto__,null);
});
var month_field55594__2 = (function (name__10244__auto__,value__10245__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))),name__10244__auto__,value__10245__auto__);
});
month_field55594 = function(name__10244__auto__,value__10245__auto__){
switch(arguments.length){
case 1:
return month_field55594__1.call(this,name__10244__auto__);
case 2:
return month_field55594__2.call(this,name__10244__auto__,value__10245__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
month_field55594.cljs$core$IFn$_invoke$arity$1 = month_field55594__1;
month_field55594.cljs$core$IFn$_invoke$arity$2 = month_field55594__2;
return month_field55594;
})()
;
sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field55594);
/**
* Creates a number input field.
*/
sablono.core.number_field55595 = (function() {
var number_field55595 = null;
var number_field55595__1 = (function (name__10244__auto__){return number_field55595.call(null,name__10244__auto__,null);
});
var number_field55595__2 = (function (name__10244__auto__,value__10245__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))),name__10244__auto__,value__10245__auto__);
});
number_field55595 = function(name__10244__auto__,value__10245__auto__){
switch(arguments.length){
case 1:
return number_field55595__1.call(this,name__10244__auto__);
case 2:
return number_field55595__2.call(this,name__10244__auto__,value__10245__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
number_field55595.cljs$core$IFn$_invoke$arity$1 = number_field55595__1;
number_field55595.cljs$core$IFn$_invoke$arity$2 = number_field55595__2;
return number_field55595;
})()
;
sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field55595);
/**
* Creates a password input field.
*/
sablono.core.password_field55596 = (function() {
var password_field55596 = null;
var password_field55596__1 = (function (name__10244__auto__){return password_field55596.call(null,name__10244__auto__,null);
});
var password_field55596__2 = (function (name__10244__auto__,value__10245__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))),name__10244__auto__,value__10245__auto__);
});
password_field55596 = function(name__10244__auto__,value__10245__auto__){
switch(arguments.length){
case 1:
return password_field55596__1.call(this,name__10244__auto__);
case 2:
return password_field55596__2.call(this,name__10244__auto__,value__10245__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field55596.cljs$core$IFn$_invoke$arity$1 = password_field55596__1;
password_field55596.cljs$core$IFn$_invoke$arity$2 = password_field55596__2;
return password_field55596;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field55596);
/**
* Creates a range input field.
*/
sablono.core.range_field55597 = (function() {
var range_field55597 = null;
var range_field55597__1 = (function (name__10244__auto__){return range_field55597.call(null,name__10244__auto__,null);
});
var range_field55597__2 = (function (name__10244__auto__,value__10245__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))),name__10244__auto__,value__10245__auto__);
});
range_field55597 = function(name__10244__auto__,value__10245__auto__){
switch(arguments.length){
case 1:
return range_field55597__1.call(this,name__10244__auto__);
case 2:
return range_field55597__2.call(this,name__10244__auto__,value__10245__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range_field55597.cljs$core$IFn$_invoke$arity$1 = range_field55597__1;
range_field55597.cljs$core$IFn$_invoke$arity$2 = range_field55597__2;
return range_field55597;
})()
;
sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field55597);
/**
* Creates a search input field.
*/
sablono.core.search_field55598 = (function() {
var search_field55598 = null;
var search_field55598__1 = (function (name__10244__auto__){return search_field55598.call(null,name__10244__auto__,null);
});
var search_field55598__2 = (function (name__10244__auto__,value__10245__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))),name__10244__auto__,value__10245__auto__);
});
search_field55598 = function(name__10244__auto__,value__10245__auto__){
switch(arguments.length){
case 1:
return search_field55598__1.call(this,name__10244__auto__);
case 2:
return search_field55598__2.call(this,name__10244__auto__,value__10245__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
search_field55598.cljs$core$IFn$_invoke$arity$1 = search_field55598__1;
search_field55598.cljs$core$IFn$_invoke$arity$2 = search_field55598__2;
return search_field55598;
})()
;
sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field55598);
/**
* Creates a tel input field.
*/
sablono.core.tel_field55599 = (function() {
var tel_field55599 = null;
var tel_field55599__1 = (function (name__10244__auto__){return tel_field55599.call(null,name__10244__auto__,null);
});
var tel_field55599__2 = (function (name__10244__auto__,value__10245__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))),name__10244__auto__,value__10245__auto__);
});
tel_field55599 = function(name__10244__auto__,value__10245__auto__){
switch(arguments.length){
case 1:
return tel_field55599__1.call(this,name__10244__auto__);
case 2:
return tel_field55599__2.call(this,name__10244__auto__,value__10245__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tel_field55599.cljs$core$IFn$_invoke$arity$1 = tel_field55599__1;
tel_field55599.cljs$core$IFn$_invoke$arity$2 = tel_field55599__2;
return tel_field55599;
})()
;
sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field55599);
/**
* Creates a text input field.
*/
sablono.core.text_field55600 = (function() {
var text_field55600 = null;
var text_field55600__1 = (function (name__10244__auto__){return text_field55600.call(null,name__10244__auto__,null);
});
var text_field55600__2 = (function (name__10244__auto__,value__10245__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))),name__10244__auto__,value__10245__auto__);
});
text_field55600 = function(name__10244__auto__,value__10245__auto__){
switch(arguments.length){
case 1:
return text_field55600__1.call(this,name__10244__auto__);
case 2:
return text_field55600__2.call(this,name__10244__auto__,value__10245__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field55600.cljs$core$IFn$_invoke$arity$1 = text_field55600__1;
text_field55600.cljs$core$IFn$_invoke$arity$2 = text_field55600__2;
return text_field55600;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field55600);
/**
* Creates a time input field.
*/
sablono.core.time_field55601 = (function() {
var time_field55601 = null;
var time_field55601__1 = (function (name__10244__auto__){return time_field55601.call(null,name__10244__auto__,null);
});
var time_field55601__2 = (function (name__10244__auto__,value__10245__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))),name__10244__auto__,value__10245__auto__);
});
time_field55601 = function(name__10244__auto__,value__10245__auto__){
switch(arguments.length){
case 1:
return time_field55601__1.call(this,name__10244__auto__);
case 2:
return time_field55601__2.call(this,name__10244__auto__,value__10245__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
time_field55601.cljs$core$IFn$_invoke$arity$1 = time_field55601__1;
time_field55601.cljs$core$IFn$_invoke$arity$2 = time_field55601__2;
return time_field55601;
})()
;
sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field55601);
/**
* Creates a url input field.
*/
sablono.core.url_field55602 = (function() {
var url_field55602 = null;
var url_field55602__1 = (function (name__10244__auto__){return url_field55602.call(null,name__10244__auto__,null);
});
var url_field55602__2 = (function (name__10244__auto__,value__10245__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))),name__10244__auto__,value__10245__auto__);
});
url_field55602 = function(name__10244__auto__,value__10245__auto__){
switch(arguments.length){
case 1:
return url_field55602__1.call(this,name__10244__auto__);
case 2:
return url_field55602__2.call(this,name__10244__auto__,value__10245__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
url_field55602.cljs$core$IFn$_invoke$arity$1 = url_field55602__1;
url_field55602.cljs$core$IFn$_invoke$arity$2 = url_field55602__2;
return url_field55602;
})()
;
sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field55602);
/**
* Creates a week input field.
*/
sablono.core.week_field55603 = (function() {
var week_field55603 = null;
var week_field55603__1 = (function (name__10244__auto__){return week_field55603.call(null,name__10244__auto__,null);
});
var week_field55603__2 = (function (name__10244__auto__,value__10245__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))),name__10244__auto__,value__10245__auto__);
});
week_field55603 = function(name__10244__auto__,value__10245__auto__){
switch(arguments.length){
case 1:
return week_field55603__1.call(this,name__10244__auto__);
case 2:
return week_field55603__2.call(this,name__10244__auto__,value__10245__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
week_field55603.cljs$core$IFn$_invoke$arity$1 = week_field55603__1;
week_field55603.cljs$core$IFn$_invoke$arity$2 = week_field55603__2;
return week_field55603;
})()
;
sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field55603);
sablono.core.file_upload = sablono.core.file_field;
/**
* Creates a check box.
*/
sablono.core.check_box55604 = (function() {
var check_box55604 = null;
var check_box55604__1 = (function (name){return check_box55604.call(null,name,null);
});
var check_box55604__2 = (function (name,checked_QMARK_){return check_box55604.call(null,name,checked_QMARK_,"true");
});
var check_box55604__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
check_box55604 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box55604__1.call(this,name);
case 2:
return check_box55604__2.call(this,name,checked_QMARK_);
case 3:
return check_box55604__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box55604.cljs$core$IFn$_invoke$arity$1 = check_box55604__1;
check_box55604.cljs$core$IFn$_invoke$arity$2 = check_box55604__2;
check_box55604.cljs$core$IFn$_invoke$arity$3 = check_box55604__3;
return check_box55604;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box55604);
/**
* Creates a radio button.
*/
sablono.core.radio_button55605 = (function() {
var radio_button55605 = null;
var radio_button55605__1 = (function (group){return radio_button55605.call(null,group,null);
});
var radio_button55605__2 = (function (group,checked_QMARK_){return radio_button55605.call(null,group,checked_QMARK_,"true");
});
var radio_button55605__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,group))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,value)))),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
radio_button55605 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button55605__1.call(this,group);
case 2:
return radio_button55605__2.call(this,group,checked_QMARK_);
case 3:
return radio_button55605__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button55605.cljs$core$IFn$_invoke$arity$1 = radio_button55605__1;
radio_button55605.cljs$core$IFn$_invoke$arity$2 = radio_button55605__2;
radio_button55605.cljs$core$IFn$_invoke$arity$3 = radio_button55605__3;
return radio_button55605;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button55605);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options55606 = (function() {
var select_options55606 = null;
var select_options55606__1 = (function (coll){return select_options55606.call(null,coll,null);
});
var select_options55606__2 = (function (coll,selected){var iter__4266__auto__ = (function iter__55615(s__55616){return (new cljs.core.LazySeq(null,(function (){var s__55616__$1 = s__55616;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__55616__$1);if(temp__4126__auto__)
{var s__55616__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__55616__$2))
{var c__4264__auto__ = cljs.core.chunk_first.call(null,s__55616__$2);var size__4265__auto__ = cljs.core.count.call(null,c__4264__auto__);var b__55618 = cljs.core.chunk_buffer.call(null,size__4265__auto__);if((function (){var i__55617 = (0);while(true){
if((i__55617 < size__4265__auto__))
{var x = cljs.core._nth.call(null,c__4264__auto__,i__55617);cljs.core.chunk_append.call(null,b__55618,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__55621 = x;var text = cljs.core.nth.call(null,vec__55621,(0),null);var val = cljs.core.nth.call(null,vec__55621,(1),null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__55621,(2),null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options55606.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)));
{
var G__55623 = (i__55617 + (1));
i__55617 = G__55623;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__55618),iter__55615.call(null,cljs.core.chunk_rest.call(null,s__55616__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__55618),null);
}
} else
{var x = cljs.core.first.call(null,s__55616__$2);return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__55622 = x;var text = cljs.core.nth.call(null,vec__55622,(0),null);var val = cljs.core.nth.call(null,vec__55622,(1),null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__55622,(2),null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options55606.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__55615.call(null,cljs.core.rest.call(null,s__55616__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4266__auto__.call(null,coll);
});
select_options55606 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options55606__1.call(this,coll);
case 2:
return select_options55606__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options55606.cljs$core$IFn$_invoke$arity$1 = select_options55606__1;
select_options55606.cljs$core$IFn$_invoke$arity$2 = select_options55606__2;
return select_options55606;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options55606);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down55624 = (function() {
var drop_down55624 = null;
var drop_down55624__2 = (function (name,options){return drop_down55624.call(null,name,options,null);
});
var drop_down55624__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down55624 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down55624__2.call(this,name,options);
case 3:
return drop_down55624__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down55624.cljs$core$IFn$_invoke$arity$2 = drop_down55624__2;
drop_down55624.cljs$core$IFn$_invoke$arity$3 = drop_down55624__3;
return drop_down55624;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down55624);
/**
* Creates a text area element.
*/
sablono.core.text_area55625 = (function() {
var text_area55625 = null;
var text_area55625__1 = (function (name){return text_area55625.call(null,name,null);
});
var text_area55625__2 = (function (name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
text_area55625 = function(name,value){
switch(arguments.length){
case 1:
return text_area55625__1.call(this,name);
case 2:
return text_area55625__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area55625.cljs$core$IFn$_invoke$arity$1 = text_area55625__1;
text_area55625.cljs$core$IFn$_invoke$arity$2 = text_area55625__2;
return text_area55625;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area55625);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label55626 = (function label55626(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label55626);
/**
* Creates a submit button.
*/
sablono.core.submit_button55627 = (function submit_button55627(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button55627);
/**
* Creates a form reset button.
*/
sablono.core.reset_button55628 = (function reset_button55628(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button55628);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to55629 = (function() { 
var form_to55629__delegate = function (p__55630,body){var vec__55632 = p__55630;var method = cljs.core.nth.call(null,vec__55632,(0),null);var action = cljs.core.nth.call(null,vec__55632,(1),null);var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));var action_uri = sablono.util.to_uri.call(null,action);return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to55629 = function (p__55630,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to55629__delegate.call(this,p__55630,body);};
form_to55629.cljs$lang$maxFixedArity = 1;
form_to55629.cljs$lang$applyTo = (function (arglist__55633){
var p__55630 = cljs.core.first(arglist__55633);
var body = cljs.core.rest(arglist__55633);
return form_to55629__delegate(p__55630,body);
});
form_to55629.cljs$core$IFn$_invoke$arity$variadic = form_to55629__delegate;
return form_to55629;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to55629);

//# sourceMappingURL=core.js.map