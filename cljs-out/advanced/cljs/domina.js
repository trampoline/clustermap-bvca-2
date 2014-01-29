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
var opt_wrapper_26325 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_26326 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_26327 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",cljs.core.constant$keyword$184,"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_26326,table_section_wrapper_26326,opt_wrapper_26325,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_26327,table_section_wrapper_26326,cell_wrapper_26327,opt_wrapper_26325,table_section_wrapper_26326,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_26326]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not(cljs.core.re_find(domina.re_tbody,html));var tbody = (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3394__auto__ = div.firstChild;if(cljs.core.truth_(and__3394__auto__))
{return div.firstChild.childNodes;
} else
{return and__3394__auto__;
}
})():(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__26332 = cljs.core.seq(tbody);var chunk__26333 = null;var count__26334 = 0;var i__26335 = 0;while(true){
if((i__26335 < count__26334))
{var child = chunk__26333.cljs$core$IIndexed$_nth$arity$2(null,i__26335);if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.nodeName,"tbody")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__26336 = seq__26332;
var G__26337 = chunk__26333;
var G__26338 = count__26334;
var G__26339 = (i__26335 + 1);
seq__26332 = G__26336;
chunk__26333 = G__26337;
count__26334 = G__26338;
i__26335 = G__26339;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__26332);if(temp__4092__auto__)
{var seq__26332__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__26332__$1))
{var c__4148__auto__ = cljs.core.chunk_first(seq__26332__$1);{
var G__26340 = cljs.core.chunk_rest(seq__26332__$1);
var G__26341 = c__4148__auto__;
var G__26342 = cljs.core.count(c__4148__auto__);
var G__26343 = 0;
seq__26332 = G__26340;
chunk__26333 = G__26341;
count__26334 = G__26342;
i__26335 = G__26343;
continue;
}
} else
{var child = cljs.core.first(seq__26332__$1);if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.nodeName,"tbody")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__26344 = cljs.core.next(seq__26332__$1);
var G__26345 = null;
var G__26346 = 0;
var G__26347 = 0;
seq__26332 = G__26344;
chunk__26333 = G__26345;
count__26334 = G__26346;
i__26335 = G__26347;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace(html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second(cljs.core.re_find(domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__26349 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(domina.wrap_map,tag_name,cljs.core.constant$keyword$184.cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26349,0,null);var start_wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26349,1,null);var end_wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26349,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__26350 = wrapper.lastChild;
var G__26351 = (level - 1);
wrapper = G__26350;
level = G__26351;
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
if(cljs.core.truth_((function (){var and__3394__auto__ = cljs.core.not(domina.support.leading_whitespace_QMARK_);if(and__3394__auto__)
{return cljs.core.re_find(domina.re_leading_whitespace,html__$1);
} else
{return and__3394__auto__;
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
domina.DomContent = (function (){var obj26353 = {};return obj26353;
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
{throw cljs.core.missing_protocol("DomContent.nodes",content);
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
var log_debug__delegate = function (mesg){if(cljs.core.truth_((function (){var and__3394__auto__ = domina._STAR_debug_STAR_;if(cljs.core.truth_(and__3394__auto__))
{return !(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(window.console,undefined));
} else
{return and__3394__auto__;
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
log_debug.cljs$lang$applyTo = (function (arglist__26354){
var mesg = cljs.core.seq(arglist__26354);
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
log.cljs$lang$applyTo = (function (arglist__26355){
var mesg = cljs.core.seq(arglist__26355);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__26356){
var contents = cljs.core.seq(arglist__26356);
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
domina.clone = (function clone(content){return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__26357_SHARP_){return p1__26357_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__26358_SHARP_,p2__26359_SHARP_){return goog.dom.insertChildAt(p1__26358_SHARP_,p2__26359_SHARP_,idx);
}),parent_content,child_content) : domina.apply_with_cloning.call(null,(function (p1__26358_SHARP_,p2__26359_SHARP_){return goog.dom.insertChildAt(p1__26358_SHARP_,p2__26359_SHARP_,idx);
}),parent_content,child_content));
return parent_content;
});
/**
* Given a parent and child contents, prepends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.prepend_BANG_ = (function prepend_BANG_(parent_content,child_content){domina.insert_BANG_(parent_content,child_content,0);
return parent_content;
});
/**
* Given a content and some new content, inserts the new content immediately before the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__26361_SHARP_,p2__26360_SHARP_){return goog.dom.insertSiblingBefore(p2__26360_SHARP_,p1__26361_SHARP_);
}),content,new_content) : domina.apply_with_cloning.call(null,(function (p1__26361_SHARP_,p2__26360_SHARP_){return goog.dom.insertSiblingBefore(p2__26360_SHARP_,p1__26361_SHARP_);
}),content,new_content));
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__26363_SHARP_,p2__26362_SHARP_){return goog.dom.insertSiblingAfter(p2__26362_SHARP_,p1__26363_SHARP_);
}),content,new_content) : domina.apply_with_cloning.call(null,(function (p1__26363_SHARP_,p2__26362_SHARP_){return goog.dom.insertSiblingAfter(p2__26362_SHARP_,p1__26363_SHARP_);
}),content,new_content));
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__26365_SHARP_,p2__26364_SHARP_){return goog.dom.replaceNode(p2__26364_SHARP_,p1__26365_SHARP_);
}),old_content,new_content) : domina.apply_with_cloning.call(null,(function (p1__26365_SHARP_,p2__26364_SHARP_){return goog.dom.replaceNode(p2__26364_SHARP_,p1__26365_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__26370_26374 = cljs.core.seq(domina.nodes(content));var chunk__26371_26375 = null;var count__26372_26376 = 0;var i__26373_26377 = 0;while(true){
if((i__26373_26377 < count__26372_26376))
{var n_26378 = chunk__26371_26375.cljs$core$IIndexed$_nth$arity$2(null,i__26373_26377);goog.style.setStyle(n_26378,cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__26379 = seq__26370_26374;
var G__26380 = chunk__26371_26375;
var G__26381 = count__26372_26376;
var G__26382 = (i__26373_26377 + 1);
seq__26370_26374 = G__26379;
chunk__26371_26375 = G__26380;
count__26372_26376 = G__26381;
i__26373_26377 = G__26382;
continue;
}
} else
{var temp__4092__auto___26383 = cljs.core.seq(seq__26370_26374);if(temp__4092__auto___26383)
{var seq__26370_26384__$1 = temp__4092__auto___26383;if(cljs.core.chunked_seq_QMARK_(seq__26370_26384__$1))
{var c__4148__auto___26385 = cljs.core.chunk_first(seq__26370_26384__$1);{
var G__26386 = cljs.core.chunk_rest(seq__26370_26384__$1);
var G__26387 = c__4148__auto___26385;
var G__26388 = cljs.core.count(c__4148__auto___26385);
var G__26389 = 0;
seq__26370_26374 = G__26386;
chunk__26371_26375 = G__26387;
count__26372_26376 = G__26388;
i__26373_26377 = G__26389;
continue;
}
} else
{var n_26390 = cljs.core.first(seq__26370_26384__$1);goog.style.setStyle(n_26390,cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__26391 = cljs.core.next(seq__26370_26384__$1);
var G__26392 = null;
var G__26393 = 0;
var G__26394 = 0;
seq__26370_26374 = G__26391;
chunk__26371_26375 = G__26392;
count__26372_26376 = G__26393;
i__26373_26377 = G__26394;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__26395){
var content = cljs.core.first(arglist__26395);
arglist__26395 = cljs.core.next(arglist__26395);
var name = cljs.core.first(arglist__26395);
var value = cljs.core.rest(arglist__26395);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__26400_26404 = cljs.core.seq(domina.nodes(content));var chunk__26401_26405 = null;var count__26402_26406 = 0;var i__26403_26407 = 0;while(true){
if((i__26403_26407 < count__26402_26406))
{var n_26408 = chunk__26401_26405.cljs$core$IIndexed$_nth$arity$2(null,i__26403_26407);n_26408.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__26409 = seq__26400_26404;
var G__26410 = chunk__26401_26405;
var G__26411 = count__26402_26406;
var G__26412 = (i__26403_26407 + 1);
seq__26400_26404 = G__26409;
chunk__26401_26405 = G__26410;
count__26402_26406 = G__26411;
i__26403_26407 = G__26412;
continue;
}
} else
{var temp__4092__auto___26413 = cljs.core.seq(seq__26400_26404);if(temp__4092__auto___26413)
{var seq__26400_26414__$1 = temp__4092__auto___26413;if(cljs.core.chunked_seq_QMARK_(seq__26400_26414__$1))
{var c__4148__auto___26415 = cljs.core.chunk_first(seq__26400_26414__$1);{
var G__26416 = cljs.core.chunk_rest(seq__26400_26414__$1);
var G__26417 = c__4148__auto___26415;
var G__26418 = cljs.core.count(c__4148__auto___26415);
var G__26419 = 0;
seq__26400_26404 = G__26416;
chunk__26401_26405 = G__26417;
count__26402_26406 = G__26418;
i__26403_26407 = G__26419;
continue;
}
} else
{var n_26420 = cljs.core.first(seq__26400_26414__$1);n_26420.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__26421 = cljs.core.next(seq__26400_26414__$1);
var G__26422 = null;
var G__26423 = 0;
var G__26424 = 0;
seq__26400_26404 = G__26421;
chunk__26401_26405 = G__26422;
count__26402_26406 = G__26423;
i__26403_26407 = G__26424;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__26425){
var content = cljs.core.first(arglist__26425);
arglist__26425 = cljs.core.next(arglist__26425);
var name = cljs.core.first(arglist__26425);
var value = cljs.core.rest(arglist__26425);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__26430_26434 = cljs.core.seq(domina.nodes(content));var chunk__26431_26435 = null;var count__26432_26436 = 0;var i__26433_26437 = 0;while(true){
if((i__26433_26437 < count__26432_26436))
{var n_26438 = chunk__26431_26435.cljs$core$IIndexed$_nth$arity$2(null,i__26433_26437);n_26438.removeAttribute(cljs.core.name(name));
{
var G__26439 = seq__26430_26434;
var G__26440 = chunk__26431_26435;
var G__26441 = count__26432_26436;
var G__26442 = (i__26433_26437 + 1);
seq__26430_26434 = G__26439;
chunk__26431_26435 = G__26440;
count__26432_26436 = G__26441;
i__26433_26437 = G__26442;
continue;
}
} else
{var temp__4092__auto___26443 = cljs.core.seq(seq__26430_26434);if(temp__4092__auto___26443)
{var seq__26430_26444__$1 = temp__4092__auto___26443;if(cljs.core.chunked_seq_QMARK_(seq__26430_26444__$1))
{var c__4148__auto___26445 = cljs.core.chunk_first(seq__26430_26444__$1);{
var G__26446 = cljs.core.chunk_rest(seq__26430_26444__$1);
var G__26447 = c__4148__auto___26445;
var G__26448 = cljs.core.count(c__4148__auto___26445);
var G__26449 = 0;
seq__26430_26434 = G__26446;
chunk__26431_26435 = G__26447;
count__26432_26436 = G__26448;
i__26433_26437 = G__26449;
continue;
}
} else
{var n_26450 = cljs.core.first(seq__26430_26444__$1);n_26450.removeAttribute(cljs.core.name(name));
{
var G__26451 = cljs.core.next(seq__26430_26444__$1);
var G__26452 = null;
var G__26453 = 0;
var G__26454 = 0;
seq__26430_26434 = G__26451;
chunk__26431_26435 = G__26452;
count__26432_26436 = G__26453;
i__26433_26437 = G__26454;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,pair){var vec__26456 = pair.split(/\s*:\s*/);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26456,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26456,1,null);if(cljs.core.truth_((function (){var and__3394__auto__ = k;if(cljs.core.truth_(and__3394__auto__))
{return v;
} else
{return and__3394__auto__;
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
{if(cljs.core.constant$keyword$183)
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
domina.attrs = (function attrs(content){var node = domina.single_node(content);var attrs__$1 = node.attributes;return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.filter(cljs.core.complement(cljs.core.nil_QMARK_),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__26457_SHARP_){var attr = attrs__$1.item(p1__26457_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(null,value)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__26464_26470 = cljs.core.seq(styles);var chunk__26465_26471 = null;var count__26466_26472 = 0;var i__26467_26473 = 0;while(true){
if((i__26467_26473 < count__26466_26472))
{var vec__26468_26474 = chunk__26465_26471.cljs$core$IIndexed$_nth$arity$2(null,i__26467_26473);var name_26475 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26468_26474,0,null);var value_26476 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26468_26474,1,null);domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_26475,cljs.core.array_seq([value_26476], 0));
{
var G__26477 = seq__26464_26470;
var G__26478 = chunk__26465_26471;
var G__26479 = count__26466_26472;
var G__26480 = (i__26467_26473 + 1);
seq__26464_26470 = G__26477;
chunk__26465_26471 = G__26478;
count__26466_26472 = G__26479;
i__26467_26473 = G__26480;
continue;
}
} else
{var temp__4092__auto___26481 = cljs.core.seq(seq__26464_26470);if(temp__4092__auto___26481)
{var seq__26464_26482__$1 = temp__4092__auto___26481;if(cljs.core.chunked_seq_QMARK_(seq__26464_26482__$1))
{var c__4148__auto___26483 = cljs.core.chunk_first(seq__26464_26482__$1);{
var G__26484 = cljs.core.chunk_rest(seq__26464_26482__$1);
var G__26485 = c__4148__auto___26483;
var G__26486 = cljs.core.count(c__4148__auto___26483);
var G__26487 = 0;
seq__26464_26470 = G__26484;
chunk__26465_26471 = G__26485;
count__26466_26472 = G__26486;
i__26467_26473 = G__26487;
continue;
}
} else
{var vec__26469_26488 = cljs.core.first(seq__26464_26482__$1);var name_26489 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26469_26488,0,null);var value_26490 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26469_26488,1,null);domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_26489,cljs.core.array_seq([value_26490], 0));
{
var G__26491 = cljs.core.next(seq__26464_26482__$1);
var G__26492 = null;
var G__26493 = 0;
var G__26494 = 0;
seq__26464_26470 = G__26491;
chunk__26465_26471 = G__26492;
count__26466_26472 = G__26493;
i__26467_26473 = G__26494;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__26501_26507 = cljs.core.seq(attrs);var chunk__26502_26508 = null;var count__26503_26509 = 0;var i__26504_26510 = 0;while(true){
if((i__26504_26510 < count__26503_26509))
{var vec__26505_26511 = chunk__26502_26508.cljs$core$IIndexed$_nth$arity$2(null,i__26504_26510);var name_26512 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26505_26511,0,null);var value_26513 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26505_26511,1,null);domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_26512,cljs.core.array_seq([value_26513], 0));
{
var G__26514 = seq__26501_26507;
var G__26515 = chunk__26502_26508;
var G__26516 = count__26503_26509;
var G__26517 = (i__26504_26510 + 1);
seq__26501_26507 = G__26514;
chunk__26502_26508 = G__26515;
count__26503_26509 = G__26516;
i__26504_26510 = G__26517;
continue;
}
} else
{var temp__4092__auto___26518 = cljs.core.seq(seq__26501_26507);if(temp__4092__auto___26518)
{var seq__26501_26519__$1 = temp__4092__auto___26518;if(cljs.core.chunked_seq_QMARK_(seq__26501_26519__$1))
{var c__4148__auto___26520 = cljs.core.chunk_first(seq__26501_26519__$1);{
var G__26521 = cljs.core.chunk_rest(seq__26501_26519__$1);
var G__26522 = c__4148__auto___26520;
var G__26523 = cljs.core.count(c__4148__auto___26520);
var G__26524 = 0;
seq__26501_26507 = G__26521;
chunk__26502_26508 = G__26522;
count__26503_26509 = G__26523;
i__26504_26510 = G__26524;
continue;
}
} else
{var vec__26506_26525 = cljs.core.first(seq__26501_26519__$1);var name_26526 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26506_26525,0,null);var value_26527 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26506_26525,1,null);domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_26526,cljs.core.array_seq([value_26527], 0));
{
var G__26528 = cljs.core.next(seq__26501_26519__$1);
var G__26529 = null;
var G__26530 = 0;
var G__26531 = 0;
seq__26501_26507 = G__26528;
chunk__26502_26508 = G__26529;
count__26503_26509 = G__26530;
i__26504_26510 = G__26531;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__26536_26540 = cljs.core.seq(domina.nodes(content));var chunk__26537_26541 = null;var count__26538_26542 = 0;var i__26539_26543 = 0;while(true){
if((i__26539_26543 < count__26538_26542))
{var node_26544 = chunk__26537_26541.cljs$core$IIndexed$_nth$arity$2(null,i__26539_26543);goog.dom.classes.add(node_26544,class$);
{
var G__26545 = seq__26536_26540;
var G__26546 = chunk__26537_26541;
var G__26547 = count__26538_26542;
var G__26548 = (i__26539_26543 + 1);
seq__26536_26540 = G__26545;
chunk__26537_26541 = G__26546;
count__26538_26542 = G__26547;
i__26539_26543 = G__26548;
continue;
}
} else
{var temp__4092__auto___26549 = cljs.core.seq(seq__26536_26540);if(temp__4092__auto___26549)
{var seq__26536_26550__$1 = temp__4092__auto___26549;if(cljs.core.chunked_seq_QMARK_(seq__26536_26550__$1))
{var c__4148__auto___26551 = cljs.core.chunk_first(seq__26536_26550__$1);{
var G__26552 = cljs.core.chunk_rest(seq__26536_26550__$1);
var G__26553 = c__4148__auto___26551;
var G__26554 = cljs.core.count(c__4148__auto___26551);
var G__26555 = 0;
seq__26536_26540 = G__26552;
chunk__26537_26541 = G__26553;
count__26538_26542 = G__26554;
i__26539_26543 = G__26555;
continue;
}
} else
{var node_26556 = cljs.core.first(seq__26536_26550__$1);goog.dom.classes.add(node_26556,class$);
{
var G__26557 = cljs.core.next(seq__26536_26550__$1);
var G__26558 = null;
var G__26559 = 0;
var G__26560 = 0;
seq__26536_26540 = G__26557;
chunk__26537_26541 = G__26558;
count__26538_26542 = G__26559;
i__26539_26543 = G__26560;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__26565_26569 = cljs.core.seq(domina.nodes(content));var chunk__26566_26570 = null;var count__26567_26571 = 0;var i__26568_26572 = 0;while(true){
if((i__26568_26572 < count__26567_26571))
{var node_26573 = chunk__26566_26570.cljs$core$IIndexed$_nth$arity$2(null,i__26568_26572);goog.dom.classes.remove(node_26573,class$);
{
var G__26574 = seq__26565_26569;
var G__26575 = chunk__26566_26570;
var G__26576 = count__26567_26571;
var G__26577 = (i__26568_26572 + 1);
seq__26565_26569 = G__26574;
chunk__26566_26570 = G__26575;
count__26567_26571 = G__26576;
i__26568_26572 = G__26577;
continue;
}
} else
{var temp__4092__auto___26578 = cljs.core.seq(seq__26565_26569);if(temp__4092__auto___26578)
{var seq__26565_26579__$1 = temp__4092__auto___26578;if(cljs.core.chunked_seq_QMARK_(seq__26565_26579__$1))
{var c__4148__auto___26580 = cljs.core.chunk_first(seq__26565_26579__$1);{
var G__26581 = cljs.core.chunk_rest(seq__26565_26579__$1);
var G__26582 = c__4148__auto___26580;
var G__26583 = cljs.core.count(c__4148__auto___26580);
var G__26584 = 0;
seq__26565_26569 = G__26581;
chunk__26566_26570 = G__26582;
count__26567_26571 = G__26583;
i__26568_26572 = G__26584;
continue;
}
} else
{var node_26585 = cljs.core.first(seq__26565_26579__$1);goog.dom.classes.remove(node_26585,class$);
{
var G__26586 = cljs.core.next(seq__26565_26579__$1);
var G__26587 = null;
var G__26588 = 0;
var G__26589 = 0;
seq__26565_26569 = G__26586;
chunk__26566_26570 = G__26587;
count__26567_26571 = G__26588;
i__26568_26572 = G__26589;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__26594_26598 = cljs.core.seq(domina.nodes(content));var chunk__26595_26599 = null;var count__26596_26600 = 0;var i__26597_26601 = 0;while(true){
if((i__26597_26601 < count__26596_26600))
{var node_26602 = chunk__26595_26599.cljs$core$IIndexed$_nth$arity$2(null,i__26597_26601);goog.dom.classes.toggle(node_26602,class$);
{
var G__26603 = seq__26594_26598;
var G__26604 = chunk__26595_26599;
var G__26605 = count__26596_26600;
var G__26606 = (i__26597_26601 + 1);
seq__26594_26598 = G__26603;
chunk__26595_26599 = G__26604;
count__26596_26600 = G__26605;
i__26597_26601 = G__26606;
continue;
}
} else
{var temp__4092__auto___26607 = cljs.core.seq(seq__26594_26598);if(temp__4092__auto___26607)
{var seq__26594_26608__$1 = temp__4092__auto___26607;if(cljs.core.chunked_seq_QMARK_(seq__26594_26608__$1))
{var c__4148__auto___26609 = cljs.core.chunk_first(seq__26594_26608__$1);{
var G__26610 = cljs.core.chunk_rest(seq__26594_26608__$1);
var G__26611 = c__4148__auto___26609;
var G__26612 = cljs.core.count(c__4148__auto___26609);
var G__26613 = 0;
seq__26594_26598 = G__26610;
chunk__26595_26599 = G__26611;
count__26596_26600 = G__26612;
i__26597_26601 = G__26613;
continue;
}
} else
{var node_26614 = cljs.core.first(seq__26594_26608__$1);goog.dom.classes.toggle(node_26614,class$);
{
var G__26615 = cljs.core.next(seq__26594_26608__$1);
var G__26616 = null;
var G__26617 = 0;
var G__26618 = 0;
seq__26594_26598 = G__26615;
chunk__26595_26599 = G__26616;
count__26596_26600 = G__26617;
i__26597_26601 = G__26618;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_26627__$1 = ((cljs.core.coll_QMARK_(classes))?clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",classes):classes);var seq__26623_26628 = cljs.core.seq(domina.nodes(content));var chunk__26624_26629 = null;var count__26625_26630 = 0;var i__26626_26631 = 0;while(true){
if((i__26626_26631 < count__26625_26630))
{var node_26632 = chunk__26624_26629.cljs$core$IIndexed$_nth$arity$2(null,i__26626_26631);goog.dom.classes.set(node_26632,classes_26627__$1);
{
var G__26633 = seq__26623_26628;
var G__26634 = chunk__26624_26629;
var G__26635 = count__26625_26630;
var G__26636 = (i__26626_26631 + 1);
seq__26623_26628 = G__26633;
chunk__26624_26629 = G__26634;
count__26625_26630 = G__26635;
i__26626_26631 = G__26636;
continue;
}
} else
{var temp__4092__auto___26637 = cljs.core.seq(seq__26623_26628);if(temp__4092__auto___26637)
{var seq__26623_26638__$1 = temp__4092__auto___26637;if(cljs.core.chunked_seq_QMARK_(seq__26623_26638__$1))
{var c__4148__auto___26639 = cljs.core.chunk_first(seq__26623_26638__$1);{
var G__26640 = cljs.core.chunk_rest(seq__26623_26638__$1);
var G__26641 = c__4148__auto___26639;
var G__26642 = cljs.core.count(c__4148__auto___26639);
var G__26643 = 0;
seq__26623_26628 = G__26640;
chunk__26624_26629 = G__26641;
count__26625_26630 = G__26642;
i__26626_26631 = G__26643;
continue;
}
} else
{var node_26644 = cljs.core.first(seq__26623_26638__$1);goog.dom.classes.set(node_26644,classes_26627__$1);
{
var G__26645 = cljs.core.next(seq__26623_26638__$1);
var G__26646 = null;
var G__26647 = 0;
var G__26648 = 0;
seq__26623_26628 = G__26645;
chunk__26624_26629 = G__26646;
count__26625_26630 = G__26647;
i__26626_26631 = G__26648;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__26653_26657 = cljs.core.seq(domina.nodes(content));var chunk__26654_26658 = null;var count__26655_26659 = 0;var i__26656_26660 = 0;while(true){
if((i__26656_26660 < count__26655_26659))
{var node_26661 = chunk__26654_26658.cljs$core$IIndexed$_nth$arity$2(null,i__26656_26660);goog.dom.setTextContent(node_26661,value);
{
var G__26662 = seq__26653_26657;
var G__26663 = chunk__26654_26658;
var G__26664 = count__26655_26659;
var G__26665 = (i__26656_26660 + 1);
seq__26653_26657 = G__26662;
chunk__26654_26658 = G__26663;
count__26655_26659 = G__26664;
i__26656_26660 = G__26665;
continue;
}
} else
{var temp__4092__auto___26666 = cljs.core.seq(seq__26653_26657);if(temp__4092__auto___26666)
{var seq__26653_26667__$1 = temp__4092__auto___26666;if(cljs.core.chunked_seq_QMARK_(seq__26653_26667__$1))
{var c__4148__auto___26668 = cljs.core.chunk_first(seq__26653_26667__$1);{
var G__26669 = cljs.core.chunk_rest(seq__26653_26667__$1);
var G__26670 = c__4148__auto___26668;
var G__26671 = cljs.core.count(c__4148__auto___26668);
var G__26672 = 0;
seq__26653_26657 = G__26669;
chunk__26654_26658 = G__26670;
count__26655_26659 = G__26671;
i__26656_26660 = G__26672;
continue;
}
} else
{var node_26673 = cljs.core.first(seq__26653_26667__$1);goog.dom.setTextContent(node_26673,value);
{
var G__26674 = cljs.core.next(seq__26653_26667__$1);
var G__26675 = null;
var G__26676 = 0;
var G__26677 = 0;
seq__26653_26657 = G__26674;
chunk__26654_26658 = G__26675;
count__26655_26659 = G__26676;
i__26656_26660 = G__26677;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__26682_26686 = cljs.core.seq(domina.nodes(content));var chunk__26683_26687 = null;var count__26684_26688 = 0;var i__26685_26689 = 0;while(true){
if((i__26685_26689 < count__26684_26688))
{var node_26690 = chunk__26683_26687.cljs$core$IIndexed$_nth$arity$2(null,i__26685_26689);goog.dom.forms.setValue(node_26690,value);
{
var G__26691 = seq__26682_26686;
var G__26692 = chunk__26683_26687;
var G__26693 = count__26684_26688;
var G__26694 = (i__26685_26689 + 1);
seq__26682_26686 = G__26691;
chunk__26683_26687 = G__26692;
count__26684_26688 = G__26693;
i__26685_26689 = G__26694;
continue;
}
} else
{var temp__4092__auto___26695 = cljs.core.seq(seq__26682_26686);if(temp__4092__auto___26695)
{var seq__26682_26696__$1 = temp__4092__auto___26695;if(cljs.core.chunked_seq_QMARK_(seq__26682_26696__$1))
{var c__4148__auto___26697 = cljs.core.chunk_first(seq__26682_26696__$1);{
var G__26698 = cljs.core.chunk_rest(seq__26682_26696__$1);
var G__26699 = c__4148__auto___26697;
var G__26700 = cljs.core.count(c__4148__auto___26697);
var G__26701 = 0;
seq__26682_26686 = G__26698;
chunk__26683_26687 = G__26699;
count__26684_26688 = G__26700;
i__26685_26689 = G__26701;
continue;
}
} else
{var node_26702 = cljs.core.first(seq__26682_26696__$1);goog.dom.forms.setValue(node_26702,value);
{
var G__26703 = cljs.core.next(seq__26682_26696__$1);
var G__26704 = null;
var G__26705 = 0;
var G__26706 = 0;
seq__26682_26686 = G__26703;
chunk__26683_26687 = G__26704;
count__26684_26688 = G__26705;
i__26685_26689 = G__26706;
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
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){var allows_inner_html_QMARK_ = cljs.core.not(cljs.core.re_find(domina.re_no_inner_html,html_string));var leading_whitespace_QMARK_ = cljs.core.re_find(domina.re_leading_whitespace,html_string);var tag_name = [cljs.core.str(cljs.core.second(cljs.core.re_find(domina.re_tag_name,html_string)))].join('').toLowerCase();var special_tag_QMARK_ = cljs.core.contains_QMARK_(domina.wrap_map,tag_name);if(cljs.core.truth_((function (){var and__3394__auto__ = allows_inner_html_QMARK_;if(and__3394__auto__)
{var and__3394__auto____$1 = (function (){var or__3406__auto__ = domina.support.leading_whitespace_QMARK_;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return cljs.core.not(leading_whitespace_QMARK_);
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
{var value_26717 = clojure.string.replace(html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__26713_26718 = cljs.core.seq(domina.nodes(content));var chunk__26714_26719 = null;var count__26715_26720 = 0;var i__26716_26721 = 0;while(true){
if((i__26716_26721 < count__26715_26720))
{var node_26722 = chunk__26714_26719.cljs$core$IIndexed$_nth$arity$2(null,i__26716_26721);node_26722.innerHTML = value_26717;
{
var G__26723 = seq__26713_26718;
var G__26724 = chunk__26714_26719;
var G__26725 = count__26715_26720;
var G__26726 = (i__26716_26721 + 1);
seq__26713_26718 = G__26723;
chunk__26714_26719 = G__26724;
count__26715_26720 = G__26725;
i__26716_26721 = G__26726;
continue;
}
} else
{var temp__4092__auto___26727 = cljs.core.seq(seq__26713_26718);if(temp__4092__auto___26727)
{var seq__26713_26728__$1 = temp__4092__auto___26727;if(cljs.core.chunked_seq_QMARK_(seq__26713_26728__$1))
{var c__4148__auto___26729 = cljs.core.chunk_first(seq__26713_26728__$1);{
var G__26730 = cljs.core.chunk_rest(seq__26713_26728__$1);
var G__26731 = c__4148__auto___26729;
var G__26732 = cljs.core.count(c__4148__auto___26729);
var G__26733 = 0;
seq__26713_26718 = G__26730;
chunk__26714_26719 = G__26731;
count__26715_26720 = G__26732;
i__26716_26721 = G__26733;
continue;
}
} else
{var node_26734 = cljs.core.first(seq__26713_26728__$1);node_26734.innerHTML = value_26717;
{
var G__26735 = cljs.core.next(seq__26713_26728__$1);
var G__26736 = null;
var G__26737 = 0;
var G__26738 = 0;
seq__26713_26718 = G__26735;
chunk__26714_26719 = G__26736;
count__26715_26720 = G__26737;
i__26716_26721 = G__26738;
continue;
}
}
} else
{}
}
break;
}
}catch (e26712){if((e26712 instanceof Error))
{var e_26739 = e26712;domina.replace_children_BANG_(content,value_26717);
} else
{if(cljs.core.constant$keyword$183)
{throw e26712;
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
var get_data__3 = (function (node,key,bubble){var m = domina.single_node(node).__domina_data;var value = (cljs.core.truth_(m)?cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,key):null);if(cljs.core.truth_((function (){var and__3394__auto__ = bubble;if(cljs.core.truth_(and__3394__auto__))
{return (value == null);
} else
{return and__3394__auto__;
}
})()))
{var temp__4092__auto__ = domina.single_node(node).parentNode;if(cljs.core.truth_(temp__4092__auto__))
{var parent = temp__4092__auto__;return get_data.cljs$core$IFn$_invoke$arity$3(parent,key,true);
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
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){var m = (function (){var or__3406__auto__ = domina.single_node(node).__domina_data;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes(parent_content);var children = domina.nodes(child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__26746_26750 = cljs.core.seq(children);var chunk__26747_26751 = null;var count__26748_26752 = 0;var i__26749_26753 = 0;while(true){
if((i__26749_26753 < count__26748_26752))
{var child_26754 = chunk__26747_26751.cljs$core$IIndexed$_nth$arity$2(null,i__26749_26753);frag.appendChild(child_26754);
{
var G__26755 = seq__26746_26750;
var G__26756 = chunk__26747_26751;
var G__26757 = count__26748_26752;
var G__26758 = (i__26749_26753 + 1);
seq__26746_26750 = G__26755;
chunk__26747_26751 = G__26756;
count__26748_26752 = G__26757;
i__26749_26753 = G__26758;
continue;
}
} else
{var temp__4092__auto___26759 = cljs.core.seq(seq__26746_26750);if(temp__4092__auto___26759)
{var seq__26746_26760__$1 = temp__4092__auto___26759;if(cljs.core.chunked_seq_QMARK_(seq__26746_26760__$1))
{var c__4148__auto___26761 = cljs.core.chunk_first(seq__26746_26760__$1);{
var G__26762 = cljs.core.chunk_rest(seq__26746_26760__$1);
var G__26763 = c__4148__auto___26761;
var G__26764 = cljs.core.count(c__4148__auto___26761);
var G__26765 = 0;
seq__26746_26750 = G__26762;
chunk__26747_26751 = G__26763;
count__26748_26752 = G__26764;
i__26749_26753 = G__26765;
continue;
}
} else
{var child_26766 = cljs.core.first(seq__26746_26760__$1);frag.appendChild(child_26766);
{
var G__26767 = cljs.core.next(seq__26746_26760__$1);
var G__26768 = null;
var G__26769 = 0;
var G__26770 = 0;
seq__26746_26750 = G__26767;
chunk__26747_26751 = G__26768;
count__26748_26752 = G__26769;
i__26749_26753 = G__26770;
continue;
}
}
} else
{}
}
break;
}
return frag;
})();var other_children = cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2((cljs.core.count(parents) - 1),((function (parents,children,first_child){
return (function (){return first_child.cloneNode(true);
});})(parents,children,first_child))
));if(cljs.core.seq(parents))
{(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(cljs.core.first(parents),first_child) : f.call(null,cljs.core.first(parents),first_child));
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__26740_SHARP_,p2__26741_SHARP_){return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(p1__26740_SHARP_,p2__26741_SHARP_) : f.call(null,p1__26740_SHARP_,p2__26741_SHARP_));
}),cljs.core.rest(parents),other_children));
} else
{return null;
}
});
domina.lazy_nl_via_item = (function() {
var lazy_nl_via_item = null;
var lazy_nl_via_item__1 = (function (nl){return lazy_nl_via_item.cljs$core$IFn$_invoke$arity$2(nl,0);
});
var lazy_nl_via_item__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons(nl.item(n),lazy_nl_via_item.cljs$core$IFn$_invoke$arity$2(nl,(n + 1)));
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
var lazy_nl_via_array_ref__1 = (function (nl){return lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$2(nl,0);
});
var lazy_nl_via_array_ref__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons((nl[n]),lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$2(nl,(n + 1)));
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
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){var and__3394__auto__ = obj;if(cljs.core.truth_(and__3394__auto__))
{var and__3394__auto____$1 = cljs.core.not(obj.nodeName);if(and__3394__auto____$1)
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
{if((function (){var G__26772 = list_thing;if(G__26772)
{var bit__4050__auto__ = (G__26772.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__26772.cljs$core$ISeqable$))
{return true;
} else
{if((!G__26772.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__26772);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__26772);
}
})())
{return cljs.core.seq(list_thing);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(list_thing)))
{return domina.lazy_nodelist(list_thing);
} else
{if(cljs.core.constant$keyword$184)
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
{if((function (){var G__26773 = content;if(G__26773)
{var bit__4050__auto__ = (G__26773.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__26773.cljs$core$ISeqable$))
{return true;
} else
{if((!G__26773.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__26773);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__26773);
}
})())
{return cljs.core.seq(content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(content)))
{return domina.lazy_nodelist(content);
} else
{if(cljs.core.constant$keyword$184)
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
{if((function (){var G__26774 = content;if(G__26774)
{var bit__4050__auto__ = (G__26774.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__26774.cljs$core$ISeqable$))
{return true;
} else
{if((!G__26774.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__26774);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__26774);
}
})())
{return cljs.core.first(content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(content)))
{return content.item(0);
} else
{if(cljs.core.constant$keyword$184)
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
