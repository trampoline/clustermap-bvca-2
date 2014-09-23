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
var opt_wrapper_19358 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_19359 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);var cell_wrapper_19360 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",-1987822328),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_19360,opt_wrapper_19358,table_section_wrapper_19359,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_19358,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_19359,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_19359,cell_wrapper_19360,table_section_wrapper_19359,table_section_wrapper_19359]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3546__auto__ = div.firstChild;if(cljs.core.truth_(and__3546__auto__))
{return div.firstChild.childNodes;
} else
{return and__3546__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?div.childNodes:cljs.core.PersistentVector.EMPTY));var seq__19365 = cljs.core.seq.call(null,tbody);var chunk__19366 = null;var count__19367 = (0);var i__19368 = (0);while(true){
if((i__19368 < count__19367))
{var child = cljs.core._nth.call(null,chunk__19366,i__19368);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__19369 = seq__19365;
var G__19370 = chunk__19366;
var G__19371 = count__19367;
var G__19372 = (i__19368 + (1));
seq__19365 = G__19369;
chunk__19366 = G__19370;
count__19367 = G__19371;
i__19368 = G__19372;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__19365);if(temp__4126__auto__)
{var seq__19365__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19365__$1))
{var c__4314__auto__ = cljs.core.chunk_first.call(null,seq__19365__$1);{
var G__19373 = cljs.core.chunk_rest.call(null,seq__19365__$1);
var G__19374 = c__4314__auto__;
var G__19375 = cljs.core.count.call(null,c__4314__auto__);
var G__19376 = (0);
seq__19365 = G__19373;
chunk__19366 = G__19374;
count__19367 = G__19375;
i__19368 = G__19376;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__19365__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__19377 = cljs.core.next.call(null,seq__19365__$1);
var G__19378 = null;
var G__19379 = (0);
var G__19380 = (0);
seq__19365 = G__19377;
chunk__19366 = G__19378;
count__19367 = G__19379;
i__19368 = G__19380;
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
domina.restore_leading_whitespace_BANG_ = (function restore_leading_whitespace_BANG_(div,html){return div.insertBefore(document.createTextNode(cljs.core.first.call(null,cljs.core.re_find.call(null,domina.re_leading_whitespace,html))),div.firstChild);
});
/**
* takes an string of html and returns a NodeList of dom fragments
*/
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))).toLowerCase();var vec__19382 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__19382,(0),null);var start_wrap = cljs.core.nth.call(null,vec__19382,(1),null);var end_wrap = cljs.core.nth.call(null,vec__19382,(2),null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(start_wrap)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(html__$1)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(end_wrap));
return div;
})();var level = depth;while(true){
if((level > (0)))
{{
var G__19383 = wrapper.lastChild;
var G__19384 = (level - (1));
wrapper = G__19383;
level = G__19384;
continue;
}
} else
{return wrapper;
}
break;
}
})();if(cljs.core.truth_(domina.support.extraneous_tbody_QMARK_))
{domina.remove_extraneous_tbody_BANG_.call(null,div,html__$1,tag_name,start_wrap);
} else
{}
if(cljs.core.truth_((function (){var and__3546__auto__ = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);if(and__3546__auto__)
{return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__$1);
} else
{return and__3546__auto__;
}
})()))
{domina.restore_leading_whitespace_BANG_.call(null,div,html__$1);
} else
{}
return div.childNodes;
});
domina.string_to_dom = (function string_to_dom(s){if(cljs.core.truth_(cljs.core.re_find.call(null,domina.re_html,s)))
{return domina.html_to_dom.call(null,s);
} else
{return document.createTextNode(s);
}
});
domina.DomContent = (function (){var obj19386 = {};return obj19386;
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
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
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
{throw cljs.core.missing_protocol.call(null,"DomContent.single-node",nodeseq);
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
{return !(cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3546__auto__;
}
})()))
{return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else
{return null;
}
};
var log_debug = function (var_args){
var mesg = null;if (arguments.length > 0) {
  mesg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return log_debug__delegate.call(this,mesg);};
log_debug.cljs$lang$maxFixedArity = 0;
log_debug.cljs$lang$applyTo = (function (arglist__19387){
var mesg = cljs.core.seq(arglist__19387);
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
{return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else
{return null;
}
};
var log = function (var_args){
var mesg = null;if (arguments.length > 0) {
  mesg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return log__delegate.call(this,mesg);};
log.cljs$lang$maxFixedArity = 0;
log.cljs$lang$applyTo = (function (arglist__19388){
var mesg = cljs.core.seq(arglist__19388);
return log__delegate(mesg);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
/**
* Returns content containing a single node by looking up the given ID
*/
domina.by_id = (function by_id(id){return goog.dom.getElement(cljs.core.name.call(null,id));
});
/**
* Returns content containing nodes which have the specified CSS class.
*/
domina.by_class = (function by_class(class_name){return domina.normalize_seq.call(null,goog.dom.getElementsByClass(cljs.core.name.call(null,class_name)));
});
/**
* Gets all the child nodes of the elements in a content. Same as (xpath content '*') but more efficient.
*/
domina.children = (function children(content){return cljs.core.doall.call(null,cljs.core.mapcat.call(null,goog.dom.getChildren,domina.nodes.call(null,content)));
});
/**
* Returns the deepest common ancestor of the argument contents (which are presumed to be single nodes), or nil if they are from different documents.
* @param {...*} var_args
*/
domina.common_ancestor = (function() { 
var common_ancestor__delegate = function (contents){return cljs.core.apply.call(null,goog.dom.findCommonAncestor,cljs.core.map.call(null,domina.single_node,contents));
};
var common_ancestor = function (var_args){
var contents = null;if (arguments.length > 0) {
  contents = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return common_ancestor__delegate.call(this,contents);};
common_ancestor.cljs$lang$maxFixedArity = 0;
common_ancestor.cljs$lang$applyTo = (function (arglist__19389){
var contents = cljs.core.seq(arglist__19389);
return common_ancestor__delegate(contents);
});
common_ancestor.cljs$core$IFn$_invoke$arity$variadic = common_ancestor__delegate;
return common_ancestor;
})()
;
/**
* Returns true if the first argument is an ancestor of the second argument. Presumes both arguments are single-node contents.
*/
domina.ancestor_QMARK_ = (function ancestor_QMARK_(ancestor_content,descendant_content){return cljs.core._EQ_.call(null,domina.common_ancestor.call(null,ancestor_content,descendant_content),domina.single_node.call(null,ancestor_content));
});
/**
* Returns a deep clone of content.
*/
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__19390_SHARP_){return p1__19390_SHARP_.cloneNode(true);
}),domina.nodes.call(null,content));
});
/**
* Given a parent and child contents, appends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.append_BANG_ = (function append_BANG_(parent_content,child_content){domina.apply_with_cloning.call(null,goog.dom.appendChild,parent_content,child_content);
return parent_content;
});
/**
* Given a parent and child contents, appends each of the children to all of the parents at the specified index. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__19391_SHARP_,p2__19392_SHARP_){return goog.dom.insertChildAt(p1__19391_SHARP_,p2__19392_SHARP_,idx);
}),parent_content,child_content);
return parent_content;
});
/**
* Given a parent and child contents, prepends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.prepend_BANG_ = (function prepend_BANG_(parent_content,child_content){domina.insert_BANG_.call(null,parent_content,child_content,(0));
return parent_content;
});
/**
* Given a content and some new content, inserts the new content immediately before the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__19394_SHARP_,p2__19393_SHARP_){return goog.dom.insertSiblingBefore(p2__19393_SHARP_,p1__19394_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__19396_SHARP_,p2__19395_SHARP_){return goog.dom.insertSiblingAfter(p2__19395_SHARP_,p1__19396_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__19398_SHARP_,p2__19397_SHARP_){return goog.dom.replaceNode(p2__19397_SHARP_,p1__19398_SHARP_);
}),old_content,new_content);
return old_content;
});
/**
* Removes all the nodes in a content from the DOM and returns them.
*/
domina.detach_BANG_ = (function detach_BANG_(content){return cljs.core.doall.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.nodes.call(null,content)));
});
/**
* Removes all the nodes in a content from the DOM. Returns nil.
*/
domina.destroy_BANG_ = (function destroy_BANG_(content){return cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.nodes.call(null,content)));
});
/**
* Removes all the child nodes in a content from the DOM. Returns the original content.
*/
domina.destroy_children_BANG_ = (function destroy_children_BANG_(content){cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeChildren,domina.nodes.call(null,content)));
return content;
});
/**
* Gets the value of a CSS property. Assumes content will be a single node. Name may be a string or keyword. Returns nil if there is no value set for the style.
*/
domina.style = (function style(content,name){var s = goog.style.getStyle(domina.single_node.call(null,content),cljs.core.name.call(null,name));if(cljs.core.truth_(clojure.string.blank_QMARK_.call(null,s)))
{return null;
} else
{return s;
}
});
/**
* Gets the value of an HTML attribute. Assumes content will be a single node. Name may be a stirng or keyword. Returns nil if there is no value set for the style.
*/
domina.attr = (function attr(content,name){return domina.single_node.call(null,content).getAttribute(cljs.core.name.call(null,name));
});
/**
* Sets the value of a CSS property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
* @param {...*} var_args
*/
domina.set_style_BANG_ = (function() { 
var set_style_BANG___delegate = function (content,name,value){var seq__19403_19407 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__19404_19408 = null;var count__19405_19409 = (0);var i__19406_19410 = (0);while(true){
if((i__19406_19410 < count__19405_19409))
{var n_19411 = cljs.core._nth.call(null,chunk__19404_19408,i__19406_19410);goog.style.setStyle(n_19411,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__19412 = seq__19403_19407;
var G__19413 = chunk__19404_19408;
var G__19414 = count__19405_19409;
var G__19415 = (i__19406_19410 + (1));
seq__19403_19407 = G__19412;
chunk__19404_19408 = G__19413;
count__19405_19409 = G__19414;
i__19406_19410 = G__19415;
continue;
}
} else
{var temp__4126__auto___19416 = cljs.core.seq.call(null,seq__19403_19407);if(temp__4126__auto___19416)
{var seq__19403_19417__$1 = temp__4126__auto___19416;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19403_19417__$1))
{var c__4314__auto___19418 = cljs.core.chunk_first.call(null,seq__19403_19417__$1);{
var G__19419 = cljs.core.chunk_rest.call(null,seq__19403_19417__$1);
var G__19420 = c__4314__auto___19418;
var G__19421 = cljs.core.count.call(null,c__4314__auto___19418);
var G__19422 = (0);
seq__19403_19407 = G__19419;
chunk__19404_19408 = G__19420;
count__19405_19409 = G__19421;
i__19406_19410 = G__19422;
continue;
}
} else
{var n_19423 = cljs.core.first.call(null,seq__19403_19417__$1);goog.style.setStyle(n_19423,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__19424 = cljs.core.next.call(null,seq__19403_19417__$1);
var G__19425 = null;
var G__19426 = (0);
var G__19427 = (0);
seq__19403_19407 = G__19424;
chunk__19404_19408 = G__19425;
count__19405_19409 = G__19426;
i__19406_19410 = G__19427;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__19428){
var content = cljs.core.first(arglist__19428);
arglist__19428 = cljs.core.next(arglist__19428);
var name = cljs.core.first(arglist__19428);
var value = cljs.core.rest(arglist__19428);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__19433_19437 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__19434_19438 = null;var count__19435_19439 = (0);var i__19436_19440 = (0);while(true){
if((i__19436_19440 < count__19435_19439))
{var n_19441 = cljs.core._nth.call(null,chunk__19434_19438,i__19436_19440);n_19441.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__19442 = seq__19433_19437;
var G__19443 = chunk__19434_19438;
var G__19444 = count__19435_19439;
var G__19445 = (i__19436_19440 + (1));
seq__19433_19437 = G__19442;
chunk__19434_19438 = G__19443;
count__19435_19439 = G__19444;
i__19436_19440 = G__19445;
continue;
}
} else
{var temp__4126__auto___19446 = cljs.core.seq.call(null,seq__19433_19437);if(temp__4126__auto___19446)
{var seq__19433_19447__$1 = temp__4126__auto___19446;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19433_19447__$1))
{var c__4314__auto___19448 = cljs.core.chunk_first.call(null,seq__19433_19447__$1);{
var G__19449 = cljs.core.chunk_rest.call(null,seq__19433_19447__$1);
var G__19450 = c__4314__auto___19448;
var G__19451 = cljs.core.count.call(null,c__4314__auto___19448);
var G__19452 = (0);
seq__19433_19437 = G__19449;
chunk__19434_19438 = G__19450;
count__19435_19439 = G__19451;
i__19436_19440 = G__19452;
continue;
}
} else
{var n_19453 = cljs.core.first.call(null,seq__19433_19447__$1);n_19453.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__19454 = cljs.core.next.call(null,seq__19433_19447__$1);
var G__19455 = null;
var G__19456 = (0);
var G__19457 = (0);
seq__19433_19437 = G__19454;
chunk__19434_19438 = G__19455;
count__19435_19439 = G__19456;
i__19436_19440 = G__19457;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__19458){
var content = cljs.core.first(arglist__19458);
arglist__19458 = cljs.core.next(arglist__19458);
var name = cljs.core.first(arglist__19458);
var value = cljs.core.rest(arglist__19458);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__19463_19467 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__19464_19468 = null;var count__19465_19469 = (0);var i__19466_19470 = (0);while(true){
if((i__19466_19470 < count__19465_19469))
{var n_19471 = cljs.core._nth.call(null,chunk__19464_19468,i__19466_19470);n_19471.removeAttribute(cljs.core.name.call(null,name));
{
var G__19472 = seq__19463_19467;
var G__19473 = chunk__19464_19468;
var G__19474 = count__19465_19469;
var G__19475 = (i__19466_19470 + (1));
seq__19463_19467 = G__19472;
chunk__19464_19468 = G__19473;
count__19465_19469 = G__19474;
i__19466_19470 = G__19475;
continue;
}
} else
{var temp__4126__auto___19476 = cljs.core.seq.call(null,seq__19463_19467);if(temp__4126__auto___19476)
{var seq__19463_19477__$1 = temp__4126__auto___19476;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19463_19477__$1))
{var c__4314__auto___19478 = cljs.core.chunk_first.call(null,seq__19463_19477__$1);{
var G__19479 = cljs.core.chunk_rest.call(null,seq__19463_19477__$1);
var G__19480 = c__4314__auto___19478;
var G__19481 = cljs.core.count.call(null,c__4314__auto___19478);
var G__19482 = (0);
seq__19463_19467 = G__19479;
chunk__19464_19468 = G__19480;
count__19465_19469 = G__19481;
i__19466_19470 = G__19482;
continue;
}
} else
{var n_19483 = cljs.core.first.call(null,seq__19463_19477__$1);n_19483.removeAttribute(cljs.core.name.call(null,name));
{
var G__19484 = cljs.core.next.call(null,seq__19463_19477__$1);
var G__19485 = null;
var G__19486 = (0);
var G__19487 = (0);
seq__19463_19467 = G__19484;
chunk__19464_19468 = G__19485;
count__19465_19469 = G__19486;
i__19466_19470 = G__19487;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__19489 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__19489,(0),null);var v = cljs.core.nth.call(null,vec__19489,(1),null);if(cljs.core.truth_((function (){var and__3546__auto__ = k;if(cljs.core.truth_(and__3546__auto__))
{return v;
} else
{return and__3546__auto__;
}
})()))
{return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k.toLowerCase()),v);
} else
{return acc;
}
}),cljs.core.PersistentArrayMap.EMPTY,style.split(/\s*;\s*/));
});
/**
* Returns a map of the CSS styles/values. Assumes content will be a single node. Style names are returned as keywords.
*/
domina.styles = (function styles(content){var style = domina.attr.call(null,content,"style");if(typeof style === 'string')
{return domina.parse_style_attributes.call(null,style);
} else
{if((style == null))
{return cljs.core.PersistentArrayMap.EMPTY;
} else
{if(cljs.core.truth_(style.cssText))
{return domina.parse_style_attributes.call(null,style.cssText);
} else
{return cljs.core.PersistentArrayMap.EMPTY;

}
}
}
});
/**
* Returns a map of the HTML attributes/values. Assumes content will be a single node. Attribute names are returned as keywords.
*/
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,((function (node,attrs__$1){
return (function (p1__19490_SHARP_){var attr = attrs__$1.item(p1__19490_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
});})(node,attrs__$1))
,cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__19497_19503 = cljs.core.seq.call(null,styles);var chunk__19498_19504 = null;var count__19499_19505 = (0);var i__19500_19506 = (0);while(true){
if((i__19500_19506 < count__19499_19505))
{var vec__19501_19507 = cljs.core._nth.call(null,chunk__19498_19504,i__19500_19506);var name_19508 = cljs.core.nth.call(null,vec__19501_19507,(0),null);var value_19509 = cljs.core.nth.call(null,vec__19501_19507,(1),null);domina.set_style_BANG_.call(null,content,name_19508,value_19509);
{
var G__19510 = seq__19497_19503;
var G__19511 = chunk__19498_19504;
var G__19512 = count__19499_19505;
var G__19513 = (i__19500_19506 + (1));
seq__19497_19503 = G__19510;
chunk__19498_19504 = G__19511;
count__19499_19505 = G__19512;
i__19500_19506 = G__19513;
continue;
}
} else
{var temp__4126__auto___19514 = cljs.core.seq.call(null,seq__19497_19503);if(temp__4126__auto___19514)
{var seq__19497_19515__$1 = temp__4126__auto___19514;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19497_19515__$1))
{var c__4314__auto___19516 = cljs.core.chunk_first.call(null,seq__19497_19515__$1);{
var G__19517 = cljs.core.chunk_rest.call(null,seq__19497_19515__$1);
var G__19518 = c__4314__auto___19516;
var G__19519 = cljs.core.count.call(null,c__4314__auto___19516);
var G__19520 = (0);
seq__19497_19503 = G__19517;
chunk__19498_19504 = G__19518;
count__19499_19505 = G__19519;
i__19500_19506 = G__19520;
continue;
}
} else
{var vec__19502_19521 = cljs.core.first.call(null,seq__19497_19515__$1);var name_19522 = cljs.core.nth.call(null,vec__19502_19521,(0),null);var value_19523 = cljs.core.nth.call(null,vec__19502_19521,(1),null);domina.set_style_BANG_.call(null,content,name_19522,value_19523);
{
var G__19524 = cljs.core.next.call(null,seq__19497_19515__$1);
var G__19525 = null;
var G__19526 = (0);
var G__19527 = (0);
seq__19497_19503 = G__19524;
chunk__19498_19504 = G__19525;
count__19499_19505 = G__19526;
i__19500_19506 = G__19527;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__19534_19540 = cljs.core.seq.call(null,attrs);var chunk__19535_19541 = null;var count__19536_19542 = (0);var i__19537_19543 = (0);while(true){
if((i__19537_19543 < count__19536_19542))
{var vec__19538_19544 = cljs.core._nth.call(null,chunk__19535_19541,i__19537_19543);var name_19545 = cljs.core.nth.call(null,vec__19538_19544,(0),null);var value_19546 = cljs.core.nth.call(null,vec__19538_19544,(1),null);domina.set_attr_BANG_.call(null,content,name_19545,value_19546);
{
var G__19547 = seq__19534_19540;
var G__19548 = chunk__19535_19541;
var G__19549 = count__19536_19542;
var G__19550 = (i__19537_19543 + (1));
seq__19534_19540 = G__19547;
chunk__19535_19541 = G__19548;
count__19536_19542 = G__19549;
i__19537_19543 = G__19550;
continue;
}
} else
{var temp__4126__auto___19551 = cljs.core.seq.call(null,seq__19534_19540);if(temp__4126__auto___19551)
{var seq__19534_19552__$1 = temp__4126__auto___19551;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19534_19552__$1))
{var c__4314__auto___19553 = cljs.core.chunk_first.call(null,seq__19534_19552__$1);{
var G__19554 = cljs.core.chunk_rest.call(null,seq__19534_19552__$1);
var G__19555 = c__4314__auto___19553;
var G__19556 = cljs.core.count.call(null,c__4314__auto___19553);
var G__19557 = (0);
seq__19534_19540 = G__19554;
chunk__19535_19541 = G__19555;
count__19536_19542 = G__19556;
i__19537_19543 = G__19557;
continue;
}
} else
{var vec__19539_19558 = cljs.core.first.call(null,seq__19534_19552__$1);var name_19559 = cljs.core.nth.call(null,vec__19539_19558,(0),null);var value_19560 = cljs.core.nth.call(null,vec__19539_19558,(1),null);domina.set_attr_BANG_.call(null,content,name_19559,value_19560);
{
var G__19561 = cljs.core.next.call(null,seq__19534_19552__$1);
var G__19562 = null;
var G__19563 = (0);
var G__19564 = (0);
seq__19534_19540 = G__19561;
chunk__19535_19541 = G__19562;
count__19536_19542 = G__19563;
i__19537_19543 = G__19564;
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
domina.has_class_QMARK_ = (function has_class_QMARK_(content,class$){return goog.dom.classes.has(domina.single_node.call(null,content),class$);
});
/**
* Adds the specified CSS class to each node in the content.
*/
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__19569_19573 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__19570_19574 = null;var count__19571_19575 = (0);var i__19572_19576 = (0);while(true){
if((i__19572_19576 < count__19571_19575))
{var node_19577 = cljs.core._nth.call(null,chunk__19570_19574,i__19572_19576);goog.dom.classes.add(node_19577,class$);
{
var G__19578 = seq__19569_19573;
var G__19579 = chunk__19570_19574;
var G__19580 = count__19571_19575;
var G__19581 = (i__19572_19576 + (1));
seq__19569_19573 = G__19578;
chunk__19570_19574 = G__19579;
count__19571_19575 = G__19580;
i__19572_19576 = G__19581;
continue;
}
} else
{var temp__4126__auto___19582 = cljs.core.seq.call(null,seq__19569_19573);if(temp__4126__auto___19582)
{var seq__19569_19583__$1 = temp__4126__auto___19582;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19569_19583__$1))
{var c__4314__auto___19584 = cljs.core.chunk_first.call(null,seq__19569_19583__$1);{
var G__19585 = cljs.core.chunk_rest.call(null,seq__19569_19583__$1);
var G__19586 = c__4314__auto___19584;
var G__19587 = cljs.core.count.call(null,c__4314__auto___19584);
var G__19588 = (0);
seq__19569_19573 = G__19585;
chunk__19570_19574 = G__19586;
count__19571_19575 = G__19587;
i__19572_19576 = G__19588;
continue;
}
} else
{var node_19589 = cljs.core.first.call(null,seq__19569_19583__$1);goog.dom.classes.add(node_19589,class$);
{
var G__19590 = cljs.core.next.call(null,seq__19569_19583__$1);
var G__19591 = null;
var G__19592 = (0);
var G__19593 = (0);
seq__19569_19573 = G__19590;
chunk__19570_19574 = G__19591;
count__19571_19575 = G__19592;
i__19572_19576 = G__19593;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__19598_19602 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__19599_19603 = null;var count__19600_19604 = (0);var i__19601_19605 = (0);while(true){
if((i__19601_19605 < count__19600_19604))
{var node_19606 = cljs.core._nth.call(null,chunk__19599_19603,i__19601_19605);goog.dom.classes.remove(node_19606,class$);
{
var G__19607 = seq__19598_19602;
var G__19608 = chunk__19599_19603;
var G__19609 = count__19600_19604;
var G__19610 = (i__19601_19605 + (1));
seq__19598_19602 = G__19607;
chunk__19599_19603 = G__19608;
count__19600_19604 = G__19609;
i__19601_19605 = G__19610;
continue;
}
} else
{var temp__4126__auto___19611 = cljs.core.seq.call(null,seq__19598_19602);if(temp__4126__auto___19611)
{var seq__19598_19612__$1 = temp__4126__auto___19611;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19598_19612__$1))
{var c__4314__auto___19613 = cljs.core.chunk_first.call(null,seq__19598_19612__$1);{
var G__19614 = cljs.core.chunk_rest.call(null,seq__19598_19612__$1);
var G__19615 = c__4314__auto___19613;
var G__19616 = cljs.core.count.call(null,c__4314__auto___19613);
var G__19617 = (0);
seq__19598_19602 = G__19614;
chunk__19599_19603 = G__19615;
count__19600_19604 = G__19616;
i__19601_19605 = G__19617;
continue;
}
} else
{var node_19618 = cljs.core.first.call(null,seq__19598_19612__$1);goog.dom.classes.remove(node_19618,class$);
{
var G__19619 = cljs.core.next.call(null,seq__19598_19612__$1);
var G__19620 = null;
var G__19621 = (0);
var G__19622 = (0);
seq__19598_19602 = G__19619;
chunk__19599_19603 = G__19620;
count__19600_19604 = G__19621;
i__19601_19605 = G__19622;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__19627_19631 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__19628_19632 = null;var count__19629_19633 = (0);var i__19630_19634 = (0);while(true){
if((i__19630_19634 < count__19629_19633))
{var node_19635 = cljs.core._nth.call(null,chunk__19628_19632,i__19630_19634);goog.dom.classes.toggle(node_19635,class$);
{
var G__19636 = seq__19627_19631;
var G__19637 = chunk__19628_19632;
var G__19638 = count__19629_19633;
var G__19639 = (i__19630_19634 + (1));
seq__19627_19631 = G__19636;
chunk__19628_19632 = G__19637;
count__19629_19633 = G__19638;
i__19630_19634 = G__19639;
continue;
}
} else
{var temp__4126__auto___19640 = cljs.core.seq.call(null,seq__19627_19631);if(temp__4126__auto___19640)
{var seq__19627_19641__$1 = temp__4126__auto___19640;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19627_19641__$1))
{var c__4314__auto___19642 = cljs.core.chunk_first.call(null,seq__19627_19641__$1);{
var G__19643 = cljs.core.chunk_rest.call(null,seq__19627_19641__$1);
var G__19644 = c__4314__auto___19642;
var G__19645 = cljs.core.count.call(null,c__4314__auto___19642);
var G__19646 = (0);
seq__19627_19631 = G__19643;
chunk__19628_19632 = G__19644;
count__19629_19633 = G__19645;
i__19630_19634 = G__19646;
continue;
}
} else
{var node_19647 = cljs.core.first.call(null,seq__19627_19641__$1);goog.dom.classes.toggle(node_19647,class$);
{
var G__19648 = cljs.core.next.call(null,seq__19627_19641__$1);
var G__19649 = null;
var G__19650 = (0);
var G__19651 = (0);
seq__19627_19631 = G__19648;
chunk__19628_19632 = G__19649;
count__19629_19633 = G__19650;
i__19630_19634 = G__19651;
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
domina.classes = (function classes(content){return cljs.core.seq.call(null,goog.dom.classes.get(domina.single_node.call(null,content)));
});
/**
* Sets the class attribute of the content nodes to classes, which can
* be either a class attribute string or a seq of classname strings.
*/
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_19660__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__19656_19661 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__19657_19662 = null;var count__19658_19663 = (0);var i__19659_19664 = (0);while(true){
if((i__19659_19664 < count__19658_19663))
{var node_19665 = cljs.core._nth.call(null,chunk__19657_19662,i__19659_19664);goog.dom.classes.set(node_19665,classes_19660__$1);
{
var G__19666 = seq__19656_19661;
var G__19667 = chunk__19657_19662;
var G__19668 = count__19658_19663;
var G__19669 = (i__19659_19664 + (1));
seq__19656_19661 = G__19666;
chunk__19657_19662 = G__19667;
count__19658_19663 = G__19668;
i__19659_19664 = G__19669;
continue;
}
} else
{var temp__4126__auto___19670 = cljs.core.seq.call(null,seq__19656_19661);if(temp__4126__auto___19670)
{var seq__19656_19671__$1 = temp__4126__auto___19670;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19656_19671__$1))
{var c__4314__auto___19672 = cljs.core.chunk_first.call(null,seq__19656_19671__$1);{
var G__19673 = cljs.core.chunk_rest.call(null,seq__19656_19671__$1);
var G__19674 = c__4314__auto___19672;
var G__19675 = cljs.core.count.call(null,c__4314__auto___19672);
var G__19676 = (0);
seq__19656_19661 = G__19673;
chunk__19657_19662 = G__19674;
count__19658_19663 = G__19675;
i__19659_19664 = G__19676;
continue;
}
} else
{var node_19677 = cljs.core.first.call(null,seq__19656_19671__$1);goog.dom.classes.set(node_19677,classes_19660__$1);
{
var G__19678 = cljs.core.next.call(null,seq__19656_19671__$1);
var G__19679 = null;
var G__19680 = (0);
var G__19681 = (0);
seq__19656_19661 = G__19678;
chunk__19657_19662 = G__19679;
count__19658_19663 = G__19680;
i__19659_19664 = G__19681;
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
domina.text = (function text(content){return goog.string.trim(goog.dom.getTextContent(domina.single_node.call(null,content)));
});
/**
* Sets the text value of all the nodes in the given content.
*/
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__19686_19690 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__19687_19691 = null;var count__19688_19692 = (0);var i__19689_19693 = (0);while(true){
if((i__19689_19693 < count__19688_19692))
{var node_19694 = cljs.core._nth.call(null,chunk__19687_19691,i__19689_19693);goog.dom.setTextContent(node_19694,value);
{
var G__19695 = seq__19686_19690;
var G__19696 = chunk__19687_19691;
var G__19697 = count__19688_19692;
var G__19698 = (i__19689_19693 + (1));
seq__19686_19690 = G__19695;
chunk__19687_19691 = G__19696;
count__19688_19692 = G__19697;
i__19689_19693 = G__19698;
continue;
}
} else
{var temp__4126__auto___19699 = cljs.core.seq.call(null,seq__19686_19690);if(temp__4126__auto___19699)
{var seq__19686_19700__$1 = temp__4126__auto___19699;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19686_19700__$1))
{var c__4314__auto___19701 = cljs.core.chunk_first.call(null,seq__19686_19700__$1);{
var G__19702 = cljs.core.chunk_rest.call(null,seq__19686_19700__$1);
var G__19703 = c__4314__auto___19701;
var G__19704 = cljs.core.count.call(null,c__4314__auto___19701);
var G__19705 = (0);
seq__19686_19690 = G__19702;
chunk__19687_19691 = G__19703;
count__19688_19692 = G__19704;
i__19689_19693 = G__19705;
continue;
}
} else
{var node_19706 = cljs.core.first.call(null,seq__19686_19700__$1);goog.dom.setTextContent(node_19706,value);
{
var G__19707 = cljs.core.next.call(null,seq__19686_19700__$1);
var G__19708 = null;
var G__19709 = (0);
var G__19710 = (0);
seq__19686_19690 = G__19707;
chunk__19687_19691 = G__19708;
count__19688_19692 = G__19709;
i__19689_19693 = G__19710;
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
domina.value = (function value(content){return goog.dom.forms.getValue(domina.single_node.call(null,content));
});
/**
* Sets the value of all the nodes (presumably form fields) in the given content.
*/
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__19715_19719 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__19716_19720 = null;var count__19717_19721 = (0);var i__19718_19722 = (0);while(true){
if((i__19718_19722 < count__19717_19721))
{var node_19723 = cljs.core._nth.call(null,chunk__19716_19720,i__19718_19722);goog.dom.forms.setValue(node_19723,value);
{
var G__19724 = seq__19715_19719;
var G__19725 = chunk__19716_19720;
var G__19726 = count__19717_19721;
var G__19727 = (i__19718_19722 + (1));
seq__19715_19719 = G__19724;
chunk__19716_19720 = G__19725;
count__19717_19721 = G__19726;
i__19718_19722 = G__19727;
continue;
}
} else
{var temp__4126__auto___19728 = cljs.core.seq.call(null,seq__19715_19719);if(temp__4126__auto___19728)
{var seq__19715_19729__$1 = temp__4126__auto___19728;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19715_19729__$1))
{var c__4314__auto___19730 = cljs.core.chunk_first.call(null,seq__19715_19729__$1);{
var G__19731 = cljs.core.chunk_rest.call(null,seq__19715_19729__$1);
var G__19732 = c__4314__auto___19730;
var G__19733 = cljs.core.count.call(null,c__4314__auto___19730);
var G__19734 = (0);
seq__19715_19719 = G__19731;
chunk__19716_19720 = G__19732;
count__19717_19721 = G__19733;
i__19718_19722 = G__19734;
continue;
}
} else
{var node_19735 = cljs.core.first.call(null,seq__19715_19729__$1);goog.dom.forms.setValue(node_19735,value);
{
var G__19736 = cljs.core.next.call(null,seq__19715_19729__$1);
var G__19737 = null;
var G__19738 = (0);
var G__19739 = (0);
seq__19715_19719 = G__19736;
chunk__19716_19720 = G__19737;
count__19717_19721 = G__19738;
i__19718_19722 = G__19739;
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
domina.html = (function html(content){return domina.single_node.call(null,content).innerHTML;
});
domina.replace_children_BANG_ = (function replace_children_BANG_(content,inner_content){return domina.append_BANG_.call(null,domina.destroy_children_BANG_.call(null,content),inner_content);
});
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){var allows_inner_html_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));var leading_whitespace_QMARK_ = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string)))).toLowerCase();var special_tag_QMARK_ = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name);if(cljs.core.truth_((function (){var and__3546__auto__ = allows_inner_html_QMARK_;if(and__3546__auto__)
{var and__3546__auto____$1 = (function (){var or__3558__auto__ = domina.support.leading_whitespace_QMARK_;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return cljs.core.not.call(null,leading_whitespace_QMARK_);
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
{var value_19750 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__19746_19751 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__19747_19752 = null;var count__19748_19753 = (0);var i__19749_19754 = (0);while(true){
if((i__19749_19754 < count__19748_19753))
{var node_19755 = cljs.core._nth.call(null,chunk__19747_19752,i__19749_19754);node_19755.innerHTML = value_19750;
{
var G__19756 = seq__19746_19751;
var G__19757 = chunk__19747_19752;
var G__19758 = count__19748_19753;
var G__19759 = (i__19749_19754 + (1));
seq__19746_19751 = G__19756;
chunk__19747_19752 = G__19757;
count__19748_19753 = G__19758;
i__19749_19754 = G__19759;
continue;
}
} else
{var temp__4126__auto___19760 = cljs.core.seq.call(null,seq__19746_19751);if(temp__4126__auto___19760)
{var seq__19746_19761__$1 = temp__4126__auto___19760;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19746_19761__$1))
{var c__4314__auto___19762 = cljs.core.chunk_first.call(null,seq__19746_19761__$1);{
var G__19763 = cljs.core.chunk_rest.call(null,seq__19746_19761__$1);
var G__19764 = c__4314__auto___19762;
var G__19765 = cljs.core.count.call(null,c__4314__auto___19762);
var G__19766 = (0);
seq__19746_19751 = G__19763;
chunk__19747_19752 = G__19764;
count__19748_19753 = G__19765;
i__19749_19754 = G__19766;
continue;
}
} else
{var node_19767 = cljs.core.first.call(null,seq__19746_19761__$1);node_19767.innerHTML = value_19750;
{
var G__19768 = cljs.core.next.call(null,seq__19746_19761__$1);
var G__19769 = null;
var G__19770 = (0);
var G__19771 = (0);
seq__19746_19751 = G__19768;
chunk__19747_19752 = G__19769;
count__19748_19753 = G__19770;
i__19749_19754 = G__19771;
continue;
}
}
} else
{}
}
break;
}
}catch (e19745){if((e19745 instanceof Error))
{var e_19772 = e19745;domina.replace_children_BANG_.call(null,content,value_19750);
} else
{throw e19745;

}
}} else
{domina.replace_children_BANG_.call(null,content,html_string);
}
return content;
});
/**
* Sets the innerHTML value for all the nodes in the given content.
*/
domina.set_html_BANG_ = (function set_html_BANG_(content,inner_content){if(typeof inner_content === 'string')
{return domina.set_inner_html_BANG_.call(null,content,inner_content);
} else
{return domina.replace_children_BANG_.call(null,content,inner_content);
}
});
/**
* Returns data associated with a node for a given key. Assumes
* content is a single node. If the bubble parameter is set to true,
* will search parent nodes if the key is not found.
*/
domina.get_data = (function() {
var get_data = null;
var get_data__2 = (function (node,key){return get_data.call(null,node,key,false);
});
var get_data__3 = (function (node,key,bubble){var m = domina.single_node.call(null,node).__domina_data;var value = (cljs.core.truth_(m)?cljs.core.get.call(null,m,key):null);if(cljs.core.truth_((function (){var and__3546__auto__ = bubble;if(cljs.core.truth_(and__3546__auto__))
{return (value == null);
} else
{return and__3546__auto__;
}
})()))
{var temp__4126__auto__ = domina.single_node.call(null,node).parentNode;if(cljs.core.truth_(temp__4126__auto__))
{var parent = temp__4126__auto__;return get_data.call(null,parent,key,true);
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
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){var m = (function (){var or__3558__auto__ = domina.single_node.call(null,node).__domina_data;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})();return domina.single_node.call(null,node).__domina_data = cljs.core.assoc.call(null,m,key,value);
});
/**
* Takes a two-arg function, a reference DomContent and new
* DomContent. Applies the function for each reference / content
* combination. Uses clones of the new content for each additional
* parent after the first.
*/
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__19779_19783 = cljs.core.seq.call(null,children);var chunk__19780_19784 = null;var count__19781_19785 = (0);var i__19782_19786 = (0);while(true){
if((i__19782_19786 < count__19781_19785))
{var child_19787 = cljs.core._nth.call(null,chunk__19780_19784,i__19782_19786);frag.appendChild(child_19787);
{
var G__19788 = seq__19779_19783;
var G__19789 = chunk__19780_19784;
var G__19790 = count__19781_19785;
var G__19791 = (i__19782_19786 + (1));
seq__19779_19783 = G__19788;
chunk__19780_19784 = G__19789;
count__19781_19785 = G__19790;
i__19782_19786 = G__19791;
continue;
}
} else
{var temp__4126__auto___19792 = cljs.core.seq.call(null,seq__19779_19783);if(temp__4126__auto___19792)
{var seq__19779_19793__$1 = temp__4126__auto___19792;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19779_19793__$1))
{var c__4314__auto___19794 = cljs.core.chunk_first.call(null,seq__19779_19793__$1);{
var G__19795 = cljs.core.chunk_rest.call(null,seq__19779_19793__$1);
var G__19796 = c__4314__auto___19794;
var G__19797 = cljs.core.count.call(null,c__4314__auto___19794);
var G__19798 = (0);
seq__19779_19783 = G__19795;
chunk__19780_19784 = G__19796;
count__19781_19785 = G__19797;
i__19782_19786 = G__19798;
continue;
}
} else
{var child_19799 = cljs.core.first.call(null,seq__19779_19793__$1);frag.appendChild(child_19799);
{
var G__19800 = cljs.core.next.call(null,seq__19779_19793__$1);
var G__19801 = null;
var G__19802 = (0);
var G__19803 = (0);
seq__19779_19783 = G__19800;
chunk__19780_19784 = G__19801;
count__19781_19785 = G__19802;
i__19782_19786 = G__19803;
continue;
}
}
} else
{}
}
break;
}
return frag;
})();var other_children = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents) - (1)),((function (parents,children,first_child){
return (function (){return first_child.cloneNode(true);
});})(parents,children,first_child))
));if(cljs.core.seq.call(null,parents))
{f.call(null,cljs.core.first.call(null,parents),first_child);
return cljs.core.doall.call(null,cljs.core.map.call(null,((function (parents,children,first_child,other_children){
return (function (p1__19773_SHARP_,p2__19774_SHARP_){return f.call(null,p1__19773_SHARP_,p2__19774_SHARP_);
});})(parents,children,first_child,other_children))
,cljs.core.rest.call(null,parents),other_children));
} else
{return null;
}
});
domina.lazy_nl_via_item = (function() {
var lazy_nl_via_item = null;
var lazy_nl_via_item__1 = (function (nl){return lazy_nl_via_item.call(null,nl,(0));
});
var lazy_nl_via_item__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons.call(null,nl.item(n),lazy_nl_via_item.call(null,nl,(n + (1))));
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
var lazy_nl_via_array_ref__1 = (function (nl){return lazy_nl_via_array_ref.call(null,nl,(0));
});
var lazy_nl_via_array_ref__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons.call(null,(nl[n]),lazy_nl_via_array_ref.call(null,nl,(n + (1))));
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
{return domina.lazy_nl_via_item.call(null,nl);
} else
{return domina.lazy_nl_via_array_ref.call(null,nl);
}
});
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){var and__3546__auto__ = obj;if(cljs.core.truth_(and__3546__auto__))
{var and__3546__auto____$1 = cljs.core.not.call(null,obj.nodeName);if(and__3546__auto____$1)
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
{if((function (){var G__19805 = list_thing;if(G__19805)
{var bit__4208__auto__ = (G__19805.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4208__auto__) || (G__19805.cljs$core$ISeqable$))
{return true;
} else
{if((!G__19805.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__19805);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__19805);
}
})())
{return cljs.core.seq.call(null,list_thing);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,list_thing)))
{return domina.lazy_nodelist.call(null,list_thing);
} else
{return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [list_thing], null));

}
}
}
});
(domina.DomContent["_"] = true);
(domina.nodes["_"] = (function (content){if((content == null))
{return cljs.core.List.EMPTY;
} else
{if((function (){var G__19806 = content;if(G__19806)
{var bit__4208__auto__ = (G__19806.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4208__auto__) || (G__19806.cljs$core$ISeqable$))
{return true;
} else
{if((!G__19806.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__19806);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__19806);
}
})())
{return cljs.core.seq.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return domina.lazy_nodelist.call(null,content);
} else
{return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content], null));

}
}
}
}));
(domina.single_node["_"] = (function (content){if((content == null))
{return null;
} else
{if((function (){var G__19807 = content;if(G__19807)
{var bit__4208__auto__ = (G__19807.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4208__auto__) || (G__19807.cljs$core$ISeqable$))
{return true;
} else
{if((!G__19807.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__19807);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__19807);
}
})())
{return cljs.core.first.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return content.item((0));
} else
{return content;

}
}
}
}));
(domina.DomContent["string"] = true);
(domina.nodes["string"] = (function (s){return cljs.core.doall.call(null,domina.nodes.call(null,domina.string_to_dom.call(null,s)));
}));
(domina.single_node["string"] = (function (s){return domina.single_node.call(null,domina.string_to_dom.call(null,s));
}));
if(cljs.core.truth_((typeof NodeList != 'undefined')))
{NodeList.prototype.cljs$core$ISeqable$ = true;
NodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){var nodelist__$1 = this;return domina.lazy_nodelist.call(null,nodelist__$1);
});
NodeList.prototype.cljs$core$IIndexed$ = true;
NodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){var nodelist__$1 = this;return nodelist__$1.item(n);
});
NodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){var nodelist__$1 = this;if((nodelist__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist__$1,n);
}
});
NodeList.prototype.cljs$core$ICounted$ = true;
NodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){var nodelist__$1 = this;return nodelist__$1.length;
});
} else
{}
if(cljs.core.truth_((typeof StaticNodeList != 'undefined')))
{StaticNodeList.prototype.cljs$core$ISeqable$ = true;
StaticNodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){var nodelist__$1 = this;return domina.lazy_nodelist.call(null,nodelist__$1);
});
StaticNodeList.prototype.cljs$core$IIndexed$ = true;
StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){var nodelist__$1 = this;return nodelist__$1.item(n);
});
StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){var nodelist__$1 = this;if((nodelist__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist__$1,n);
}
});
StaticNodeList.prototype.cljs$core$ICounted$ = true;
StaticNodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){var nodelist__$1 = this;return nodelist__$1.length;
});
} else
{}
if(cljs.core.truth_((typeof HTMLCollection != 'undefined')))
{HTMLCollection.prototype.cljs$core$ISeqable$ = true;
HTMLCollection.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var coll__$1 = this;return domina.lazy_nodelist.call(null,coll__$1);
});
HTMLCollection.prototype.cljs$core$IIndexed$ = true;
HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){var coll__$1 = this;return coll__$1.item(n);
});
HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){var coll__$1 = this;if((coll__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,coll__$1,n);
}
});
HTMLCollection.prototype.cljs$core$ICounted$ = true;
HTMLCollection.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var coll__$1 = this;return coll__$1.length;
});
} else
{}
