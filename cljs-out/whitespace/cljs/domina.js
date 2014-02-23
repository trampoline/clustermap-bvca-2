// Compiled by ClojureScript 0.0-2138
goog.provide('domina');
goog.require('cljs.core');
goog.require('goog.dom.classes');
goog.require('domina.support');
goog.require('goog.dom.classes');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.string');
goog.require('goog.dom.xml');
goog.require('goog.dom');
goog.require('goog.dom.forms');
goog.require('goog.dom');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('goog.style');
goog.require('clojure.string');
goog.require('goog.dom.xml');
goog.require('goog.style');
goog.require('goog.dom.forms');
goog.require('domina.support');
goog.require('goog.events');
goog.require('cljs.core');
domina.re_html = /<|&#?\w+;/;
domina.re_leading_whitespace = /^\s+/;
domina.re_xhtml_tag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/i;
domina.re_tag_name = /<([\w:]+)/;
domina.re_no_inner_html = /<(?:script|style)/i;
domina.re_tbody = /<tbody/i;
var opt_wrapper_38338 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_38339 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_38340 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",new cljs.core.Keyword(null,"default","default",2558708147),"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_38339,table_section_wrapper_38339,opt_wrapper_38338,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_38340,table_section_wrapper_38339,cell_wrapper_38340,opt_wrapper_38338,table_section_wrapper_38339,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_38339]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3394__auto__ = div.firstChild;if(cljs.core.truth_(and__3394__auto__))
{return div.firstChild.childNodes;
} else
{return and__3394__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__38345 = cljs.core.seq.call(null,tbody);var chunk__38346 = null;var count__38347 = 0;var i__38348 = 0;while(true){
if((i__38348 < count__38347))
{var child = cljs.core._nth.call(null,chunk__38346,i__38348);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__38349 = seq__38345;
var G__38350 = chunk__38346;
var G__38351 = count__38347;
var G__38352 = (i__38348 + 1);
seq__38345 = G__38349;
chunk__38346 = G__38350;
count__38347 = G__38351;
i__38348 = G__38352;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__38345);if(temp__4092__auto__)
{var seq__38345__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38345__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__38345__$1);{
var G__38353 = cljs.core.chunk_rest.call(null,seq__38345__$1);
var G__38354 = c__4148__auto__;
var G__38355 = cljs.core.count.call(null,c__4148__auto__);
var G__38356 = 0;
seq__38345 = G__38353;
chunk__38346 = G__38354;
count__38347 = G__38355;
i__38348 = G__38356;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__38345__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__38357 = cljs.core.next.call(null,seq__38345__$1);
var G__38358 = null;
var G__38359 = 0;
var G__38360 = 0;
seq__38345 = G__38357;
chunk__38346 = G__38358;
count__38347 = G__38359;
i__38348 = G__38360;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__38362 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__38362,0,null);var start_wrap = cljs.core.nth.call(null,vec__38362,1,null);var end_wrap = cljs.core.nth.call(null,vec__38362,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__38363 = wrapper.lastChild;
var G__38364 = (level - 1);
wrapper = G__38363;
level = G__38364;
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
if(cljs.core.truth_((function (){var and__3394__auto__ = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);if(and__3394__auto__)
{return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__$1);
} else
{return and__3394__auto__;
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
domina.DomContent = (function (){var obj38366 = {};return obj38366;
})();
domina.nodes = (function nodes(content){if((function (){var and__3394__auto__ = content;if(and__3394__auto__)
{return content.domina$DomContent$nodes$arity$1;
} else
{return and__3394__auto__;
}
})())
{return content.domina$DomContent$nodes$arity$1(content);
} else
{var x__4027__auto__ = (((content == null))?null:content);return (function (){var or__3406__auto__ = (domina.nodes[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (domina.nodes["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){if((function (){var and__3394__auto__ = nodeseq;if(and__3394__auto__)
{return nodeseq.domina$DomContent$single_node$arity$1;
} else
{return and__3394__auto__;
}
})())
{return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else
{var x__4027__auto__ = (((nodeseq == null))?null:nodeseq);return (function (){var or__3406__auto__ = (domina.single_node[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (domina.single_node["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
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
var log_debug__delegate = function (mesg){if(cljs.core.truth_((function (){var and__3394__auto__ = domina._STAR_debug_STAR_;if(cljs.core.truth_(and__3394__auto__))
{return !(cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3394__auto__;
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
log_debug.cljs$lang$applyTo = (function (arglist__38367){
var mesg = cljs.core.seq(arglist__38367);
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
log.cljs$lang$applyTo = (function (arglist__38368){
var mesg = cljs.core.seq(arglist__38368);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__38369){
var contents = cljs.core.seq(arglist__38369);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__38370_SHARP_){return p1__38370_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__38371_SHARP_,p2__38372_SHARP_){return goog.dom.insertChildAt(p1__38371_SHARP_,p2__38372_SHARP_,idx);
}),parent_content,child_content);
return parent_content;
});
/**
* Given a parent and child contents, prepends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.prepend_BANG_ = (function prepend_BANG_(parent_content,child_content){domina.insert_BANG_.call(null,parent_content,child_content,0);
return parent_content;
});
/**
* Given a content and some new content, inserts the new content immediately before the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__38374_SHARP_,p2__38373_SHARP_){return goog.dom.insertSiblingBefore(p2__38373_SHARP_,p1__38374_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__38376_SHARP_,p2__38375_SHARP_){return goog.dom.insertSiblingAfter(p2__38375_SHARP_,p1__38376_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__38378_SHARP_,p2__38377_SHARP_){return goog.dom.replaceNode(p2__38377_SHARP_,p1__38378_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__38383_38387 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__38384_38388 = null;var count__38385_38389 = 0;var i__38386_38390 = 0;while(true){
if((i__38386_38390 < count__38385_38389))
{var n_38391 = cljs.core._nth.call(null,chunk__38384_38388,i__38386_38390);goog.style.setStyle(n_38391,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__38392 = seq__38383_38387;
var G__38393 = chunk__38384_38388;
var G__38394 = count__38385_38389;
var G__38395 = (i__38386_38390 + 1);
seq__38383_38387 = G__38392;
chunk__38384_38388 = G__38393;
count__38385_38389 = G__38394;
i__38386_38390 = G__38395;
continue;
}
} else
{var temp__4092__auto___38396 = cljs.core.seq.call(null,seq__38383_38387);if(temp__4092__auto___38396)
{var seq__38383_38397__$1 = temp__4092__auto___38396;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38383_38397__$1))
{var c__4148__auto___38398 = cljs.core.chunk_first.call(null,seq__38383_38397__$1);{
var G__38399 = cljs.core.chunk_rest.call(null,seq__38383_38397__$1);
var G__38400 = c__4148__auto___38398;
var G__38401 = cljs.core.count.call(null,c__4148__auto___38398);
var G__38402 = 0;
seq__38383_38387 = G__38399;
chunk__38384_38388 = G__38400;
count__38385_38389 = G__38401;
i__38386_38390 = G__38402;
continue;
}
} else
{var n_38403 = cljs.core.first.call(null,seq__38383_38397__$1);goog.style.setStyle(n_38403,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__38404 = cljs.core.next.call(null,seq__38383_38397__$1);
var G__38405 = null;
var G__38406 = 0;
var G__38407 = 0;
seq__38383_38387 = G__38404;
chunk__38384_38388 = G__38405;
count__38385_38389 = G__38406;
i__38386_38390 = G__38407;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__38408){
var content = cljs.core.first(arglist__38408);
arglist__38408 = cljs.core.next(arglist__38408);
var name = cljs.core.first(arglist__38408);
var value = cljs.core.rest(arglist__38408);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__38413_38417 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__38414_38418 = null;var count__38415_38419 = 0;var i__38416_38420 = 0;while(true){
if((i__38416_38420 < count__38415_38419))
{var n_38421 = cljs.core._nth.call(null,chunk__38414_38418,i__38416_38420);n_38421.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__38422 = seq__38413_38417;
var G__38423 = chunk__38414_38418;
var G__38424 = count__38415_38419;
var G__38425 = (i__38416_38420 + 1);
seq__38413_38417 = G__38422;
chunk__38414_38418 = G__38423;
count__38415_38419 = G__38424;
i__38416_38420 = G__38425;
continue;
}
} else
{var temp__4092__auto___38426 = cljs.core.seq.call(null,seq__38413_38417);if(temp__4092__auto___38426)
{var seq__38413_38427__$1 = temp__4092__auto___38426;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38413_38427__$1))
{var c__4148__auto___38428 = cljs.core.chunk_first.call(null,seq__38413_38427__$1);{
var G__38429 = cljs.core.chunk_rest.call(null,seq__38413_38427__$1);
var G__38430 = c__4148__auto___38428;
var G__38431 = cljs.core.count.call(null,c__4148__auto___38428);
var G__38432 = 0;
seq__38413_38417 = G__38429;
chunk__38414_38418 = G__38430;
count__38415_38419 = G__38431;
i__38416_38420 = G__38432;
continue;
}
} else
{var n_38433 = cljs.core.first.call(null,seq__38413_38427__$1);n_38433.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__38434 = cljs.core.next.call(null,seq__38413_38427__$1);
var G__38435 = null;
var G__38436 = 0;
var G__38437 = 0;
seq__38413_38417 = G__38434;
chunk__38414_38418 = G__38435;
count__38415_38419 = G__38436;
i__38416_38420 = G__38437;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__38438){
var content = cljs.core.first(arglist__38438);
arglist__38438 = cljs.core.next(arglist__38438);
var name = cljs.core.first(arglist__38438);
var value = cljs.core.rest(arglist__38438);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__38443_38447 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__38444_38448 = null;var count__38445_38449 = 0;var i__38446_38450 = 0;while(true){
if((i__38446_38450 < count__38445_38449))
{var n_38451 = cljs.core._nth.call(null,chunk__38444_38448,i__38446_38450);n_38451.removeAttribute(cljs.core.name.call(null,name));
{
var G__38452 = seq__38443_38447;
var G__38453 = chunk__38444_38448;
var G__38454 = count__38445_38449;
var G__38455 = (i__38446_38450 + 1);
seq__38443_38447 = G__38452;
chunk__38444_38448 = G__38453;
count__38445_38449 = G__38454;
i__38446_38450 = G__38455;
continue;
}
} else
{var temp__4092__auto___38456 = cljs.core.seq.call(null,seq__38443_38447);if(temp__4092__auto___38456)
{var seq__38443_38457__$1 = temp__4092__auto___38456;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38443_38457__$1))
{var c__4148__auto___38458 = cljs.core.chunk_first.call(null,seq__38443_38457__$1);{
var G__38459 = cljs.core.chunk_rest.call(null,seq__38443_38457__$1);
var G__38460 = c__4148__auto___38458;
var G__38461 = cljs.core.count.call(null,c__4148__auto___38458);
var G__38462 = 0;
seq__38443_38447 = G__38459;
chunk__38444_38448 = G__38460;
count__38445_38449 = G__38461;
i__38446_38450 = G__38462;
continue;
}
} else
{var n_38463 = cljs.core.first.call(null,seq__38443_38457__$1);n_38463.removeAttribute(cljs.core.name.call(null,name));
{
var G__38464 = cljs.core.next.call(null,seq__38443_38457__$1);
var G__38465 = null;
var G__38466 = 0;
var G__38467 = 0;
seq__38443_38447 = G__38464;
chunk__38444_38448 = G__38465;
count__38445_38449 = G__38466;
i__38446_38450 = G__38467;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__38469 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__38469,0,null);var v = cljs.core.nth.call(null,vec__38469,1,null);if(cljs.core.truth_((function (){var and__3394__auto__ = k;if(cljs.core.truth_(and__3394__auto__))
{return v;
} else
{return and__3394__auto__;
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
{if(new cljs.core.Keyword(null,"else","else",1017020587))
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
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__38470_SHARP_){var attr = attrs__$1.item(p1__38470_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__38477_38483 = cljs.core.seq.call(null,styles);var chunk__38478_38484 = null;var count__38479_38485 = 0;var i__38480_38486 = 0;while(true){
if((i__38480_38486 < count__38479_38485))
{var vec__38481_38487 = cljs.core._nth.call(null,chunk__38478_38484,i__38480_38486);var name_38488 = cljs.core.nth.call(null,vec__38481_38487,0,null);var value_38489 = cljs.core.nth.call(null,vec__38481_38487,1,null);domina.set_style_BANG_.call(null,content,name_38488,value_38489);
{
var G__38490 = seq__38477_38483;
var G__38491 = chunk__38478_38484;
var G__38492 = count__38479_38485;
var G__38493 = (i__38480_38486 + 1);
seq__38477_38483 = G__38490;
chunk__38478_38484 = G__38491;
count__38479_38485 = G__38492;
i__38480_38486 = G__38493;
continue;
}
} else
{var temp__4092__auto___38494 = cljs.core.seq.call(null,seq__38477_38483);if(temp__4092__auto___38494)
{var seq__38477_38495__$1 = temp__4092__auto___38494;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38477_38495__$1))
{var c__4148__auto___38496 = cljs.core.chunk_first.call(null,seq__38477_38495__$1);{
var G__38497 = cljs.core.chunk_rest.call(null,seq__38477_38495__$1);
var G__38498 = c__4148__auto___38496;
var G__38499 = cljs.core.count.call(null,c__4148__auto___38496);
var G__38500 = 0;
seq__38477_38483 = G__38497;
chunk__38478_38484 = G__38498;
count__38479_38485 = G__38499;
i__38480_38486 = G__38500;
continue;
}
} else
{var vec__38482_38501 = cljs.core.first.call(null,seq__38477_38495__$1);var name_38502 = cljs.core.nth.call(null,vec__38482_38501,0,null);var value_38503 = cljs.core.nth.call(null,vec__38482_38501,1,null);domina.set_style_BANG_.call(null,content,name_38502,value_38503);
{
var G__38504 = cljs.core.next.call(null,seq__38477_38495__$1);
var G__38505 = null;
var G__38506 = 0;
var G__38507 = 0;
seq__38477_38483 = G__38504;
chunk__38478_38484 = G__38505;
count__38479_38485 = G__38506;
i__38480_38486 = G__38507;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__38514_38520 = cljs.core.seq.call(null,attrs);var chunk__38515_38521 = null;var count__38516_38522 = 0;var i__38517_38523 = 0;while(true){
if((i__38517_38523 < count__38516_38522))
{var vec__38518_38524 = cljs.core._nth.call(null,chunk__38515_38521,i__38517_38523);var name_38525 = cljs.core.nth.call(null,vec__38518_38524,0,null);var value_38526 = cljs.core.nth.call(null,vec__38518_38524,1,null);domina.set_attr_BANG_.call(null,content,name_38525,value_38526);
{
var G__38527 = seq__38514_38520;
var G__38528 = chunk__38515_38521;
var G__38529 = count__38516_38522;
var G__38530 = (i__38517_38523 + 1);
seq__38514_38520 = G__38527;
chunk__38515_38521 = G__38528;
count__38516_38522 = G__38529;
i__38517_38523 = G__38530;
continue;
}
} else
{var temp__4092__auto___38531 = cljs.core.seq.call(null,seq__38514_38520);if(temp__4092__auto___38531)
{var seq__38514_38532__$1 = temp__4092__auto___38531;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38514_38532__$1))
{var c__4148__auto___38533 = cljs.core.chunk_first.call(null,seq__38514_38532__$1);{
var G__38534 = cljs.core.chunk_rest.call(null,seq__38514_38532__$1);
var G__38535 = c__4148__auto___38533;
var G__38536 = cljs.core.count.call(null,c__4148__auto___38533);
var G__38537 = 0;
seq__38514_38520 = G__38534;
chunk__38515_38521 = G__38535;
count__38516_38522 = G__38536;
i__38517_38523 = G__38537;
continue;
}
} else
{var vec__38519_38538 = cljs.core.first.call(null,seq__38514_38532__$1);var name_38539 = cljs.core.nth.call(null,vec__38519_38538,0,null);var value_38540 = cljs.core.nth.call(null,vec__38519_38538,1,null);domina.set_attr_BANG_.call(null,content,name_38539,value_38540);
{
var G__38541 = cljs.core.next.call(null,seq__38514_38532__$1);
var G__38542 = null;
var G__38543 = 0;
var G__38544 = 0;
seq__38514_38520 = G__38541;
chunk__38515_38521 = G__38542;
count__38516_38522 = G__38543;
i__38517_38523 = G__38544;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__38549_38553 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__38550_38554 = null;var count__38551_38555 = 0;var i__38552_38556 = 0;while(true){
if((i__38552_38556 < count__38551_38555))
{var node_38557 = cljs.core._nth.call(null,chunk__38550_38554,i__38552_38556);goog.dom.classes.add(node_38557,class$);
{
var G__38558 = seq__38549_38553;
var G__38559 = chunk__38550_38554;
var G__38560 = count__38551_38555;
var G__38561 = (i__38552_38556 + 1);
seq__38549_38553 = G__38558;
chunk__38550_38554 = G__38559;
count__38551_38555 = G__38560;
i__38552_38556 = G__38561;
continue;
}
} else
{var temp__4092__auto___38562 = cljs.core.seq.call(null,seq__38549_38553);if(temp__4092__auto___38562)
{var seq__38549_38563__$1 = temp__4092__auto___38562;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38549_38563__$1))
{var c__4148__auto___38564 = cljs.core.chunk_first.call(null,seq__38549_38563__$1);{
var G__38565 = cljs.core.chunk_rest.call(null,seq__38549_38563__$1);
var G__38566 = c__4148__auto___38564;
var G__38567 = cljs.core.count.call(null,c__4148__auto___38564);
var G__38568 = 0;
seq__38549_38553 = G__38565;
chunk__38550_38554 = G__38566;
count__38551_38555 = G__38567;
i__38552_38556 = G__38568;
continue;
}
} else
{var node_38569 = cljs.core.first.call(null,seq__38549_38563__$1);goog.dom.classes.add(node_38569,class$);
{
var G__38570 = cljs.core.next.call(null,seq__38549_38563__$1);
var G__38571 = null;
var G__38572 = 0;
var G__38573 = 0;
seq__38549_38553 = G__38570;
chunk__38550_38554 = G__38571;
count__38551_38555 = G__38572;
i__38552_38556 = G__38573;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__38578_38582 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__38579_38583 = null;var count__38580_38584 = 0;var i__38581_38585 = 0;while(true){
if((i__38581_38585 < count__38580_38584))
{var node_38586 = cljs.core._nth.call(null,chunk__38579_38583,i__38581_38585);goog.dom.classes.remove(node_38586,class$);
{
var G__38587 = seq__38578_38582;
var G__38588 = chunk__38579_38583;
var G__38589 = count__38580_38584;
var G__38590 = (i__38581_38585 + 1);
seq__38578_38582 = G__38587;
chunk__38579_38583 = G__38588;
count__38580_38584 = G__38589;
i__38581_38585 = G__38590;
continue;
}
} else
{var temp__4092__auto___38591 = cljs.core.seq.call(null,seq__38578_38582);if(temp__4092__auto___38591)
{var seq__38578_38592__$1 = temp__4092__auto___38591;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38578_38592__$1))
{var c__4148__auto___38593 = cljs.core.chunk_first.call(null,seq__38578_38592__$1);{
var G__38594 = cljs.core.chunk_rest.call(null,seq__38578_38592__$1);
var G__38595 = c__4148__auto___38593;
var G__38596 = cljs.core.count.call(null,c__4148__auto___38593);
var G__38597 = 0;
seq__38578_38582 = G__38594;
chunk__38579_38583 = G__38595;
count__38580_38584 = G__38596;
i__38581_38585 = G__38597;
continue;
}
} else
{var node_38598 = cljs.core.first.call(null,seq__38578_38592__$1);goog.dom.classes.remove(node_38598,class$);
{
var G__38599 = cljs.core.next.call(null,seq__38578_38592__$1);
var G__38600 = null;
var G__38601 = 0;
var G__38602 = 0;
seq__38578_38582 = G__38599;
chunk__38579_38583 = G__38600;
count__38580_38584 = G__38601;
i__38581_38585 = G__38602;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__38607_38611 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__38608_38612 = null;var count__38609_38613 = 0;var i__38610_38614 = 0;while(true){
if((i__38610_38614 < count__38609_38613))
{var node_38615 = cljs.core._nth.call(null,chunk__38608_38612,i__38610_38614);goog.dom.classes.toggle(node_38615,class$);
{
var G__38616 = seq__38607_38611;
var G__38617 = chunk__38608_38612;
var G__38618 = count__38609_38613;
var G__38619 = (i__38610_38614 + 1);
seq__38607_38611 = G__38616;
chunk__38608_38612 = G__38617;
count__38609_38613 = G__38618;
i__38610_38614 = G__38619;
continue;
}
} else
{var temp__4092__auto___38620 = cljs.core.seq.call(null,seq__38607_38611);if(temp__4092__auto___38620)
{var seq__38607_38621__$1 = temp__4092__auto___38620;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38607_38621__$1))
{var c__4148__auto___38622 = cljs.core.chunk_first.call(null,seq__38607_38621__$1);{
var G__38623 = cljs.core.chunk_rest.call(null,seq__38607_38621__$1);
var G__38624 = c__4148__auto___38622;
var G__38625 = cljs.core.count.call(null,c__4148__auto___38622);
var G__38626 = 0;
seq__38607_38611 = G__38623;
chunk__38608_38612 = G__38624;
count__38609_38613 = G__38625;
i__38610_38614 = G__38626;
continue;
}
} else
{var node_38627 = cljs.core.first.call(null,seq__38607_38621__$1);goog.dom.classes.toggle(node_38627,class$);
{
var G__38628 = cljs.core.next.call(null,seq__38607_38621__$1);
var G__38629 = null;
var G__38630 = 0;
var G__38631 = 0;
seq__38607_38611 = G__38628;
chunk__38608_38612 = G__38629;
count__38609_38613 = G__38630;
i__38610_38614 = G__38631;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_38640__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__38636_38641 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__38637_38642 = null;var count__38638_38643 = 0;var i__38639_38644 = 0;while(true){
if((i__38639_38644 < count__38638_38643))
{var node_38645 = cljs.core._nth.call(null,chunk__38637_38642,i__38639_38644);goog.dom.classes.set(node_38645,classes_38640__$1);
{
var G__38646 = seq__38636_38641;
var G__38647 = chunk__38637_38642;
var G__38648 = count__38638_38643;
var G__38649 = (i__38639_38644 + 1);
seq__38636_38641 = G__38646;
chunk__38637_38642 = G__38647;
count__38638_38643 = G__38648;
i__38639_38644 = G__38649;
continue;
}
} else
{var temp__4092__auto___38650 = cljs.core.seq.call(null,seq__38636_38641);if(temp__4092__auto___38650)
{var seq__38636_38651__$1 = temp__4092__auto___38650;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38636_38651__$1))
{var c__4148__auto___38652 = cljs.core.chunk_first.call(null,seq__38636_38651__$1);{
var G__38653 = cljs.core.chunk_rest.call(null,seq__38636_38651__$1);
var G__38654 = c__4148__auto___38652;
var G__38655 = cljs.core.count.call(null,c__4148__auto___38652);
var G__38656 = 0;
seq__38636_38641 = G__38653;
chunk__38637_38642 = G__38654;
count__38638_38643 = G__38655;
i__38639_38644 = G__38656;
continue;
}
} else
{var node_38657 = cljs.core.first.call(null,seq__38636_38651__$1);goog.dom.classes.set(node_38657,classes_38640__$1);
{
var G__38658 = cljs.core.next.call(null,seq__38636_38651__$1);
var G__38659 = null;
var G__38660 = 0;
var G__38661 = 0;
seq__38636_38641 = G__38658;
chunk__38637_38642 = G__38659;
count__38638_38643 = G__38660;
i__38639_38644 = G__38661;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__38666_38670 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__38667_38671 = null;var count__38668_38672 = 0;var i__38669_38673 = 0;while(true){
if((i__38669_38673 < count__38668_38672))
{var node_38674 = cljs.core._nth.call(null,chunk__38667_38671,i__38669_38673);goog.dom.setTextContent(node_38674,value);
{
var G__38675 = seq__38666_38670;
var G__38676 = chunk__38667_38671;
var G__38677 = count__38668_38672;
var G__38678 = (i__38669_38673 + 1);
seq__38666_38670 = G__38675;
chunk__38667_38671 = G__38676;
count__38668_38672 = G__38677;
i__38669_38673 = G__38678;
continue;
}
} else
{var temp__4092__auto___38679 = cljs.core.seq.call(null,seq__38666_38670);if(temp__4092__auto___38679)
{var seq__38666_38680__$1 = temp__4092__auto___38679;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38666_38680__$1))
{var c__4148__auto___38681 = cljs.core.chunk_first.call(null,seq__38666_38680__$1);{
var G__38682 = cljs.core.chunk_rest.call(null,seq__38666_38680__$1);
var G__38683 = c__4148__auto___38681;
var G__38684 = cljs.core.count.call(null,c__4148__auto___38681);
var G__38685 = 0;
seq__38666_38670 = G__38682;
chunk__38667_38671 = G__38683;
count__38668_38672 = G__38684;
i__38669_38673 = G__38685;
continue;
}
} else
{var node_38686 = cljs.core.first.call(null,seq__38666_38680__$1);goog.dom.setTextContent(node_38686,value);
{
var G__38687 = cljs.core.next.call(null,seq__38666_38680__$1);
var G__38688 = null;
var G__38689 = 0;
var G__38690 = 0;
seq__38666_38670 = G__38687;
chunk__38667_38671 = G__38688;
count__38668_38672 = G__38689;
i__38669_38673 = G__38690;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__38695_38699 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__38696_38700 = null;var count__38697_38701 = 0;var i__38698_38702 = 0;while(true){
if((i__38698_38702 < count__38697_38701))
{var node_38703 = cljs.core._nth.call(null,chunk__38696_38700,i__38698_38702);goog.dom.forms.setValue(node_38703,value);
{
var G__38704 = seq__38695_38699;
var G__38705 = chunk__38696_38700;
var G__38706 = count__38697_38701;
var G__38707 = (i__38698_38702 + 1);
seq__38695_38699 = G__38704;
chunk__38696_38700 = G__38705;
count__38697_38701 = G__38706;
i__38698_38702 = G__38707;
continue;
}
} else
{var temp__4092__auto___38708 = cljs.core.seq.call(null,seq__38695_38699);if(temp__4092__auto___38708)
{var seq__38695_38709__$1 = temp__4092__auto___38708;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38695_38709__$1))
{var c__4148__auto___38710 = cljs.core.chunk_first.call(null,seq__38695_38709__$1);{
var G__38711 = cljs.core.chunk_rest.call(null,seq__38695_38709__$1);
var G__38712 = c__4148__auto___38710;
var G__38713 = cljs.core.count.call(null,c__4148__auto___38710);
var G__38714 = 0;
seq__38695_38699 = G__38711;
chunk__38696_38700 = G__38712;
count__38697_38701 = G__38713;
i__38698_38702 = G__38714;
continue;
}
} else
{var node_38715 = cljs.core.first.call(null,seq__38695_38709__$1);goog.dom.forms.setValue(node_38715,value);
{
var G__38716 = cljs.core.next.call(null,seq__38695_38709__$1);
var G__38717 = null;
var G__38718 = 0;
var G__38719 = 0;
seq__38695_38699 = G__38716;
chunk__38696_38700 = G__38717;
count__38697_38701 = G__38718;
i__38698_38702 = G__38719;
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
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){var allows_inner_html_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));var leading_whitespace_QMARK_ = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string)))].join('').toLowerCase();var special_tag_QMARK_ = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name);if(cljs.core.truth_((function (){var and__3394__auto__ = allows_inner_html_QMARK_;if(and__3394__auto__)
{var and__3394__auto____$1 = (function (){var or__3406__auto__ = domina.support.leading_whitespace_QMARK_;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return cljs.core.not.call(null,leading_whitespace_QMARK_);
}
})();if(cljs.core.truth_(and__3394__auto____$1))
{return !(special_tag_QMARK_);
} else
{return and__3394__auto____$1;
}
} else
{return and__3394__auto__;
}
})()))
{var value_38730 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__38726_38731 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__38727_38732 = null;var count__38728_38733 = 0;var i__38729_38734 = 0;while(true){
if((i__38729_38734 < count__38728_38733))
{var node_38735 = cljs.core._nth.call(null,chunk__38727_38732,i__38729_38734);node_38735.innerHTML = value_38730;
{
var G__38736 = seq__38726_38731;
var G__38737 = chunk__38727_38732;
var G__38738 = count__38728_38733;
var G__38739 = (i__38729_38734 + 1);
seq__38726_38731 = G__38736;
chunk__38727_38732 = G__38737;
count__38728_38733 = G__38738;
i__38729_38734 = G__38739;
continue;
}
} else
{var temp__4092__auto___38740 = cljs.core.seq.call(null,seq__38726_38731);if(temp__4092__auto___38740)
{var seq__38726_38741__$1 = temp__4092__auto___38740;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38726_38741__$1))
{var c__4148__auto___38742 = cljs.core.chunk_first.call(null,seq__38726_38741__$1);{
var G__38743 = cljs.core.chunk_rest.call(null,seq__38726_38741__$1);
var G__38744 = c__4148__auto___38742;
var G__38745 = cljs.core.count.call(null,c__4148__auto___38742);
var G__38746 = 0;
seq__38726_38731 = G__38743;
chunk__38727_38732 = G__38744;
count__38728_38733 = G__38745;
i__38729_38734 = G__38746;
continue;
}
} else
{var node_38747 = cljs.core.first.call(null,seq__38726_38741__$1);node_38747.innerHTML = value_38730;
{
var G__38748 = cljs.core.next.call(null,seq__38726_38741__$1);
var G__38749 = null;
var G__38750 = 0;
var G__38751 = 0;
seq__38726_38731 = G__38748;
chunk__38727_38732 = G__38749;
count__38728_38733 = G__38750;
i__38729_38734 = G__38751;
continue;
}
}
} else
{}
}
break;
}
}catch (e38725){if((e38725 instanceof Error))
{var e_38752 = e38725;domina.replace_children_BANG_.call(null,content,value_38730);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e38725;
} else
{}
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
var get_data__3 = (function (node,key,bubble){var m = domina.single_node.call(null,node).__domina_data;var value = (cljs.core.truth_(m)?cljs.core.get.call(null,m,key):null);if(cljs.core.truth_((function (){var and__3394__auto__ = bubble;if(cljs.core.truth_(and__3394__auto__))
{return (value == null);
} else
{return and__3394__auto__;
}
})()))
{var temp__4092__auto__ = domina.single_node.call(null,node).parentNode;if(cljs.core.truth_(temp__4092__auto__))
{var parent = temp__4092__auto__;return get_data.call(null,parent,key,true);
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
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){var m = (function (){var or__3406__auto__ = domina.single_node.call(null,node).__domina_data;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__38759_38763 = cljs.core.seq.call(null,children);var chunk__38760_38764 = null;var count__38761_38765 = 0;var i__38762_38766 = 0;while(true){
if((i__38762_38766 < count__38761_38765))
{var child_38767 = cljs.core._nth.call(null,chunk__38760_38764,i__38762_38766);frag.appendChild(child_38767);
{
var G__38768 = seq__38759_38763;
var G__38769 = chunk__38760_38764;
var G__38770 = count__38761_38765;
var G__38771 = (i__38762_38766 + 1);
seq__38759_38763 = G__38768;
chunk__38760_38764 = G__38769;
count__38761_38765 = G__38770;
i__38762_38766 = G__38771;
continue;
}
} else
{var temp__4092__auto___38772 = cljs.core.seq.call(null,seq__38759_38763);if(temp__4092__auto___38772)
{var seq__38759_38773__$1 = temp__4092__auto___38772;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38759_38773__$1))
{var c__4148__auto___38774 = cljs.core.chunk_first.call(null,seq__38759_38773__$1);{
var G__38775 = cljs.core.chunk_rest.call(null,seq__38759_38773__$1);
var G__38776 = c__4148__auto___38774;
var G__38777 = cljs.core.count.call(null,c__4148__auto___38774);
var G__38778 = 0;
seq__38759_38763 = G__38775;
chunk__38760_38764 = G__38776;
count__38761_38765 = G__38777;
i__38762_38766 = G__38778;
continue;
}
} else
{var child_38779 = cljs.core.first.call(null,seq__38759_38773__$1);frag.appendChild(child_38779);
{
var G__38780 = cljs.core.next.call(null,seq__38759_38773__$1);
var G__38781 = null;
var G__38782 = 0;
var G__38783 = 0;
seq__38759_38763 = G__38780;
chunk__38760_38764 = G__38781;
count__38761_38765 = G__38782;
i__38762_38766 = G__38783;
continue;
}
}
} else
{}
}
break;
}
return frag;
})();var other_children = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents) - 1),((function (parents,children,first_child){
return (function (){return first_child.cloneNode(true);
});})(parents,children,first_child))
));if(cljs.core.seq.call(null,parents))
{f.call(null,cljs.core.first.call(null,parents),first_child);
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__38753_SHARP_,p2__38754_SHARP_){return f.call(null,p1__38753_SHARP_,p2__38754_SHARP_);
}),cljs.core.rest.call(null,parents),other_children));
} else
{return null;
}
});
domina.lazy_nl_via_item = (function() {
var lazy_nl_via_item = null;
var lazy_nl_via_item__1 = (function (nl){return lazy_nl_via_item.call(null,nl,0);
});
var lazy_nl_via_item__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons.call(null,nl.item(n),lazy_nl_via_item.call(null,nl,(n + 1)));
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
var lazy_nl_via_array_ref__1 = (function (nl){return lazy_nl_via_array_ref.call(null,nl,0);
});
var lazy_nl_via_array_ref__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons.call(null,(nl[n]),lazy_nl_via_array_ref.call(null,nl,(n + 1)));
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
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){var and__3394__auto__ = obj;if(cljs.core.truth_(and__3394__auto__))
{var and__3394__auto____$1 = cljs.core.not.call(null,obj.nodeName);if(and__3394__auto____$1)
{return obj.length;
} else
{return and__3394__auto____$1;
}
} else
{return and__3394__auto__;
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
{if((function (){var G__38785 = list_thing;if(G__38785)
{var bit__4050__auto__ = (G__38785.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__38785.cljs$core$ISeqable$))
{return true;
} else
{if((!G__38785.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__38785);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__38785);
}
})())
{return cljs.core.seq.call(null,list_thing);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,list_thing)))
{return domina.lazy_nodelist.call(null,list_thing);
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
{return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [list_thing], null));
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
{if((function (){var G__38786 = content;if(G__38786)
{var bit__4050__auto__ = (G__38786.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__38786.cljs$core$ISeqable$))
{return true;
} else
{if((!G__38786.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__38786);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__38786);
}
})())
{return cljs.core.seq.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return domina.lazy_nodelist.call(null,content);
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
{return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content], null));
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
{if((function (){var G__38787 = content;if(G__38787)
{var bit__4050__auto__ = (G__38787.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__38787.cljs$core$ISeqable$))
{return true;
} else
{if((!G__38787.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__38787);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__38787);
}
})())
{return cljs.core.first.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return content.item(0);
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
{return content;
} else
{return null;
}
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
