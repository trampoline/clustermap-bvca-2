// Compiled by ClojureScript 0.0-2261
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
var opt_wrapper_42253 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_42254 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);var cell_wrapper_42255 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",cljs.core.constant$keyword$757,"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_42255,opt_wrapper_42253,table_section_wrapper_42254,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_42253,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_42254,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_42254,cell_wrapper_42255,table_section_wrapper_42254,table_section_wrapper_42254]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not(cljs.core.re_find(domina.re_tbody,html));var tbody = (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3531__auto__ = div.firstChild;if(cljs.core.truth_(and__3531__auto__))
{return div.firstChild.childNodes;
} else
{return and__3531__auto__;
}
})():(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__42260 = cljs.core.seq(tbody);var chunk__42261 = null;var count__42262 = (0);var i__42263 = (0);while(true){
if((i__42263 < count__42262))
{var child = chunk__42261.cljs$core$IIndexed$_nth$arity$2(null,i__42263);if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.nodeName,"tbody")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__42264 = seq__42260;
var G__42265 = chunk__42261;
var G__42266 = count__42262;
var G__42267 = (i__42263 + (1));
seq__42260 = G__42264;
chunk__42261 = G__42265;
count__42262 = G__42266;
i__42263 = G__42267;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__42260);if(temp__4126__auto__)
{var seq__42260__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__42260__$1))
{var c__4299__auto__ = cljs.core.chunk_first(seq__42260__$1);{
var G__42268 = cljs.core.chunk_rest(seq__42260__$1);
var G__42269 = c__4299__auto__;
var G__42270 = cljs.core.count(c__4299__auto__);
var G__42271 = (0);
seq__42260 = G__42268;
chunk__42261 = G__42269;
count__42262 = G__42270;
i__42263 = G__42271;
continue;
}
} else
{var child = cljs.core.first(seq__42260__$1);if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.nodeName,"tbody")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__42272 = cljs.core.next(seq__42260__$1);
var G__42273 = null;
var G__42274 = (0);
var G__42275 = (0);
seq__42260 = G__42272;
chunk__42261 = G__42273;
count__42262 = G__42274;
i__42263 = G__42275;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace(html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second(cljs.core.re_find(domina.re_tag_name,html__$1)))).toLowerCase();var vec__42277 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(domina.wrap_map,tag_name,cljs.core.constant$keyword$757.cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42277,(0),null);var start_wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42277,(1),null);var end_wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42277,(2),null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(start_wrap)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(html__$1)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(end_wrap));
return div;
})();var level = depth;while(true){
if((level > (0)))
{{
var G__42278 = wrapper.lastChild;
var G__42279 = (level - (1));
wrapper = G__42278;
level = G__42279;
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
if(cljs.core.truth_((function (){var and__3531__auto__ = cljs.core.not(domina.support.leading_whitespace_QMARK_);if(and__3531__auto__)
{return cljs.core.re_find(domina.re_leading_whitespace,html__$1);
} else
{return and__3531__auto__;
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
domina.DomContent = (function (){var obj42281 = {};return obj42281;
})();
domina.nodes = (function nodes(content){if((function (){var and__3531__auto__ = content;if(and__3531__auto__)
{return content.domina$DomContent$nodes$arity$1;
} else
{return and__3531__auto__;
}
})())
{return content.domina$DomContent$nodes$arity$1(content);
} else
{var x__4170__auto__ = (((content == null))?null:content);return (function (){var or__3543__auto__ = (domina.nodes[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (domina.nodes["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol("DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){if((function (){var and__3531__auto__ = nodeseq;if(and__3531__auto__)
{return nodeseq.domina$DomContent$single_node$arity$1;
} else
{return and__3531__auto__;
}
})())
{return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else
{var x__4170__auto__ = (((nodeseq == null))?null:nodeseq);return (function (){var or__3543__auto__ = (domina.single_node[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (domina.single_node["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
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
var log_debug__delegate = function (mesg){if(cljs.core.truth_((function (){var and__3531__auto__ = domina._STAR_debug_STAR_;if(cljs.core.truth_(and__3531__auto__))
{return !(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(window.console,undefined));
} else
{return and__3531__auto__;
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
log_debug.cljs$lang$applyTo = (function (arglist__42282){
var mesg = cljs.core.seq(arglist__42282);
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
log.cljs$lang$applyTo = (function (arglist__42283){
var mesg = cljs.core.seq(arglist__42283);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__42284){
var contents = cljs.core.seq(arglist__42284);
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
domina.clone = (function clone(content){return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__42285_SHARP_){return p1__42285_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__42286_SHARP_,p2__42287_SHARP_){return goog.dom.insertChildAt(p1__42286_SHARP_,p2__42287_SHARP_,idx);
}),parent_content,child_content) : domina.apply_with_cloning.call(null,(function (p1__42286_SHARP_,p2__42287_SHARP_){return goog.dom.insertChildAt(p1__42286_SHARP_,p2__42287_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__42289_SHARP_,p2__42288_SHARP_){return goog.dom.insertSiblingBefore(p2__42288_SHARP_,p1__42289_SHARP_);
}),content,new_content) : domina.apply_with_cloning.call(null,(function (p1__42289_SHARP_,p2__42288_SHARP_){return goog.dom.insertSiblingBefore(p2__42288_SHARP_,p1__42289_SHARP_);
}),content,new_content));
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__42291_SHARP_,p2__42290_SHARP_){return goog.dom.insertSiblingAfter(p2__42290_SHARP_,p1__42291_SHARP_);
}),content,new_content) : domina.apply_with_cloning.call(null,(function (p1__42291_SHARP_,p2__42290_SHARP_){return goog.dom.insertSiblingAfter(p2__42290_SHARP_,p1__42291_SHARP_);
}),content,new_content));
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__42293_SHARP_,p2__42292_SHARP_){return goog.dom.replaceNode(p2__42292_SHARP_,p1__42293_SHARP_);
}),old_content,new_content) : domina.apply_with_cloning.call(null,(function (p1__42293_SHARP_,p2__42292_SHARP_){return goog.dom.replaceNode(p2__42292_SHARP_,p1__42293_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__42298_42302 = cljs.core.seq(domina.nodes(content));var chunk__42299_42303 = null;var count__42300_42304 = (0);var i__42301_42305 = (0);while(true){
if((i__42301_42305 < count__42300_42304))
{var n_42306 = chunk__42299_42303.cljs$core$IIndexed$_nth$arity$2(null,i__42301_42305);goog.style.setStyle(n_42306,cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__42307 = seq__42298_42302;
var G__42308 = chunk__42299_42303;
var G__42309 = count__42300_42304;
var G__42310 = (i__42301_42305 + (1));
seq__42298_42302 = G__42307;
chunk__42299_42303 = G__42308;
count__42300_42304 = G__42309;
i__42301_42305 = G__42310;
continue;
}
} else
{var temp__4126__auto___42311 = cljs.core.seq(seq__42298_42302);if(temp__4126__auto___42311)
{var seq__42298_42312__$1 = temp__4126__auto___42311;if(cljs.core.chunked_seq_QMARK_(seq__42298_42312__$1))
{var c__4299__auto___42313 = cljs.core.chunk_first(seq__42298_42312__$1);{
var G__42314 = cljs.core.chunk_rest(seq__42298_42312__$1);
var G__42315 = c__4299__auto___42313;
var G__42316 = cljs.core.count(c__4299__auto___42313);
var G__42317 = (0);
seq__42298_42302 = G__42314;
chunk__42299_42303 = G__42315;
count__42300_42304 = G__42316;
i__42301_42305 = G__42317;
continue;
}
} else
{var n_42318 = cljs.core.first(seq__42298_42312__$1);goog.style.setStyle(n_42318,cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__42319 = cljs.core.next(seq__42298_42312__$1);
var G__42320 = null;
var G__42321 = (0);
var G__42322 = (0);
seq__42298_42302 = G__42319;
chunk__42299_42303 = G__42320;
count__42300_42304 = G__42321;
i__42301_42305 = G__42322;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__42323){
var content = cljs.core.first(arglist__42323);
arglist__42323 = cljs.core.next(arglist__42323);
var name = cljs.core.first(arglist__42323);
var value = cljs.core.rest(arglist__42323);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__42328_42332 = cljs.core.seq(domina.nodes(content));var chunk__42329_42333 = null;var count__42330_42334 = (0);var i__42331_42335 = (0);while(true){
if((i__42331_42335 < count__42330_42334))
{var n_42336 = chunk__42329_42333.cljs$core$IIndexed$_nth$arity$2(null,i__42331_42335);n_42336.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__42337 = seq__42328_42332;
var G__42338 = chunk__42329_42333;
var G__42339 = count__42330_42334;
var G__42340 = (i__42331_42335 + (1));
seq__42328_42332 = G__42337;
chunk__42329_42333 = G__42338;
count__42330_42334 = G__42339;
i__42331_42335 = G__42340;
continue;
}
} else
{var temp__4126__auto___42341 = cljs.core.seq(seq__42328_42332);if(temp__4126__auto___42341)
{var seq__42328_42342__$1 = temp__4126__auto___42341;if(cljs.core.chunked_seq_QMARK_(seq__42328_42342__$1))
{var c__4299__auto___42343 = cljs.core.chunk_first(seq__42328_42342__$1);{
var G__42344 = cljs.core.chunk_rest(seq__42328_42342__$1);
var G__42345 = c__4299__auto___42343;
var G__42346 = cljs.core.count(c__4299__auto___42343);
var G__42347 = (0);
seq__42328_42332 = G__42344;
chunk__42329_42333 = G__42345;
count__42330_42334 = G__42346;
i__42331_42335 = G__42347;
continue;
}
} else
{var n_42348 = cljs.core.first(seq__42328_42342__$1);n_42348.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__42349 = cljs.core.next(seq__42328_42342__$1);
var G__42350 = null;
var G__42351 = (0);
var G__42352 = (0);
seq__42328_42332 = G__42349;
chunk__42329_42333 = G__42350;
count__42330_42334 = G__42351;
i__42331_42335 = G__42352;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__42353){
var content = cljs.core.first(arglist__42353);
arglist__42353 = cljs.core.next(arglist__42353);
var name = cljs.core.first(arglist__42353);
var value = cljs.core.rest(arglist__42353);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__42358_42362 = cljs.core.seq(domina.nodes(content));var chunk__42359_42363 = null;var count__42360_42364 = (0);var i__42361_42365 = (0);while(true){
if((i__42361_42365 < count__42360_42364))
{var n_42366 = chunk__42359_42363.cljs$core$IIndexed$_nth$arity$2(null,i__42361_42365);n_42366.removeAttribute(cljs.core.name(name));
{
var G__42367 = seq__42358_42362;
var G__42368 = chunk__42359_42363;
var G__42369 = count__42360_42364;
var G__42370 = (i__42361_42365 + (1));
seq__42358_42362 = G__42367;
chunk__42359_42363 = G__42368;
count__42360_42364 = G__42369;
i__42361_42365 = G__42370;
continue;
}
} else
{var temp__4126__auto___42371 = cljs.core.seq(seq__42358_42362);if(temp__4126__auto___42371)
{var seq__42358_42372__$1 = temp__4126__auto___42371;if(cljs.core.chunked_seq_QMARK_(seq__42358_42372__$1))
{var c__4299__auto___42373 = cljs.core.chunk_first(seq__42358_42372__$1);{
var G__42374 = cljs.core.chunk_rest(seq__42358_42372__$1);
var G__42375 = c__4299__auto___42373;
var G__42376 = cljs.core.count(c__4299__auto___42373);
var G__42377 = (0);
seq__42358_42362 = G__42374;
chunk__42359_42363 = G__42375;
count__42360_42364 = G__42376;
i__42361_42365 = G__42377;
continue;
}
} else
{var n_42378 = cljs.core.first(seq__42358_42372__$1);n_42378.removeAttribute(cljs.core.name(name));
{
var G__42379 = cljs.core.next(seq__42358_42372__$1);
var G__42380 = null;
var G__42381 = (0);
var G__42382 = (0);
seq__42358_42362 = G__42379;
chunk__42359_42363 = G__42380;
count__42360_42364 = G__42381;
i__42361_42365 = G__42382;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,pair){var vec__42384 = pair.split(/\s*:\s*/);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42384,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42384,(1),null);if(cljs.core.truth_((function (){var and__3531__auto__ = k;if(cljs.core.truth_(and__3531__auto__))
{return v;
} else
{return and__3531__auto__;
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
{if(cljs.core.constant$keyword$756)
{return cljs.core.PersistentArrayMap.EMPTY;
} else
{return null;
}
}
}
}
});
/**
* Returns a map of the HTML attributes/values. Assumes content will be a single node. Attribute names are returned as keywords.
*/
domina.attrs = (function attrs(content){var node = domina.single_node(content);var attrs__$1 = node.attributes;return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.filter(cljs.core.complement(cljs.core.nil_QMARK_),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (node,attrs__$1){
return (function (p1__42385_SHARP_){var attr = attrs__$1.item(p1__42385_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(null,value)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("",value)))
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
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__42392_42398 = cljs.core.seq(styles);var chunk__42393_42399 = null;var count__42394_42400 = (0);var i__42395_42401 = (0);while(true){
if((i__42395_42401 < count__42394_42400))
{var vec__42396_42402 = chunk__42393_42399.cljs$core$IIndexed$_nth$arity$2(null,i__42395_42401);var name_42403 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42396_42402,(0),null);var value_42404 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42396_42402,(1),null);domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_42403,cljs.core.array_seq([value_42404], 0));
{
var G__42405 = seq__42392_42398;
var G__42406 = chunk__42393_42399;
var G__42407 = count__42394_42400;
var G__42408 = (i__42395_42401 + (1));
seq__42392_42398 = G__42405;
chunk__42393_42399 = G__42406;
count__42394_42400 = G__42407;
i__42395_42401 = G__42408;
continue;
}
} else
{var temp__4126__auto___42409 = cljs.core.seq(seq__42392_42398);if(temp__4126__auto___42409)
{var seq__42392_42410__$1 = temp__4126__auto___42409;if(cljs.core.chunked_seq_QMARK_(seq__42392_42410__$1))
{var c__4299__auto___42411 = cljs.core.chunk_first(seq__42392_42410__$1);{
var G__42412 = cljs.core.chunk_rest(seq__42392_42410__$1);
var G__42413 = c__4299__auto___42411;
var G__42414 = cljs.core.count(c__4299__auto___42411);
var G__42415 = (0);
seq__42392_42398 = G__42412;
chunk__42393_42399 = G__42413;
count__42394_42400 = G__42414;
i__42395_42401 = G__42415;
continue;
}
} else
{var vec__42397_42416 = cljs.core.first(seq__42392_42410__$1);var name_42417 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42397_42416,(0),null);var value_42418 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42397_42416,(1),null);domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_42417,cljs.core.array_seq([value_42418], 0));
{
var G__42419 = cljs.core.next(seq__42392_42410__$1);
var G__42420 = null;
var G__42421 = (0);
var G__42422 = (0);
seq__42392_42398 = G__42419;
chunk__42393_42399 = G__42420;
count__42394_42400 = G__42421;
i__42395_42401 = G__42422;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__42429_42435 = cljs.core.seq(attrs);var chunk__42430_42436 = null;var count__42431_42437 = (0);var i__42432_42438 = (0);while(true){
if((i__42432_42438 < count__42431_42437))
{var vec__42433_42439 = chunk__42430_42436.cljs$core$IIndexed$_nth$arity$2(null,i__42432_42438);var name_42440 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42433_42439,(0),null);var value_42441 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42433_42439,(1),null);domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_42440,cljs.core.array_seq([value_42441], 0));
{
var G__42442 = seq__42429_42435;
var G__42443 = chunk__42430_42436;
var G__42444 = count__42431_42437;
var G__42445 = (i__42432_42438 + (1));
seq__42429_42435 = G__42442;
chunk__42430_42436 = G__42443;
count__42431_42437 = G__42444;
i__42432_42438 = G__42445;
continue;
}
} else
{var temp__4126__auto___42446 = cljs.core.seq(seq__42429_42435);if(temp__4126__auto___42446)
{var seq__42429_42447__$1 = temp__4126__auto___42446;if(cljs.core.chunked_seq_QMARK_(seq__42429_42447__$1))
{var c__4299__auto___42448 = cljs.core.chunk_first(seq__42429_42447__$1);{
var G__42449 = cljs.core.chunk_rest(seq__42429_42447__$1);
var G__42450 = c__4299__auto___42448;
var G__42451 = cljs.core.count(c__4299__auto___42448);
var G__42452 = (0);
seq__42429_42435 = G__42449;
chunk__42430_42436 = G__42450;
count__42431_42437 = G__42451;
i__42432_42438 = G__42452;
continue;
}
} else
{var vec__42434_42453 = cljs.core.first(seq__42429_42447__$1);var name_42454 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42434_42453,(0),null);var value_42455 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42434_42453,(1),null);domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_42454,cljs.core.array_seq([value_42455], 0));
{
var G__42456 = cljs.core.next(seq__42429_42447__$1);
var G__42457 = null;
var G__42458 = (0);
var G__42459 = (0);
seq__42429_42435 = G__42456;
chunk__42430_42436 = G__42457;
count__42431_42437 = G__42458;
i__42432_42438 = G__42459;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__42464_42468 = cljs.core.seq(domina.nodes(content));var chunk__42465_42469 = null;var count__42466_42470 = (0);var i__42467_42471 = (0);while(true){
if((i__42467_42471 < count__42466_42470))
{var node_42472 = chunk__42465_42469.cljs$core$IIndexed$_nth$arity$2(null,i__42467_42471);goog.dom.classes.add(node_42472,class$);
{
var G__42473 = seq__42464_42468;
var G__42474 = chunk__42465_42469;
var G__42475 = count__42466_42470;
var G__42476 = (i__42467_42471 + (1));
seq__42464_42468 = G__42473;
chunk__42465_42469 = G__42474;
count__42466_42470 = G__42475;
i__42467_42471 = G__42476;
continue;
}
} else
{var temp__4126__auto___42477 = cljs.core.seq(seq__42464_42468);if(temp__4126__auto___42477)
{var seq__42464_42478__$1 = temp__4126__auto___42477;if(cljs.core.chunked_seq_QMARK_(seq__42464_42478__$1))
{var c__4299__auto___42479 = cljs.core.chunk_first(seq__42464_42478__$1);{
var G__42480 = cljs.core.chunk_rest(seq__42464_42478__$1);
var G__42481 = c__4299__auto___42479;
var G__42482 = cljs.core.count(c__4299__auto___42479);
var G__42483 = (0);
seq__42464_42468 = G__42480;
chunk__42465_42469 = G__42481;
count__42466_42470 = G__42482;
i__42467_42471 = G__42483;
continue;
}
} else
{var node_42484 = cljs.core.first(seq__42464_42478__$1);goog.dom.classes.add(node_42484,class$);
{
var G__42485 = cljs.core.next(seq__42464_42478__$1);
var G__42486 = null;
var G__42487 = (0);
var G__42488 = (0);
seq__42464_42468 = G__42485;
chunk__42465_42469 = G__42486;
count__42466_42470 = G__42487;
i__42467_42471 = G__42488;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__42493_42497 = cljs.core.seq(domina.nodes(content));var chunk__42494_42498 = null;var count__42495_42499 = (0);var i__42496_42500 = (0);while(true){
if((i__42496_42500 < count__42495_42499))
{var node_42501 = chunk__42494_42498.cljs$core$IIndexed$_nth$arity$2(null,i__42496_42500);goog.dom.classes.remove(node_42501,class$);
{
var G__42502 = seq__42493_42497;
var G__42503 = chunk__42494_42498;
var G__42504 = count__42495_42499;
var G__42505 = (i__42496_42500 + (1));
seq__42493_42497 = G__42502;
chunk__42494_42498 = G__42503;
count__42495_42499 = G__42504;
i__42496_42500 = G__42505;
continue;
}
} else
{var temp__4126__auto___42506 = cljs.core.seq(seq__42493_42497);if(temp__4126__auto___42506)
{var seq__42493_42507__$1 = temp__4126__auto___42506;if(cljs.core.chunked_seq_QMARK_(seq__42493_42507__$1))
{var c__4299__auto___42508 = cljs.core.chunk_first(seq__42493_42507__$1);{
var G__42509 = cljs.core.chunk_rest(seq__42493_42507__$1);
var G__42510 = c__4299__auto___42508;
var G__42511 = cljs.core.count(c__4299__auto___42508);
var G__42512 = (0);
seq__42493_42497 = G__42509;
chunk__42494_42498 = G__42510;
count__42495_42499 = G__42511;
i__42496_42500 = G__42512;
continue;
}
} else
{var node_42513 = cljs.core.first(seq__42493_42507__$1);goog.dom.classes.remove(node_42513,class$);
{
var G__42514 = cljs.core.next(seq__42493_42507__$1);
var G__42515 = null;
var G__42516 = (0);
var G__42517 = (0);
seq__42493_42497 = G__42514;
chunk__42494_42498 = G__42515;
count__42495_42499 = G__42516;
i__42496_42500 = G__42517;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__42522_42526 = cljs.core.seq(domina.nodes(content));var chunk__42523_42527 = null;var count__42524_42528 = (0);var i__42525_42529 = (0);while(true){
if((i__42525_42529 < count__42524_42528))
{var node_42530 = chunk__42523_42527.cljs$core$IIndexed$_nth$arity$2(null,i__42525_42529);goog.dom.classes.toggle(node_42530,class$);
{
var G__42531 = seq__42522_42526;
var G__42532 = chunk__42523_42527;
var G__42533 = count__42524_42528;
var G__42534 = (i__42525_42529 + (1));
seq__42522_42526 = G__42531;
chunk__42523_42527 = G__42532;
count__42524_42528 = G__42533;
i__42525_42529 = G__42534;
continue;
}
} else
{var temp__4126__auto___42535 = cljs.core.seq(seq__42522_42526);if(temp__4126__auto___42535)
{var seq__42522_42536__$1 = temp__4126__auto___42535;if(cljs.core.chunked_seq_QMARK_(seq__42522_42536__$1))
{var c__4299__auto___42537 = cljs.core.chunk_first(seq__42522_42536__$1);{
var G__42538 = cljs.core.chunk_rest(seq__42522_42536__$1);
var G__42539 = c__4299__auto___42537;
var G__42540 = cljs.core.count(c__4299__auto___42537);
var G__42541 = (0);
seq__42522_42526 = G__42538;
chunk__42523_42527 = G__42539;
count__42524_42528 = G__42540;
i__42525_42529 = G__42541;
continue;
}
} else
{var node_42542 = cljs.core.first(seq__42522_42536__$1);goog.dom.classes.toggle(node_42542,class$);
{
var G__42543 = cljs.core.next(seq__42522_42536__$1);
var G__42544 = null;
var G__42545 = (0);
var G__42546 = (0);
seq__42522_42526 = G__42543;
chunk__42523_42527 = G__42544;
count__42524_42528 = G__42545;
i__42525_42529 = G__42546;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_42555__$1 = ((cljs.core.coll_QMARK_(classes))?clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",classes):classes);var seq__42551_42556 = cljs.core.seq(domina.nodes(content));var chunk__42552_42557 = null;var count__42553_42558 = (0);var i__42554_42559 = (0);while(true){
if((i__42554_42559 < count__42553_42558))
{var node_42560 = chunk__42552_42557.cljs$core$IIndexed$_nth$arity$2(null,i__42554_42559);goog.dom.classes.set(node_42560,classes_42555__$1);
{
var G__42561 = seq__42551_42556;
var G__42562 = chunk__42552_42557;
var G__42563 = count__42553_42558;
var G__42564 = (i__42554_42559 + (1));
seq__42551_42556 = G__42561;
chunk__42552_42557 = G__42562;
count__42553_42558 = G__42563;
i__42554_42559 = G__42564;
continue;
}
} else
{var temp__4126__auto___42565 = cljs.core.seq(seq__42551_42556);if(temp__4126__auto___42565)
{var seq__42551_42566__$1 = temp__4126__auto___42565;if(cljs.core.chunked_seq_QMARK_(seq__42551_42566__$1))
{var c__4299__auto___42567 = cljs.core.chunk_first(seq__42551_42566__$1);{
var G__42568 = cljs.core.chunk_rest(seq__42551_42566__$1);
var G__42569 = c__4299__auto___42567;
var G__42570 = cljs.core.count(c__4299__auto___42567);
var G__42571 = (0);
seq__42551_42556 = G__42568;
chunk__42552_42557 = G__42569;
count__42553_42558 = G__42570;
i__42554_42559 = G__42571;
continue;
}
} else
{var node_42572 = cljs.core.first(seq__42551_42566__$1);goog.dom.classes.set(node_42572,classes_42555__$1);
{
var G__42573 = cljs.core.next(seq__42551_42566__$1);
var G__42574 = null;
var G__42575 = (0);
var G__42576 = (0);
seq__42551_42556 = G__42573;
chunk__42552_42557 = G__42574;
count__42553_42558 = G__42575;
i__42554_42559 = G__42576;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__42581_42585 = cljs.core.seq(domina.nodes(content));var chunk__42582_42586 = null;var count__42583_42587 = (0);var i__42584_42588 = (0);while(true){
if((i__42584_42588 < count__42583_42587))
{var node_42589 = chunk__42582_42586.cljs$core$IIndexed$_nth$arity$2(null,i__42584_42588);goog.dom.setTextContent(node_42589,value);
{
var G__42590 = seq__42581_42585;
var G__42591 = chunk__42582_42586;
var G__42592 = count__42583_42587;
var G__42593 = (i__42584_42588 + (1));
seq__42581_42585 = G__42590;
chunk__42582_42586 = G__42591;
count__42583_42587 = G__42592;
i__42584_42588 = G__42593;
continue;
}
} else
{var temp__4126__auto___42594 = cljs.core.seq(seq__42581_42585);if(temp__4126__auto___42594)
{var seq__42581_42595__$1 = temp__4126__auto___42594;if(cljs.core.chunked_seq_QMARK_(seq__42581_42595__$1))
{var c__4299__auto___42596 = cljs.core.chunk_first(seq__42581_42595__$1);{
var G__42597 = cljs.core.chunk_rest(seq__42581_42595__$1);
var G__42598 = c__4299__auto___42596;
var G__42599 = cljs.core.count(c__4299__auto___42596);
var G__42600 = (0);
seq__42581_42585 = G__42597;
chunk__42582_42586 = G__42598;
count__42583_42587 = G__42599;
i__42584_42588 = G__42600;
continue;
}
} else
{var node_42601 = cljs.core.first(seq__42581_42595__$1);goog.dom.setTextContent(node_42601,value);
{
var G__42602 = cljs.core.next(seq__42581_42595__$1);
var G__42603 = null;
var G__42604 = (0);
var G__42605 = (0);
seq__42581_42585 = G__42602;
chunk__42582_42586 = G__42603;
count__42583_42587 = G__42604;
i__42584_42588 = G__42605;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__42610_42614 = cljs.core.seq(domina.nodes(content));var chunk__42611_42615 = null;var count__42612_42616 = (0);var i__42613_42617 = (0);while(true){
if((i__42613_42617 < count__42612_42616))
{var node_42618 = chunk__42611_42615.cljs$core$IIndexed$_nth$arity$2(null,i__42613_42617);goog.dom.forms.setValue(node_42618,value);
{
var G__42619 = seq__42610_42614;
var G__42620 = chunk__42611_42615;
var G__42621 = count__42612_42616;
var G__42622 = (i__42613_42617 + (1));
seq__42610_42614 = G__42619;
chunk__42611_42615 = G__42620;
count__42612_42616 = G__42621;
i__42613_42617 = G__42622;
continue;
}
} else
{var temp__4126__auto___42623 = cljs.core.seq(seq__42610_42614);if(temp__4126__auto___42623)
{var seq__42610_42624__$1 = temp__4126__auto___42623;if(cljs.core.chunked_seq_QMARK_(seq__42610_42624__$1))
{var c__4299__auto___42625 = cljs.core.chunk_first(seq__42610_42624__$1);{
var G__42626 = cljs.core.chunk_rest(seq__42610_42624__$1);
var G__42627 = c__4299__auto___42625;
var G__42628 = cljs.core.count(c__4299__auto___42625);
var G__42629 = (0);
seq__42610_42614 = G__42626;
chunk__42611_42615 = G__42627;
count__42612_42616 = G__42628;
i__42613_42617 = G__42629;
continue;
}
} else
{var node_42630 = cljs.core.first(seq__42610_42624__$1);goog.dom.forms.setValue(node_42630,value);
{
var G__42631 = cljs.core.next(seq__42610_42624__$1);
var G__42632 = null;
var G__42633 = (0);
var G__42634 = (0);
seq__42610_42614 = G__42631;
chunk__42611_42615 = G__42632;
count__42612_42616 = G__42633;
i__42613_42617 = G__42634;
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
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){var allows_inner_html_QMARK_ = cljs.core.not(cljs.core.re_find(domina.re_no_inner_html,html_string));var leading_whitespace_QMARK_ = cljs.core.re_find(domina.re_leading_whitespace,html_string);var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second(cljs.core.re_find(domina.re_tag_name,html_string)))).toLowerCase();var special_tag_QMARK_ = cljs.core.contains_QMARK_(domina.wrap_map,tag_name);if(cljs.core.truth_((function (){var and__3531__auto__ = allows_inner_html_QMARK_;if(and__3531__auto__)
{var and__3531__auto____$1 = (function (){var or__3543__auto__ = domina.support.leading_whitespace_QMARK_;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return cljs.core.not(leading_whitespace_QMARK_);
}
})();if(cljs.core.truth_(and__3531__auto____$1))
{return !(special_tag_QMARK_);
} else
{return and__3531__auto____$1;
}
} else
{return and__3531__auto__;
}
})()))
{var value_42645 = clojure.string.replace(html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__42641_42646 = cljs.core.seq(domina.nodes(content));var chunk__42642_42647 = null;var count__42643_42648 = (0);var i__42644_42649 = (0);while(true){
if((i__42644_42649 < count__42643_42648))
{var node_42650 = chunk__42642_42647.cljs$core$IIndexed$_nth$arity$2(null,i__42644_42649);node_42650.innerHTML = value_42645;
{
var G__42651 = seq__42641_42646;
var G__42652 = chunk__42642_42647;
var G__42653 = count__42643_42648;
var G__42654 = (i__42644_42649 + (1));
seq__42641_42646 = G__42651;
chunk__42642_42647 = G__42652;
count__42643_42648 = G__42653;
i__42644_42649 = G__42654;
continue;
}
} else
{var temp__4126__auto___42655 = cljs.core.seq(seq__42641_42646);if(temp__4126__auto___42655)
{var seq__42641_42656__$1 = temp__4126__auto___42655;if(cljs.core.chunked_seq_QMARK_(seq__42641_42656__$1))
{var c__4299__auto___42657 = cljs.core.chunk_first(seq__42641_42656__$1);{
var G__42658 = cljs.core.chunk_rest(seq__42641_42656__$1);
var G__42659 = c__4299__auto___42657;
var G__42660 = cljs.core.count(c__4299__auto___42657);
var G__42661 = (0);
seq__42641_42646 = G__42658;
chunk__42642_42647 = G__42659;
count__42643_42648 = G__42660;
i__42644_42649 = G__42661;
continue;
}
} else
{var node_42662 = cljs.core.first(seq__42641_42656__$1);node_42662.innerHTML = value_42645;
{
var G__42663 = cljs.core.next(seq__42641_42656__$1);
var G__42664 = null;
var G__42665 = (0);
var G__42666 = (0);
seq__42641_42646 = G__42663;
chunk__42642_42647 = G__42664;
count__42643_42648 = G__42665;
i__42644_42649 = G__42666;
continue;
}
}
} else
{}
}
break;
}
}catch (e42640){if((e42640 instanceof Error))
{var e_42667 = e42640;domina.replace_children_BANG_(content,value_42645);
} else
{if(cljs.core.constant$keyword$756)
{throw e42640;
} else
{}
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
var get_data__3 = (function (node,key,bubble){var m = domina.single_node(node).__domina_data;var value = (cljs.core.truth_(m)?cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,key):null);if(cljs.core.truth_((function (){var and__3531__auto__ = bubble;if(cljs.core.truth_(and__3531__auto__))
{return (value == null);
} else
{return and__3531__auto__;
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
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){var m = (function (){var or__3543__auto__ = domina.single_node(node).__domina_data;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes(parent_content);var children = domina.nodes(child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__42674_42678 = cljs.core.seq(children);var chunk__42675_42679 = null;var count__42676_42680 = (0);var i__42677_42681 = (0);while(true){
if((i__42677_42681 < count__42676_42680))
{var child_42682 = chunk__42675_42679.cljs$core$IIndexed$_nth$arity$2(null,i__42677_42681);frag.appendChild(child_42682);
{
var G__42683 = seq__42674_42678;
var G__42684 = chunk__42675_42679;
var G__42685 = count__42676_42680;
var G__42686 = (i__42677_42681 + (1));
seq__42674_42678 = G__42683;
chunk__42675_42679 = G__42684;
count__42676_42680 = G__42685;
i__42677_42681 = G__42686;
continue;
}
} else
{var temp__4126__auto___42687 = cljs.core.seq(seq__42674_42678);if(temp__4126__auto___42687)
{var seq__42674_42688__$1 = temp__4126__auto___42687;if(cljs.core.chunked_seq_QMARK_(seq__42674_42688__$1))
{var c__4299__auto___42689 = cljs.core.chunk_first(seq__42674_42688__$1);{
var G__42690 = cljs.core.chunk_rest(seq__42674_42688__$1);
var G__42691 = c__4299__auto___42689;
var G__42692 = cljs.core.count(c__4299__auto___42689);
var G__42693 = (0);
seq__42674_42678 = G__42690;
chunk__42675_42679 = G__42691;
count__42676_42680 = G__42692;
i__42677_42681 = G__42693;
continue;
}
} else
{var child_42694 = cljs.core.first(seq__42674_42688__$1);frag.appendChild(child_42694);
{
var G__42695 = cljs.core.next(seq__42674_42688__$1);
var G__42696 = null;
var G__42697 = (0);
var G__42698 = (0);
seq__42674_42678 = G__42695;
chunk__42675_42679 = G__42696;
count__42676_42680 = G__42697;
i__42677_42681 = G__42698;
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
return (function (p1__42668_SHARP_,p2__42669_SHARP_){return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(p1__42668_SHARP_,p2__42669_SHARP_) : f.call(null,p1__42668_SHARP_,p2__42669_SHARP_));
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
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){var and__3531__auto__ = obj;if(cljs.core.truth_(and__3531__auto__))
{var and__3531__auto____$1 = cljs.core.not(obj.nodeName);if(and__3531__auto____$1)
{return obj.length;
} else
{return and__3531__auto____$1;
}
} else
{return and__3531__auto__;
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
{if((function (){var G__42700 = list_thing;if(G__42700)
{var bit__4193__auto__ = (G__42700.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4193__auto__) || (G__42700.cljs$core$ISeqable$))
{return true;
} else
{if((!G__42700.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__42700);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__42700);
}
})())
{return cljs.core.seq(list_thing);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(list_thing)))
{return domina.lazy_nodelist(list_thing);
} else
{if(cljs.core.constant$keyword$757)
{return cljs.core.seq(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [list_thing], null));
} else
{return null;
}
}
}
}
});
(domina.DomContent["_"] = true);
(domina.nodes["_"] = (function (content){if((content == null))
{return cljs.core.List.EMPTY;
} else
{if((function (){var G__42701 = content;if(G__42701)
{var bit__4193__auto__ = (G__42701.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4193__auto__) || (G__42701.cljs$core$ISeqable$))
{return true;
} else
{if((!G__42701.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__42701);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__42701);
}
})())
{return cljs.core.seq(content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(content)))
{return domina.lazy_nodelist(content);
} else
{if(cljs.core.constant$keyword$757)
{return cljs.core.seq(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content], null));
} else
{return null;
}
}
}
}
}));
(domina.single_node["_"] = (function (content){if((content == null))
{return null;
} else
{if((function (){var G__42702 = content;if(G__42702)
{var bit__4193__auto__ = (G__42702.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4193__auto__) || (G__42702.cljs$core$ISeqable$))
{return true;
} else
{if((!G__42702.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__42702);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__42702);
}
})())
{return cljs.core.first(content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(content)))
{return content.item((0));
} else
{if(cljs.core.constant$keyword$757)
{return content;
} else
{return null;
}
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
