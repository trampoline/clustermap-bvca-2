// Compiled by ClojureScript 0.0-2322
goog.provide('domina');
goog.require('cljs.core');
goog.require('goog.dom.forms');
goog.require('goog.dom');
goog.require('goog.dom.classes');
goog.require('goog.dom.xml');
goog.require('goog.dom');
goog.require('goog.dom.classes');
goog.require('goog.dom.forms');
goog.require('goog.string');
goog.require('cljs.core');
goog.require('domina.support');
goog.require('goog.events');
goog.require('goog.string');
goog.require('domina.support');
goog.require('goog.style');
goog.require('goog.style');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('goog.events');
goog.require('goog.dom.xml');
goog.require('cljs.core');
domina.re_html = /<|&#?\w+;/;
domina.re_leading_whitespace = /^\s+/;
domina.re_xhtml_tag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/i;
domina.re_tag_name = /<([\w:]+)/;
domina.re_no_inner_html = /<(?:script|style)/i;
domina.re_tbody = /<tbody/i;
var opt_wrapper_54197 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_54198 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);var cell_wrapper_54199 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",cljs.core.constant$keyword$1085,"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_54199,opt_wrapper_54197,table_section_wrapper_54198,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_54197,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_54198,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_54198,cell_wrapper_54199,table_section_wrapper_54198,table_section_wrapper_54198]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not(cljs.core.re_find(domina.re_tbody,html));var tbody = (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3546__auto__ = div.firstChild;if(cljs.core.truth_(and__3546__auto__))
{return div.firstChild.childNodes;
} else
{return and__3546__auto__;
}
})():(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(start_wrap,"<table>")) && (no_tbody_QMARK_))?div.childNodes:cljs.core.PersistentVector.EMPTY));var seq__54204 = cljs.core.seq(tbody);var chunk__54205 = null;var count__54206 = (0);var i__54207 = (0);while(true){
if((i__54207 < count__54206))
{var child = chunk__54205.cljs$core$IIndexed$_nth$arity$2(null,i__54207);if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.nodeName,"tbody")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__54208 = seq__54204;
var G__54209 = chunk__54205;
var G__54210 = count__54206;
var G__54211 = (i__54207 + (1));
seq__54204 = G__54208;
chunk__54205 = G__54209;
count__54206 = G__54210;
i__54207 = G__54211;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__54204);if(temp__4126__auto__)
{var seq__54204__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__54204__$1))
{var c__4314__auto__ = cljs.core.chunk_first(seq__54204__$1);{
var G__54212 = cljs.core.chunk_rest(seq__54204__$1);
var G__54213 = c__4314__auto__;
var G__54214 = cljs.core.count(c__4314__auto__);
var G__54215 = (0);
seq__54204 = G__54212;
chunk__54205 = G__54213;
count__54206 = G__54214;
i__54207 = G__54215;
continue;
}
} else
{var child = cljs.core.first(seq__54204__$1);if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.nodeName,"tbody")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__54216 = cljs.core.next(seq__54204__$1);
var G__54217 = null;
var G__54218 = (0);
var G__54219 = (0);
seq__54204 = G__54216;
chunk__54205 = G__54217;
count__54206 = G__54218;
i__54207 = G__54219;
continue;
}
}
} else
{return null;
}
}
break;
}
});
domina.restore_leading_whitespace_BANG_ = (function restore_leading_whitespace_BANG_(div,html){return div.insertBefore(document.createTextNode(cljs.core.first(cljs.core.re_find(domina.re_leading_whitespace,html))),div.firstChild);
});
/**
* takes an string of html and returns a NodeList of dom fragments
*/
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace(html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second(cljs.core.re_find(domina.re_tag_name,html__$1)))).toLowerCase();var vec__54221 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(domina.wrap_map,tag_name,cljs.core.constant$keyword$1085.cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54221,(0),null);var start_wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54221,(1),null);var end_wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54221,(2),null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(start_wrap)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(html__$1)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(end_wrap));
return div;
})();var level = depth;while(true){
if((level > (0)))
{{
var G__54222 = wrapper.lastChild;
var G__54223 = (level - (1));
wrapper = G__54222;
level = G__54223;
continue;
}
} else
{return wrapper;
}
break;
}
})();if(cljs.core.truth_(domina.support.extraneous_tbody_QMARK_))
{domina.remove_extraneous_tbody_BANG_(div,html__$1,tag_name,start_wrap);
} else
{}
if(cljs.core.truth_((function (){var and__3546__auto__ = cljs.core.not(domina.support.leading_whitespace_QMARK_);if(and__3546__auto__)
{return cljs.core.re_find(domina.re_leading_whitespace,html__$1);
} else
{return and__3546__auto__;
}
})()))
{domina.restore_leading_whitespace_BANG_(div,html__$1);
} else
{}
return div.childNodes;
});
domina.string_to_dom = (function string_to_dom(s){if(cljs.core.truth_(cljs.core.re_find(domina.re_html,s)))
{return domina.html_to_dom(s);
} else
{return document.createTextNode(s);
}
});
domina.DomContent = (function (){var obj54225 = {};return obj54225;
})();
domina.nodes = (function nodes(content){if((function (){var and__3546__auto__ = content;if(and__3546__auto__)
{return content.domina$DomContent$nodes$arity$1;
} else
{return and__3546__auto__;
}
})())
{return content.domina$DomContent$nodes$arity$1(content);
} else
{var x__4185__auto__ = (((content == null))?null:content);return (function (){var or__3558__auto__ = (domina.nodes[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (domina.nodes["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol("DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){if((function (){var and__3546__auto__ = nodeseq;if(and__3546__auto__)
{return nodeseq.domina$DomContent$single_node$arity$1;
} else
{return and__3546__auto__;
}
})())
{return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else
{var x__4185__auto__ = (((nodeseq == null))?null:nodeseq);return (function (){var or__3558__auto__ = (domina.single_node[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (domina.single_node["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol("DomContent.single-node",nodeseq);
}
}
})().call(null,nodeseq);
}
});
domina._STAR_debug_STAR_ = true;
/**
* @param {...*} var_args
*/
domina.log_debug = (function() { 
var log_debug__delegate = function (mesg){if(cljs.core.truth_((function (){var and__3546__auto__ = domina._STAR_debug_STAR_;if(cljs.core.truth_(and__3546__auto__))
{return !(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(window.console,undefined));
} else
{return and__3546__auto__;
}
})()))
{return console.log(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,mesg));
} else
{return null;
}
};
var log_debug = function (var_args){
var mesg = null;if (arguments.length > 0) {
  mesg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return log_debug__delegate.call(this,mesg);};
log_debug.cljs$lang$maxFixedArity = 0;
log_debug.cljs$lang$applyTo = (function (arglist__54226){
var mesg = cljs.core.seq(arglist__54226);
return log_debug__delegate(mesg);
});
log_debug.cljs$core$IFn$_invoke$arity$variadic = log_debug__delegate;
return log_debug;
})()
;
/**
* @param {...*} var_args
*/
domina.log = (function() { 
var log__delegate = function (mesg){if(cljs.core.truth_(window.console))
{return console.log(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,mesg));
} else
{return null;
}
};
var log = function (var_args){
var mesg = null;if (arguments.length > 0) {
  mesg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return log__delegate.call(this,mesg);};
log.cljs$lang$maxFixedArity = 0;
log.cljs$lang$applyTo = (function (arglist__54227){
var mesg = cljs.core.seq(arglist__54227);
return log__delegate(mesg);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
/**
* Returns content containing a single node by looking up the given ID
*/
domina.by_id = (function by_id(id){return goog.dom.getElement(cljs.core.name(id));
});
/**
* Returns content containing nodes which have the specified CSS class.
*/
domina.by_class = (function by_class(class_name){return (domina.normalize_seq.cljs$core$IFn$_invoke$arity$1 ? domina.normalize_seq.cljs$core$IFn$_invoke$arity$1(goog.dom.getElementsByClass(cljs.core.name(class_name))) : domina.normalize_seq.call(null,goog.dom.getElementsByClass(cljs.core.name(class_name))));
});
/**
* Gets all the child nodes of the elements in a content. Same as (xpath content '*') but more efficient.
*/
domina.children = (function children(content){return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$2(goog.dom.getChildren,domina.nodes(content)));
});
/**
* Returns the deepest common ancestor of the argument contents (which are presumed to be single nodes), or nil if they are from different documents.
* @param {...*} var_args
*/
domina.common_ancestor = (function() { 
var common_ancestor__delegate = function (contents){return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(goog.dom.findCommonAncestor,cljs.core.map.cljs$core$IFn$_invoke$arity$2(domina.single_node,contents));
};
var common_ancestor = function (var_args){
var contents = null;if (arguments.length > 0) {
  contents = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return common_ancestor__delegate.call(this,contents);};
common_ancestor.cljs$lang$maxFixedArity = 0;
common_ancestor.cljs$lang$applyTo = (function (arglist__54228){
var contents = cljs.core.seq(arglist__54228);
return common_ancestor__delegate(contents);
});
common_ancestor.cljs$core$IFn$_invoke$arity$variadic = common_ancestor__delegate;
return common_ancestor;
})()
;
/**
* Returns true if the first argument is an ancestor of the second argument. Presumes both arguments are single-node contents.
*/
domina.ancestor_QMARK_ = (function ancestor_QMARK_(ancestor_content,descendant_content){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(domina.common_ancestor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([ancestor_content,descendant_content], 0)),domina.single_node(ancestor_content));
});
/**
* Returns a deep clone of content.
*/
domina.clone = (function clone(content){return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__54229_SHARP_){return p1__54229_SHARP_.cloneNode(true);
}),domina.nodes(content));
});
/**
* Given a parent and child contents, appends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.append_BANG_ = (function append_BANG_(parent_content,child_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3(goog.dom.appendChild,parent_content,child_content) : domina.apply_with_cloning.call(null,goog.dom.appendChild,parent_content,child_content));
return parent_content;
});
/**
* Given a parent and child contents, appends each of the children to all of the parents at the specified index. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__54230_SHARP_,p2__54231_SHARP_){return goog.dom.insertChildAt(p1__54230_SHARP_,p2__54231_SHARP_,idx);
}),parent_content,child_content) : domina.apply_with_cloning.call(null,(function (p1__54230_SHARP_,p2__54231_SHARP_){return goog.dom.insertChildAt(p1__54230_SHARP_,p2__54231_SHARP_,idx);
}),parent_content,child_content));
return parent_content;
});
/**
* Given a parent and child contents, prepends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.prepend_BANG_ = (function prepend_BANG_(parent_content,child_content){domina.insert_BANG_(parent_content,child_content,(0));
return parent_content;
});
/**
* Given a content and some new content, inserts the new content immediately before the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__54233_SHARP_,p2__54232_SHARP_){return goog.dom.insertSiblingBefore(p2__54232_SHARP_,p1__54233_SHARP_);
}),content,new_content) : domina.apply_with_cloning.call(null,(function (p1__54233_SHARP_,p2__54232_SHARP_){return goog.dom.insertSiblingBefore(p2__54232_SHARP_,p1__54233_SHARP_);
}),content,new_content));
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__54235_SHARP_,p2__54234_SHARP_){return goog.dom.insertSiblingAfter(p2__54234_SHARP_,p1__54235_SHARP_);
}),content,new_content) : domina.apply_with_cloning.call(null,(function (p1__54235_SHARP_,p2__54234_SHARP_){return goog.dom.insertSiblingAfter(p2__54234_SHARP_,p1__54235_SHARP_);
}),content,new_content));
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__54237_SHARP_,p2__54236_SHARP_){return goog.dom.replaceNode(p2__54236_SHARP_,p1__54237_SHARP_);
}),old_content,new_content) : domina.apply_with_cloning.call(null,(function (p1__54237_SHARP_,p2__54236_SHARP_){return goog.dom.replaceNode(p2__54236_SHARP_,p1__54237_SHARP_);
}),old_content,new_content));
return old_content;
});
/**
* Removes all the nodes in a content from the DOM and returns them.
*/
domina.detach_BANG_ = (function detach_BANG_(content){return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(goog.dom.removeNode,domina.nodes(content)));
});
/**
* Removes all the nodes in a content from the DOM. Returns nil.
*/
domina.destroy_BANG_ = (function destroy_BANG_(content){return cljs.core.dorun.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(goog.dom.removeNode,domina.nodes(content)));
});
/**
* Removes all the child nodes in a content from the DOM. Returns the original content.
*/
domina.destroy_children_BANG_ = (function destroy_children_BANG_(content){cljs.core.dorun.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(goog.dom.removeChildren,domina.nodes(content)));
return content;
});
/**
* Gets the value of a CSS property. Assumes content will be a single node. Name may be a string or keyword. Returns nil if there is no value set for the style.
*/
domina.style = (function style(content,name){var s = goog.style.getStyle(domina.single_node(content),cljs.core.name(name));if(cljs.core.truth_(clojure.string.blank_QMARK_(s)))
{return null;
} else
{return s;
}
});
/**
* Gets the value of an HTML attribute. Assumes content will be a single node. Name may be a stirng or keyword. Returns nil if there is no value set for the style.
*/
domina.attr = (function attr(content,name){return domina.single_node(content).getAttribute(cljs.core.name(name));
});
/**
* Sets the value of a CSS property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
* @param {...*} var_args
*/
domina.set_style_BANG_ = (function() { 
var set_style_BANG___delegate = function (content,name,value){var seq__54242_54246 = cljs.core.seq(domina.nodes(content));var chunk__54243_54247 = null;var count__54244_54248 = (0);var i__54245_54249 = (0);while(true){
if((i__54245_54249 < count__54244_54248))
{var n_54250 = chunk__54243_54247.cljs$core$IIndexed$_nth$arity$2(null,i__54245_54249);goog.style.setStyle(n_54250,cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__54251 = seq__54242_54246;
var G__54252 = chunk__54243_54247;
var G__54253 = count__54244_54248;
var G__54254 = (i__54245_54249 + (1));
seq__54242_54246 = G__54251;
chunk__54243_54247 = G__54252;
count__54244_54248 = G__54253;
i__54245_54249 = G__54254;
continue;
}
} else
{var temp__4126__auto___54255 = cljs.core.seq(seq__54242_54246);if(temp__4126__auto___54255)
{var seq__54242_54256__$1 = temp__4126__auto___54255;if(cljs.core.chunked_seq_QMARK_(seq__54242_54256__$1))
{var c__4314__auto___54257 = cljs.core.chunk_first(seq__54242_54256__$1);{
var G__54258 = cljs.core.chunk_rest(seq__54242_54256__$1);
var G__54259 = c__4314__auto___54257;
var G__54260 = cljs.core.count(c__4314__auto___54257);
var G__54261 = (0);
seq__54242_54246 = G__54258;
chunk__54243_54247 = G__54259;
count__54244_54248 = G__54260;
i__54245_54249 = G__54261;
continue;
}
} else
{var n_54262 = cljs.core.first(seq__54242_54256__$1);goog.style.setStyle(n_54262,cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__54263 = cljs.core.next(seq__54242_54256__$1);
var G__54264 = null;
var G__54265 = (0);
var G__54266 = (0);
seq__54242_54246 = G__54263;
chunk__54243_54247 = G__54264;
count__54244_54248 = G__54265;
i__54245_54249 = G__54266;
continue;
}
}
} else
{}
}
break;
}
return content;
};
var set_style_BANG_ = function (content,name,var_args){
var value = null;if (arguments.length > 2) {
  value = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return set_style_BANG___delegate.call(this,content,name,value);};
set_style_BANG_.cljs$lang$maxFixedArity = 2;
set_style_BANG_.cljs$lang$applyTo = (function (arglist__54267){
var content = cljs.core.first(arglist__54267);
arglist__54267 = cljs.core.next(arglist__54267);
var name = cljs.core.first(arglist__54267);
var value = cljs.core.rest(arglist__54267);
return set_style_BANG___delegate(content,name,value);
});
set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_style_BANG___delegate;
return set_style_BANG_;
})()
;
/**
* Sets the value of an HTML property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
* @param {...*} var_args
*/
domina.set_attr_BANG_ = (function() { 
var set_attr_BANG___delegate = function (content,name,value){var seq__54272_54276 = cljs.core.seq(domina.nodes(content));var chunk__54273_54277 = null;var count__54274_54278 = (0);var i__54275_54279 = (0);while(true){
if((i__54275_54279 < count__54274_54278))
{var n_54280 = chunk__54273_54277.cljs$core$IIndexed$_nth$arity$2(null,i__54275_54279);n_54280.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__54281 = seq__54272_54276;
var G__54282 = chunk__54273_54277;
var G__54283 = count__54274_54278;
var G__54284 = (i__54275_54279 + (1));
seq__54272_54276 = G__54281;
chunk__54273_54277 = G__54282;
count__54274_54278 = G__54283;
i__54275_54279 = G__54284;
continue;
}
} else
{var temp__4126__auto___54285 = cljs.core.seq(seq__54272_54276);if(temp__4126__auto___54285)
{var seq__54272_54286__$1 = temp__4126__auto___54285;if(cljs.core.chunked_seq_QMARK_(seq__54272_54286__$1))
{var c__4314__auto___54287 = cljs.core.chunk_first(seq__54272_54286__$1);{
var G__54288 = cljs.core.chunk_rest(seq__54272_54286__$1);
var G__54289 = c__4314__auto___54287;
var G__54290 = cljs.core.count(c__4314__auto___54287);
var G__54291 = (0);
seq__54272_54276 = G__54288;
chunk__54273_54277 = G__54289;
count__54274_54278 = G__54290;
i__54275_54279 = G__54291;
continue;
}
} else
{var n_54292 = cljs.core.first(seq__54272_54286__$1);n_54292.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__54293 = cljs.core.next(seq__54272_54286__$1);
var G__54294 = null;
var G__54295 = (0);
var G__54296 = (0);
seq__54272_54276 = G__54293;
chunk__54273_54277 = G__54294;
count__54274_54278 = G__54295;
i__54275_54279 = G__54296;
continue;
}
}
} else
{}
}
break;
}
return content;
};
var set_attr_BANG_ = function (content,name,var_args){
var value = null;if (arguments.length > 2) {
  value = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return set_attr_BANG___delegate.call(this,content,name,value);};
set_attr_BANG_.cljs$lang$maxFixedArity = 2;
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__54297){
var content = cljs.core.first(arglist__54297);
arglist__54297 = cljs.core.next(arglist__54297);
var name = cljs.core.first(arglist__54297);
var value = cljs.core.rest(arglist__54297);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__54302_54306 = cljs.core.seq(domina.nodes(content));var chunk__54303_54307 = null;var count__54304_54308 = (0);var i__54305_54309 = (0);while(true){
if((i__54305_54309 < count__54304_54308))
{var n_54310 = chunk__54303_54307.cljs$core$IIndexed$_nth$arity$2(null,i__54305_54309);n_54310.removeAttribute(cljs.core.name(name));
{
var G__54311 = seq__54302_54306;
var G__54312 = chunk__54303_54307;
var G__54313 = count__54304_54308;
var G__54314 = (i__54305_54309 + (1));
seq__54302_54306 = G__54311;
chunk__54303_54307 = G__54312;
count__54304_54308 = G__54313;
i__54305_54309 = G__54314;
continue;
}
} else
{var temp__4126__auto___54315 = cljs.core.seq(seq__54302_54306);if(temp__4126__auto___54315)
{var seq__54302_54316__$1 = temp__4126__auto___54315;if(cljs.core.chunked_seq_QMARK_(seq__54302_54316__$1))
{var c__4314__auto___54317 = cljs.core.chunk_first(seq__54302_54316__$1);{
var G__54318 = cljs.core.chunk_rest(seq__54302_54316__$1);
var G__54319 = c__4314__auto___54317;
var G__54320 = cljs.core.count(c__4314__auto___54317);
var G__54321 = (0);
seq__54302_54306 = G__54318;
chunk__54303_54307 = G__54319;
count__54304_54308 = G__54320;
i__54305_54309 = G__54321;
continue;
}
} else
{var n_54322 = cljs.core.first(seq__54302_54316__$1);n_54322.removeAttribute(cljs.core.name(name));
{
var G__54323 = cljs.core.next(seq__54302_54316__$1);
var G__54324 = null;
var G__54325 = (0);
var G__54326 = (0);
seq__54302_54306 = G__54323;
chunk__54303_54307 = G__54324;
count__54304_54308 = G__54325;
i__54305_54309 = G__54326;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Parses a CSS style string and returns the properties as a map.
*/
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,pair){var vec__54328 = pair.split(/\s*:\s*/);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54328,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54328,(1),null);if(cljs.core.truth_((function (){var and__3546__auto__ = k;if(cljs.core.truth_(and__3546__auto__))
{return v;
} else
{return and__3546__auto__;
}
})()))
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k.toLowerCase()),v);
} else
{return acc;
}
}),cljs.core.PersistentArrayMap.EMPTY,style.split(/\s*;\s*/));
});
/**
* Returns a map of the CSS styles/values. Assumes content will be a single node. Style names are returned as keywords.
*/
domina.styles = (function styles(content){var style = domina.attr(content,"style");if(typeof style === 'string')
{return domina.parse_style_attributes(style);
} else
{if((style == null))
{return cljs.core.PersistentArrayMap.EMPTY;
} else
{if(cljs.core.truth_(style.cssText))
{return domina.parse_style_attributes(style.cssText);
} else
{return cljs.core.PersistentArrayMap.EMPTY;

}
}
}
});
/**
* Returns a map of the HTML attributes/values. Assumes content will be a single node. Attribute names are returned as keywords.
*/
domina.attrs = (function attrs(content){var node = domina.single_node(content);var attrs__$1 = node.attributes;return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(cljs.core.nil_QMARK_),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (node,attrs__$1){
return (function (p1__54329_SHARP_){var attr = attrs__$1.item(p1__54329_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(null,value)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
});})(node,attrs__$1))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__54336_54342 = cljs.core.seq(styles);var chunk__54337_54343 = null;var count__54338_54344 = (0);var i__54339_54345 = (0);while(true){
if((i__54339_54345 < count__54338_54344))
{var vec__54340_54346 = chunk__54337_54343.cljs$core$IIndexed$_nth$arity$2(null,i__54339_54345);var name_54347 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54340_54346,(0),null);var value_54348 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54340_54346,(1),null);domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_54347,cljs.core.array_seq([value_54348], 0));
{
var G__54349 = seq__54336_54342;
var G__54350 = chunk__54337_54343;
var G__54351 = count__54338_54344;
var G__54352 = (i__54339_54345 + (1));
seq__54336_54342 = G__54349;
chunk__54337_54343 = G__54350;
count__54338_54344 = G__54351;
i__54339_54345 = G__54352;
continue;
}
} else
{var temp__4126__auto___54353 = cljs.core.seq(seq__54336_54342);if(temp__4126__auto___54353)
{var seq__54336_54354__$1 = temp__4126__auto___54353;if(cljs.core.chunked_seq_QMARK_(seq__54336_54354__$1))
{var c__4314__auto___54355 = cljs.core.chunk_first(seq__54336_54354__$1);{
var G__54356 = cljs.core.chunk_rest(seq__54336_54354__$1);
var G__54357 = c__4314__auto___54355;
var G__54358 = cljs.core.count(c__4314__auto___54355);
var G__54359 = (0);
seq__54336_54342 = G__54356;
chunk__54337_54343 = G__54357;
count__54338_54344 = G__54358;
i__54339_54345 = G__54359;
continue;
}
} else
{var vec__54341_54360 = cljs.core.first(seq__54336_54354__$1);var name_54361 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54341_54360,(0),null);var value_54362 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54341_54360,(1),null);domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_54361,cljs.core.array_seq([value_54362], 0));
{
var G__54363 = cljs.core.next(seq__54336_54354__$1);
var G__54364 = null;
var G__54365 = (0);
var G__54366 = (0);
seq__54336_54342 = G__54363;
chunk__54337_54343 = G__54364;
count__54338_54344 = G__54365;
i__54339_54345 = G__54366;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Sets the specified attributes for each node in the content, given a map of names and values. Names may be a string or keyword. Values will be cast to a string, multiple values wil be concatenated.
*/
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__54373_54379 = cljs.core.seq(attrs);var chunk__54374_54380 = null;var count__54375_54381 = (0);var i__54376_54382 = (0);while(true){
if((i__54376_54382 < count__54375_54381))
{var vec__54377_54383 = chunk__54374_54380.cljs$core$IIndexed$_nth$arity$2(null,i__54376_54382);var name_54384 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54377_54383,(0),null);var value_54385 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54377_54383,(1),null);domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_54384,cljs.core.array_seq([value_54385], 0));
{
var G__54386 = seq__54373_54379;
var G__54387 = chunk__54374_54380;
var G__54388 = count__54375_54381;
var G__54389 = (i__54376_54382 + (1));
seq__54373_54379 = G__54386;
chunk__54374_54380 = G__54387;
count__54375_54381 = G__54388;
i__54376_54382 = G__54389;
continue;
}
} else
{var temp__4126__auto___54390 = cljs.core.seq(seq__54373_54379);if(temp__4126__auto___54390)
{var seq__54373_54391__$1 = temp__4126__auto___54390;if(cljs.core.chunked_seq_QMARK_(seq__54373_54391__$1))
{var c__4314__auto___54392 = cljs.core.chunk_first(seq__54373_54391__$1);{
var G__54393 = cljs.core.chunk_rest(seq__54373_54391__$1);
var G__54394 = c__4314__auto___54392;
var G__54395 = cljs.core.count(c__4314__auto___54392);
var G__54396 = (0);
seq__54373_54379 = G__54393;
chunk__54374_54380 = G__54394;
count__54375_54381 = G__54395;
i__54376_54382 = G__54396;
continue;
}
} else
{var vec__54378_54397 = cljs.core.first(seq__54373_54391__$1);var name_54398 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54378_54397,(0),null);var value_54399 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54378_54397,(1),null);domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_54398,cljs.core.array_seq([value_54399], 0));
{
var G__54400 = cljs.core.next(seq__54373_54391__$1);
var G__54401 = null;
var G__54402 = (0);
var G__54403 = (0);
seq__54373_54379 = G__54400;
chunk__54374_54380 = G__54401;
count__54375_54381 = G__54402;
i__54376_54382 = G__54403;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns true if the node has the specified CSS class. Assumes content is a single node.
*/
domina.has_class_QMARK_ = (function has_class_QMARK_(content,class$){return goog.dom.classes.has(domina.single_node(content),class$);
});
/**
* Adds the specified CSS class to each node in the content.
*/
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__54408_54412 = cljs.core.seq(domina.nodes(content));var chunk__54409_54413 = null;var count__54410_54414 = (0);var i__54411_54415 = (0);while(true){
if((i__54411_54415 < count__54410_54414))
{var node_54416 = chunk__54409_54413.cljs$core$IIndexed$_nth$arity$2(null,i__54411_54415);goog.dom.classes.add(node_54416,class$);
{
var G__54417 = seq__54408_54412;
var G__54418 = chunk__54409_54413;
var G__54419 = count__54410_54414;
var G__54420 = (i__54411_54415 + (1));
seq__54408_54412 = G__54417;
chunk__54409_54413 = G__54418;
count__54410_54414 = G__54419;
i__54411_54415 = G__54420;
continue;
}
} else
{var temp__4126__auto___54421 = cljs.core.seq(seq__54408_54412);if(temp__4126__auto___54421)
{var seq__54408_54422__$1 = temp__4126__auto___54421;if(cljs.core.chunked_seq_QMARK_(seq__54408_54422__$1))
{var c__4314__auto___54423 = cljs.core.chunk_first(seq__54408_54422__$1);{
var G__54424 = cljs.core.chunk_rest(seq__54408_54422__$1);
var G__54425 = c__4314__auto___54423;
var G__54426 = cljs.core.count(c__4314__auto___54423);
var G__54427 = (0);
seq__54408_54412 = G__54424;
chunk__54409_54413 = G__54425;
count__54410_54414 = G__54426;
i__54411_54415 = G__54427;
continue;
}
} else
{var node_54428 = cljs.core.first(seq__54408_54422__$1);goog.dom.classes.add(node_54428,class$);
{
var G__54429 = cljs.core.next(seq__54408_54422__$1);
var G__54430 = null;
var G__54431 = (0);
var G__54432 = (0);
seq__54408_54412 = G__54429;
chunk__54409_54413 = G__54430;
count__54410_54414 = G__54431;
i__54411_54415 = G__54432;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Removes the specified CSS class from each node in the content.
*/
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__54437_54441 = cljs.core.seq(domina.nodes(content));var chunk__54438_54442 = null;var count__54439_54443 = (0);var i__54440_54444 = (0);while(true){
if((i__54440_54444 < count__54439_54443))
{var node_54445 = chunk__54438_54442.cljs$core$IIndexed$_nth$arity$2(null,i__54440_54444);goog.dom.classes.remove(node_54445,class$);
{
var G__54446 = seq__54437_54441;
var G__54447 = chunk__54438_54442;
var G__54448 = count__54439_54443;
var G__54449 = (i__54440_54444 + (1));
seq__54437_54441 = G__54446;
chunk__54438_54442 = G__54447;
count__54439_54443 = G__54448;
i__54440_54444 = G__54449;
continue;
}
} else
{var temp__4126__auto___54450 = cljs.core.seq(seq__54437_54441);if(temp__4126__auto___54450)
{var seq__54437_54451__$1 = temp__4126__auto___54450;if(cljs.core.chunked_seq_QMARK_(seq__54437_54451__$1))
{var c__4314__auto___54452 = cljs.core.chunk_first(seq__54437_54451__$1);{
var G__54453 = cljs.core.chunk_rest(seq__54437_54451__$1);
var G__54454 = c__4314__auto___54452;
var G__54455 = cljs.core.count(c__4314__auto___54452);
var G__54456 = (0);
seq__54437_54441 = G__54453;
chunk__54438_54442 = G__54454;
count__54439_54443 = G__54455;
i__54440_54444 = G__54456;
continue;
}
} else
{var node_54457 = cljs.core.first(seq__54437_54451__$1);goog.dom.classes.remove(node_54457,class$);
{
var G__54458 = cljs.core.next(seq__54437_54451__$1);
var G__54459 = null;
var G__54460 = (0);
var G__54461 = (0);
seq__54437_54441 = G__54458;
chunk__54438_54442 = G__54459;
count__54439_54443 = G__54460;
i__54440_54444 = G__54461;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Toggles the specified CSS class from each node in the content.
*/
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__54466_54470 = cljs.core.seq(domina.nodes(content));var chunk__54467_54471 = null;var count__54468_54472 = (0);var i__54469_54473 = (0);while(true){
if((i__54469_54473 < count__54468_54472))
{var node_54474 = chunk__54467_54471.cljs$core$IIndexed$_nth$arity$2(null,i__54469_54473);goog.dom.classes.toggle(node_54474,class$);
{
var G__54475 = seq__54466_54470;
var G__54476 = chunk__54467_54471;
var G__54477 = count__54468_54472;
var G__54478 = (i__54469_54473 + (1));
seq__54466_54470 = G__54475;
chunk__54467_54471 = G__54476;
count__54468_54472 = G__54477;
i__54469_54473 = G__54478;
continue;
}
} else
{var temp__4126__auto___54479 = cljs.core.seq(seq__54466_54470);if(temp__4126__auto___54479)
{var seq__54466_54480__$1 = temp__4126__auto___54479;if(cljs.core.chunked_seq_QMARK_(seq__54466_54480__$1))
{var c__4314__auto___54481 = cljs.core.chunk_first(seq__54466_54480__$1);{
var G__54482 = cljs.core.chunk_rest(seq__54466_54480__$1);
var G__54483 = c__4314__auto___54481;
var G__54484 = cljs.core.count(c__4314__auto___54481);
var G__54485 = (0);
seq__54466_54470 = G__54482;
chunk__54467_54471 = G__54483;
count__54468_54472 = G__54484;
i__54469_54473 = G__54485;
continue;
}
} else
{var node_54486 = cljs.core.first(seq__54466_54480__$1);goog.dom.classes.toggle(node_54486,class$);
{
var G__54487 = cljs.core.next(seq__54466_54480__$1);
var G__54488 = null;
var G__54489 = (0);
var G__54490 = (0);
seq__54466_54470 = G__54487;
chunk__54467_54471 = G__54488;
count__54468_54472 = G__54489;
i__54469_54473 = G__54490;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns a seq of all the CSS classes currently applied to a node. Assumes content is a single node.
*/
domina.classes = (function classes(content){return cljs.core.seq(goog.dom.classes.get(domina.single_node(content)));
});
/**
* Sets the class attribute of the content nodes to classes, which can
* be either a class attribute string or a seq of classname strings.
*/
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_54499__$1 = ((cljs.core.coll_QMARK_(classes))?clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",classes):classes);var seq__54495_54500 = cljs.core.seq(domina.nodes(content));var chunk__54496_54501 = null;var count__54497_54502 = (0);var i__54498_54503 = (0);while(true){
if((i__54498_54503 < count__54497_54502))
{var node_54504 = chunk__54496_54501.cljs$core$IIndexed$_nth$arity$2(null,i__54498_54503);goog.dom.classes.set(node_54504,classes_54499__$1);
{
var G__54505 = seq__54495_54500;
var G__54506 = chunk__54496_54501;
var G__54507 = count__54497_54502;
var G__54508 = (i__54498_54503 + (1));
seq__54495_54500 = G__54505;
chunk__54496_54501 = G__54506;
count__54497_54502 = G__54507;
i__54498_54503 = G__54508;
continue;
}
} else
{var temp__4126__auto___54509 = cljs.core.seq(seq__54495_54500);if(temp__4126__auto___54509)
{var seq__54495_54510__$1 = temp__4126__auto___54509;if(cljs.core.chunked_seq_QMARK_(seq__54495_54510__$1))
{var c__4314__auto___54511 = cljs.core.chunk_first(seq__54495_54510__$1);{
var G__54512 = cljs.core.chunk_rest(seq__54495_54510__$1);
var G__54513 = c__4314__auto___54511;
var G__54514 = cljs.core.count(c__4314__auto___54511);
var G__54515 = (0);
seq__54495_54500 = G__54512;
chunk__54496_54501 = G__54513;
count__54497_54502 = G__54514;
i__54498_54503 = G__54515;
continue;
}
} else
{var node_54516 = cljs.core.first(seq__54495_54510__$1);goog.dom.classes.set(node_54516,classes_54499__$1);
{
var G__54517 = cljs.core.next(seq__54495_54510__$1);
var G__54518 = null;
var G__54519 = (0);
var G__54520 = (0);
seq__54495_54500 = G__54517;
chunk__54496_54501 = G__54518;
count__54497_54502 = G__54519;
i__54498_54503 = G__54520;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the text of a node. Assumes content is a single node. For consistency across browsers, will always trim whitespace of the beginning and end of the returned text.
*/
domina.text = (function text(content){return goog.string.trim(goog.dom.getTextContent(domina.single_node(content)));
});
/**
* Sets the text value of all the nodes in the given content.
*/
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__54525_54529 = cljs.core.seq(domina.nodes(content));var chunk__54526_54530 = null;var count__54527_54531 = (0);var i__54528_54532 = (0);while(true){
if((i__54528_54532 < count__54527_54531))
{var node_54533 = chunk__54526_54530.cljs$core$IIndexed$_nth$arity$2(null,i__54528_54532);goog.dom.setTextContent(node_54533,value);
{
var G__54534 = seq__54525_54529;
var G__54535 = chunk__54526_54530;
var G__54536 = count__54527_54531;
var G__54537 = (i__54528_54532 + (1));
seq__54525_54529 = G__54534;
chunk__54526_54530 = G__54535;
count__54527_54531 = G__54536;
i__54528_54532 = G__54537;
continue;
}
} else
{var temp__4126__auto___54538 = cljs.core.seq(seq__54525_54529);if(temp__4126__auto___54538)
{var seq__54525_54539__$1 = temp__4126__auto___54538;if(cljs.core.chunked_seq_QMARK_(seq__54525_54539__$1))
{var c__4314__auto___54540 = cljs.core.chunk_first(seq__54525_54539__$1);{
var G__54541 = cljs.core.chunk_rest(seq__54525_54539__$1);
var G__54542 = c__4314__auto___54540;
var G__54543 = cljs.core.count(c__4314__auto___54540);
var G__54544 = (0);
seq__54525_54529 = G__54541;
chunk__54526_54530 = G__54542;
count__54527_54531 = G__54543;
i__54528_54532 = G__54544;
continue;
}
} else
{var node_54545 = cljs.core.first(seq__54525_54539__$1);goog.dom.setTextContent(node_54545,value);
{
var G__54546 = cljs.core.next(seq__54525_54539__$1);
var G__54547 = null;
var G__54548 = (0);
var G__54549 = (0);
seq__54525_54529 = G__54546;
chunk__54526_54530 = G__54547;
count__54527_54531 = G__54548;
i__54528_54532 = G__54549;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the value of a node (presumably a form field). Assumes content is a single node.
*/
domina.value = (function value(content){return goog.dom.forms.getValue(domina.single_node(content));
});
/**
* Sets the value of all the nodes (presumably form fields) in the given content.
*/
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__54554_54558 = cljs.core.seq(domina.nodes(content));var chunk__54555_54559 = null;var count__54556_54560 = (0);var i__54557_54561 = (0);while(true){
if((i__54557_54561 < count__54556_54560))
{var node_54562 = chunk__54555_54559.cljs$core$IIndexed$_nth$arity$2(null,i__54557_54561);goog.dom.forms.setValue(node_54562,value);
{
var G__54563 = seq__54554_54558;
var G__54564 = chunk__54555_54559;
var G__54565 = count__54556_54560;
var G__54566 = (i__54557_54561 + (1));
seq__54554_54558 = G__54563;
chunk__54555_54559 = G__54564;
count__54556_54560 = G__54565;
i__54557_54561 = G__54566;
continue;
}
} else
{var temp__4126__auto___54567 = cljs.core.seq(seq__54554_54558);if(temp__4126__auto___54567)
{var seq__54554_54568__$1 = temp__4126__auto___54567;if(cljs.core.chunked_seq_QMARK_(seq__54554_54568__$1))
{var c__4314__auto___54569 = cljs.core.chunk_first(seq__54554_54568__$1);{
var G__54570 = cljs.core.chunk_rest(seq__54554_54568__$1);
var G__54571 = c__4314__auto___54569;
var G__54572 = cljs.core.count(c__4314__auto___54569);
var G__54573 = (0);
seq__54554_54558 = G__54570;
chunk__54555_54559 = G__54571;
count__54556_54560 = G__54572;
i__54557_54561 = G__54573;
continue;
}
} else
{var node_54574 = cljs.core.first(seq__54554_54568__$1);goog.dom.forms.setValue(node_54574,value);
{
var G__54575 = cljs.core.next(seq__54554_54568__$1);
var G__54576 = null;
var G__54577 = (0);
var G__54578 = (0);
seq__54554_54558 = G__54575;
chunk__54555_54559 = G__54576;
count__54556_54560 = G__54577;
i__54557_54561 = G__54578;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the innerHTML of a node. Assumes content is a single node.
*/
domina.html = (function html(content){return domina.single_node(content).innerHTML;
});
domina.replace_children_BANG_ = (function replace_children_BANG_(content,inner_content){return domina.append_BANG_(domina.destroy_children_BANG_(content),inner_content);
});
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){var allows_inner_html_QMARK_ = cljs.core.not(cljs.core.re_find(domina.re_no_inner_html,html_string));var leading_whitespace_QMARK_ = cljs.core.re_find(domina.re_leading_whitespace,html_string);var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second(cljs.core.re_find(domina.re_tag_name,html_string)))).toLowerCase();var special_tag_QMARK_ = cljs.core.contains_QMARK_(domina.wrap_map,tag_name);if(cljs.core.truth_((function (){var and__3546__auto__ = allows_inner_html_QMARK_;if(and__3546__auto__)
{var and__3546__auto____$1 = (function (){var or__3558__auto__ = domina.support.leading_whitespace_QMARK_;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return cljs.core.not(leading_whitespace_QMARK_);
}
})();if(cljs.core.truth_(and__3546__auto____$1))
{return !(special_tag_QMARK_);
} else
{return and__3546__auto____$1;
}
} else
{return and__3546__auto__;
}
})()))
{var value_54589 = clojure.string.replace(html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__54585_54590 = cljs.core.seq(domina.nodes(content));var chunk__54586_54591 = null;var count__54587_54592 = (0);var i__54588_54593 = (0);while(true){
if((i__54588_54593 < count__54587_54592))
{var node_54594 = chunk__54586_54591.cljs$core$IIndexed$_nth$arity$2(null,i__54588_54593);node_54594.innerHTML = value_54589;
{
var G__54595 = seq__54585_54590;
var G__54596 = chunk__54586_54591;
var G__54597 = count__54587_54592;
var G__54598 = (i__54588_54593 + (1));
seq__54585_54590 = G__54595;
chunk__54586_54591 = G__54596;
count__54587_54592 = G__54597;
i__54588_54593 = G__54598;
continue;
}
} else
{var temp__4126__auto___54599 = cljs.core.seq(seq__54585_54590);if(temp__4126__auto___54599)
{var seq__54585_54600__$1 = temp__4126__auto___54599;if(cljs.core.chunked_seq_QMARK_(seq__54585_54600__$1))
{var c__4314__auto___54601 = cljs.core.chunk_first(seq__54585_54600__$1);{
var G__54602 = cljs.core.chunk_rest(seq__54585_54600__$1);
var G__54603 = c__4314__auto___54601;
var G__54604 = cljs.core.count(c__4314__auto___54601);
var G__54605 = (0);
seq__54585_54590 = G__54602;
chunk__54586_54591 = G__54603;
count__54587_54592 = G__54604;
i__54588_54593 = G__54605;
continue;
}
} else
{var node_54606 = cljs.core.first(seq__54585_54600__$1);node_54606.innerHTML = value_54589;
{
var G__54607 = cljs.core.next(seq__54585_54600__$1);
var G__54608 = null;
var G__54609 = (0);
var G__54610 = (0);
seq__54585_54590 = G__54607;
chunk__54586_54591 = G__54608;
count__54587_54592 = G__54609;
i__54588_54593 = G__54610;
continue;
}
}
} else
{}
}
break;
}
}catch (e54584){if((e54584 instanceof Error))
{var e_54611 = e54584;domina.replace_children_BANG_(content,value_54589);
} else
{throw e54584;

}
}} else
{domina.replace_children_BANG_(content,html_string);
}
return content;
});
/**
* Sets the innerHTML value for all the nodes in the given content.
*/
domina.set_html_BANG_ = (function set_html_BANG_(content,inner_content){if(typeof inner_content === 'string')
{return domina.set_inner_html_BANG_(content,inner_content);
} else
{return domina.replace_children_BANG_(content,inner_content);
}
});
/**
* Returns data associated with a node for a given key. Assumes
* content is a single node. If the bubble parameter is set to true,
* will search parent nodes if the key is not found.
*/
domina.get_data = (function() {
var get_data = null;
var get_data__2 = (function (node,key){return get_data.cljs$core$IFn$_invoke$arity$3(node,key,false);
});
var get_data__3 = (function (node,key,bubble){var m = domina.single_node(node).__domina_data;var value = (cljs.core.truth_(m)?cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,key):null);if(cljs.core.truth_((function (){var and__3546__auto__ = bubble;if(cljs.core.truth_(and__3546__auto__))
{return (value == null);
} else
{return and__3546__auto__;
}
})()))
{var temp__4126__auto__ = domina.single_node(node).parentNode;if(cljs.core.truth_(temp__4126__auto__))
{var parent = temp__4126__auto__;return get_data.cljs$core$IFn$_invoke$arity$3(parent,key,true);
} else
{return null;
}
} else
{return value;
}
});
get_data = function(node,key,bubble){
switch(arguments.length){
case 2:
return get_data__2.call(this,node,key);
case 3:
return get_data__3.call(this,node,key,bubble);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_data.cljs$core$IFn$_invoke$arity$2 = get_data__2;
get_data.cljs$core$IFn$_invoke$arity$3 = get_data__3;
return get_data;
})()
;
/**
* Sets a data on the node for a given key. Assumes content is a
* single node. Data should be ClojureScript values and data structures
* only; using other objects as data may result in memory leaks on some
* browsers.
*/
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){var m = (function (){var or__3558__auto__ = domina.single_node(node).__domina_data;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})();return domina.single_node(node).__domina_data = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,key,value);
});
/**
* Takes a two-arg function, a reference DomContent and new
* DomContent. Applies the function for each reference / content
* combination. Uses clones of the new content for each additional
* parent after the first.
*/
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes(parent_content);var children = domina.nodes(child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__54618_54622 = cljs.core.seq(children);var chunk__54619_54623 = null;var count__54620_54624 = (0);var i__54621_54625 = (0);while(true){
if((i__54621_54625 < count__54620_54624))
{var child_54626 = chunk__54619_54623.cljs$core$IIndexed$_nth$arity$2(null,i__54621_54625);frag.appendChild(child_54626);
{
var G__54627 = seq__54618_54622;
var G__54628 = chunk__54619_54623;
var G__54629 = count__54620_54624;
var G__54630 = (i__54621_54625 + (1));
seq__54618_54622 = G__54627;
chunk__54619_54623 = G__54628;
count__54620_54624 = G__54629;
i__54621_54625 = G__54630;
continue;
}
} else
{var temp__4126__auto___54631 = cljs.core.seq(seq__54618_54622);if(temp__4126__auto___54631)
{var seq__54618_54632__$1 = temp__4126__auto___54631;if(cljs.core.chunked_seq_QMARK_(seq__54618_54632__$1))
{var c__4314__auto___54633 = cljs.core.chunk_first(seq__54618_54632__$1);{
var G__54634 = cljs.core.chunk_rest(seq__54618_54632__$1);
var G__54635 = c__4314__auto___54633;
var G__54636 = cljs.core.count(c__4314__auto___54633);
var G__54637 = (0);
seq__54618_54622 = G__54634;
chunk__54619_54623 = G__54635;
count__54620_54624 = G__54636;
i__54621_54625 = G__54637;
continue;
}
} else
{var child_54638 = cljs.core.first(seq__54618_54632__$1);frag.appendChild(child_54638);
{
var G__54639 = cljs.core.next(seq__54618_54632__$1);
var G__54640 = null;
var G__54641 = (0);
var G__54642 = (0);
seq__54618_54622 = G__54639;
chunk__54619_54623 = G__54640;
count__54620_54624 = G__54641;
i__54621_54625 = G__54642;
continue;
}
}
} else
{}
}
break;
}
return frag;
})();var other_children = cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2((cljs.core.count(parents) - (1)),((function (parents,children,first_child){
return (function (){return first_child.cloneNode(true);
});})(parents,children,first_child))
));if(cljs.core.seq(parents))
{(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(cljs.core.first(parents),first_child) : f.call(null,cljs.core.first(parents),first_child));
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (parents,children,first_child,other_children){
return (function (p1__54612_SHARP_,p2__54613_SHARP_){return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(p1__54612_SHARP_,p2__54613_SHARP_) : f.call(null,p1__54612_SHARP_,p2__54613_SHARP_));
});})(parents,children,first_child,other_children))
,cljs.core.rest(parents),other_children));
} else
{return null;
}
});
domina.lazy_nl_via_item = (function() {
var lazy_nl_via_item = null;
var lazy_nl_via_item__1 = (function (nl){return lazy_nl_via_item.cljs$core$IFn$_invoke$arity$2(nl,(0));
});
var lazy_nl_via_item__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons(nl.item(n),lazy_nl_via_item.cljs$core$IFn$_invoke$arity$2(nl,(n + (1))));
}),null,null));
} else
{return null;
}
});
lazy_nl_via_item = function(nl,n){
switch(arguments.length){
case 1:
return lazy_nl_via_item__1.call(this,nl);
case 2:
return lazy_nl_via_item__2.call(this,nl,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lazy_nl_via_item.cljs$core$IFn$_invoke$arity$1 = lazy_nl_via_item__1;
lazy_nl_via_item.cljs$core$IFn$_invoke$arity$2 = lazy_nl_via_item__2;
return lazy_nl_via_item;
})()
;
domina.lazy_nl_via_array_ref = (function() {
var lazy_nl_via_array_ref = null;
var lazy_nl_via_array_ref__1 = (function (nl){return lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$2(nl,(0));
});
var lazy_nl_via_array_ref__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons((nl[n]),lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$2(nl,(n + (1))));
}),null,null));
} else
{return null;
}
});
lazy_nl_via_array_ref = function(nl,n){
switch(arguments.length){
case 1:
return lazy_nl_via_array_ref__1.call(this,nl);
case 2:
return lazy_nl_via_array_ref__2.call(this,nl,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$1 = lazy_nl_via_array_ref__1;
lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$2 = lazy_nl_via_array_ref__2;
return lazy_nl_via_array_ref;
})()
;
/**
* A lazy seq view of a js/NodeList, or other array-like javascript things
*/
domina.lazy_nodelist = (function lazy_nodelist(nl){if(cljs.core.truth_(nl.item))
{return domina.lazy_nl_via_item.cljs$core$IFn$_invoke$arity$1(nl);
} else
{return domina.lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$1(nl);
}
});
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){var and__3546__auto__ = obj;if(cljs.core.truth_(and__3546__auto__))
{var and__3546__auto____$1 = cljs.core.not(obj.nodeName);if(and__3546__auto____$1)
{return obj.length;
} else
{return and__3546__auto____$1;
}
} else
{return and__3546__auto__;
}
});
/**
* Some versions of IE have things that are like arrays in that they
* respond to .length, but are not arrays nor NodeSets. This returns a
* real sequence view of such objects. If passed an object that is not
* a logical sequence at all, returns a single-item seq containing the
* object.
*/
domina.normalize_seq = (function normalize_seq(list_thing){if((list_thing == null))
{return cljs.core.List.EMPTY;
} else
{if((function (){var G__54644 = list_thing;if(G__54644)
{var bit__4208__auto__ = (G__54644.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4208__auto__) || (G__54644.cljs$core$ISeqable$))
{return true;
} else
{if((!G__54644.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__54644);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__54644);
}
})())
{return cljs.core.seq(list_thing);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(list_thing)))
{return domina.lazy_nodelist(list_thing);
} else
{return cljs.core.seq(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [list_thing], null));

}
}
}
});
(domina.DomContent["_"] = true);
(domina.nodes["_"] = (function (content){if((content == null))
{return cljs.core.List.EMPTY;
} else
{if((function (){var G__54645 = content;if(G__54645)
{var bit__4208__auto__ = (G__54645.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4208__auto__) || (G__54645.cljs$core$ISeqable$))
{return true;
} else
{if((!G__54645.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__54645);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__54645);
}
})())
{return cljs.core.seq(content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(content)))
{return domina.lazy_nodelist(content);
} else
{return cljs.core.seq(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content], null));

}
}
}
}));
(domina.single_node["_"] = (function (content){if((content == null))
{return null;
} else
{if((function (){var G__54646 = content;if(G__54646)
{var bit__4208__auto__ = (G__54646.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4208__auto__) || (G__54646.cljs$core$ISeqable$))
{return true;
} else
{if((!G__54646.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__54646);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__54646);
}
})())
{return cljs.core.first(content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(content)))
{return content.item((0));
} else
{return content;

}
}
}
}));
(domina.DomContent["string"] = true);
(domina.nodes["string"] = (function (s){return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(domina.nodes(domina.string_to_dom(s)));
}));
(domina.single_node["string"] = (function (s){return domina.single_node(domina.string_to_dom(s));
}));
if(cljs.core.truth_((typeof NodeList != 'undefined')))
{NodeList.prototype.cljs$core$ISeqable$ = true;
NodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){var nodelist__$1 = this;return domina.lazy_nodelist(nodelist__$1);
});
NodeList.prototype.cljs$core$IIndexed$ = true;
NodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){var nodelist__$1 = this;return nodelist__$1.item(n);
});
NodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){var nodelist__$1 = this;if((nodelist__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(nodelist__$1,n);
}
});
NodeList.prototype.cljs$core$ICounted$ = true;
NodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){var nodelist__$1 = this;return nodelist__$1.length;
});
} else
{}
if(cljs.core.truth_((typeof StaticNodeList != 'undefined')))
{StaticNodeList.prototype.cljs$core$ISeqable$ = true;
StaticNodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){var nodelist__$1 = this;return domina.lazy_nodelist(nodelist__$1);
});
StaticNodeList.prototype.cljs$core$IIndexed$ = true;
StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){var nodelist__$1 = this;return nodelist__$1.item(n);
});
StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){var nodelist__$1 = this;if((nodelist__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(nodelist__$1,n);
}
});
StaticNodeList.prototype.cljs$core$ICounted$ = true;
StaticNodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){var nodelist__$1 = this;return nodelist__$1.length;
});
} else
{}
if(cljs.core.truth_((typeof HTMLCollection != 'undefined')))
{HTMLCollection.prototype.cljs$core$ISeqable$ = true;
HTMLCollection.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var coll__$1 = this;return domina.lazy_nodelist(coll__$1);
});
HTMLCollection.prototype.cljs$core$IIndexed$ = true;
HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){var coll__$1 = this;return coll__$1.item(n);
});
HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){var coll__$1 = this;if((coll__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(coll__$1,n);
}
});
HTMLCollection.prototype.cljs$core$ICounted$ = true;
HTMLCollection.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var coll__$1 = this;return coll__$1.length;
});
} else
{}
