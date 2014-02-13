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
var opt_wrapper_36982 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_36983 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_36984 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",new cljs.core.Keyword(null,"default","default",2558708147),"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_36983,table_section_wrapper_36983,opt_wrapper_36982,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_36984,table_section_wrapper_36983,cell_wrapper_36984,opt_wrapper_36982,table_section_wrapper_36983,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_36983]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3394__auto__ = div.firstChild;if(cljs.core.truth_(and__3394__auto__))
{return div.firstChild.childNodes;
} else
{return and__3394__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__36989 = cljs.core.seq.call(null,tbody);var chunk__36990 = null;var count__36991 = 0;var i__36992 = 0;while(true){
if((i__36992 < count__36991))
{var child = cljs.core._nth.call(null,chunk__36990,i__36992);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__36993 = seq__36989;
var G__36994 = chunk__36990;
var G__36995 = count__36991;
var G__36996 = (i__36992 + 1);
seq__36989 = G__36993;
chunk__36990 = G__36994;
count__36991 = G__36995;
i__36992 = G__36996;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__36989);if(temp__4092__auto__)
{var seq__36989__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36989__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__36989__$1);{
var G__36997 = cljs.core.chunk_rest.call(null,seq__36989__$1);
var G__36998 = c__4148__auto__;
var G__36999 = cljs.core.count.call(null,c__4148__auto__);
var G__37000 = 0;
seq__36989 = G__36997;
chunk__36990 = G__36998;
count__36991 = G__36999;
i__36992 = G__37000;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__36989__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__37001 = cljs.core.next.call(null,seq__36989__$1);
var G__37002 = null;
var G__37003 = 0;
var G__37004 = 0;
seq__36989 = G__37001;
chunk__36990 = G__37002;
count__36991 = G__37003;
i__36992 = G__37004;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__37006 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__37006,0,null);var start_wrap = cljs.core.nth.call(null,vec__37006,1,null);var end_wrap = cljs.core.nth.call(null,vec__37006,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__37007 = wrapper.lastChild;
var G__37008 = (level - 1);
wrapper = G__37007;
level = G__37008;
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
domina.DomContent = (function (){var obj37010 = {};return obj37010;
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
log_debug.cljs$lang$applyTo = (function (arglist__37011){
var mesg = cljs.core.seq(arglist__37011);
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
log.cljs$lang$applyTo = (function (arglist__37012){
var mesg = cljs.core.seq(arglist__37012);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__37013){
var contents = cljs.core.seq(arglist__37013);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__37014_SHARP_){return p1__37014_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__37015_SHARP_,p2__37016_SHARP_){return goog.dom.insertChildAt(p1__37015_SHARP_,p2__37016_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__37018_SHARP_,p2__37017_SHARP_){return goog.dom.insertSiblingBefore(p2__37017_SHARP_,p1__37018_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__37020_SHARP_,p2__37019_SHARP_){return goog.dom.insertSiblingAfter(p2__37019_SHARP_,p1__37020_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__37022_SHARP_,p2__37021_SHARP_){return goog.dom.replaceNode(p2__37021_SHARP_,p1__37022_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__37027_37031 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__37028_37032 = null;var count__37029_37033 = 0;var i__37030_37034 = 0;while(true){
if((i__37030_37034 < count__37029_37033))
{var n_37035 = cljs.core._nth.call(null,chunk__37028_37032,i__37030_37034);goog.style.setStyle(n_37035,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__37036 = seq__37027_37031;
var G__37037 = chunk__37028_37032;
var G__37038 = count__37029_37033;
var G__37039 = (i__37030_37034 + 1);
seq__37027_37031 = G__37036;
chunk__37028_37032 = G__37037;
count__37029_37033 = G__37038;
i__37030_37034 = G__37039;
continue;
}
} else
{var temp__4092__auto___37040 = cljs.core.seq.call(null,seq__37027_37031);if(temp__4092__auto___37040)
{var seq__37027_37041__$1 = temp__4092__auto___37040;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37027_37041__$1))
{var c__4148__auto___37042 = cljs.core.chunk_first.call(null,seq__37027_37041__$1);{
var G__37043 = cljs.core.chunk_rest.call(null,seq__37027_37041__$1);
var G__37044 = c__4148__auto___37042;
var G__37045 = cljs.core.count.call(null,c__4148__auto___37042);
var G__37046 = 0;
seq__37027_37031 = G__37043;
chunk__37028_37032 = G__37044;
count__37029_37033 = G__37045;
i__37030_37034 = G__37046;
continue;
}
} else
{var n_37047 = cljs.core.first.call(null,seq__37027_37041__$1);goog.style.setStyle(n_37047,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__37048 = cljs.core.next.call(null,seq__37027_37041__$1);
var G__37049 = null;
var G__37050 = 0;
var G__37051 = 0;
seq__37027_37031 = G__37048;
chunk__37028_37032 = G__37049;
count__37029_37033 = G__37050;
i__37030_37034 = G__37051;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__37052){
var content = cljs.core.first(arglist__37052);
arglist__37052 = cljs.core.next(arglist__37052);
var name = cljs.core.first(arglist__37052);
var value = cljs.core.rest(arglist__37052);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__37057_37061 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__37058_37062 = null;var count__37059_37063 = 0;var i__37060_37064 = 0;while(true){
if((i__37060_37064 < count__37059_37063))
{var n_37065 = cljs.core._nth.call(null,chunk__37058_37062,i__37060_37064);n_37065.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__37066 = seq__37057_37061;
var G__37067 = chunk__37058_37062;
var G__37068 = count__37059_37063;
var G__37069 = (i__37060_37064 + 1);
seq__37057_37061 = G__37066;
chunk__37058_37062 = G__37067;
count__37059_37063 = G__37068;
i__37060_37064 = G__37069;
continue;
}
} else
{var temp__4092__auto___37070 = cljs.core.seq.call(null,seq__37057_37061);if(temp__4092__auto___37070)
{var seq__37057_37071__$1 = temp__4092__auto___37070;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37057_37071__$1))
{var c__4148__auto___37072 = cljs.core.chunk_first.call(null,seq__37057_37071__$1);{
var G__37073 = cljs.core.chunk_rest.call(null,seq__37057_37071__$1);
var G__37074 = c__4148__auto___37072;
var G__37075 = cljs.core.count.call(null,c__4148__auto___37072);
var G__37076 = 0;
seq__37057_37061 = G__37073;
chunk__37058_37062 = G__37074;
count__37059_37063 = G__37075;
i__37060_37064 = G__37076;
continue;
}
} else
{var n_37077 = cljs.core.first.call(null,seq__37057_37071__$1);n_37077.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__37078 = cljs.core.next.call(null,seq__37057_37071__$1);
var G__37079 = null;
var G__37080 = 0;
var G__37081 = 0;
seq__37057_37061 = G__37078;
chunk__37058_37062 = G__37079;
count__37059_37063 = G__37080;
i__37060_37064 = G__37081;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__37082){
var content = cljs.core.first(arglist__37082);
arglist__37082 = cljs.core.next(arglist__37082);
var name = cljs.core.first(arglist__37082);
var value = cljs.core.rest(arglist__37082);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__37087_37091 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__37088_37092 = null;var count__37089_37093 = 0;var i__37090_37094 = 0;while(true){
if((i__37090_37094 < count__37089_37093))
{var n_37095 = cljs.core._nth.call(null,chunk__37088_37092,i__37090_37094);n_37095.removeAttribute(cljs.core.name.call(null,name));
{
var G__37096 = seq__37087_37091;
var G__37097 = chunk__37088_37092;
var G__37098 = count__37089_37093;
var G__37099 = (i__37090_37094 + 1);
seq__37087_37091 = G__37096;
chunk__37088_37092 = G__37097;
count__37089_37093 = G__37098;
i__37090_37094 = G__37099;
continue;
}
} else
{var temp__4092__auto___37100 = cljs.core.seq.call(null,seq__37087_37091);if(temp__4092__auto___37100)
{var seq__37087_37101__$1 = temp__4092__auto___37100;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37087_37101__$1))
{var c__4148__auto___37102 = cljs.core.chunk_first.call(null,seq__37087_37101__$1);{
var G__37103 = cljs.core.chunk_rest.call(null,seq__37087_37101__$1);
var G__37104 = c__4148__auto___37102;
var G__37105 = cljs.core.count.call(null,c__4148__auto___37102);
var G__37106 = 0;
seq__37087_37091 = G__37103;
chunk__37088_37092 = G__37104;
count__37089_37093 = G__37105;
i__37090_37094 = G__37106;
continue;
}
} else
{var n_37107 = cljs.core.first.call(null,seq__37087_37101__$1);n_37107.removeAttribute(cljs.core.name.call(null,name));
{
var G__37108 = cljs.core.next.call(null,seq__37087_37101__$1);
var G__37109 = null;
var G__37110 = 0;
var G__37111 = 0;
seq__37087_37091 = G__37108;
chunk__37088_37092 = G__37109;
count__37089_37093 = G__37110;
i__37090_37094 = G__37111;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__37113 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__37113,0,null);var v = cljs.core.nth.call(null,vec__37113,1,null);if(cljs.core.truth_((function (){var and__3394__auto__ = k;if(cljs.core.truth_(and__3394__auto__))
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
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__37114_SHARP_){var attr = attrs__$1.item(p1__37114_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__37121_37127 = cljs.core.seq.call(null,styles);var chunk__37122_37128 = null;var count__37123_37129 = 0;var i__37124_37130 = 0;while(true){
if((i__37124_37130 < count__37123_37129))
{var vec__37125_37131 = cljs.core._nth.call(null,chunk__37122_37128,i__37124_37130);var name_37132 = cljs.core.nth.call(null,vec__37125_37131,0,null);var value_37133 = cljs.core.nth.call(null,vec__37125_37131,1,null);domina.set_style_BANG_.call(null,content,name_37132,value_37133);
{
var G__37134 = seq__37121_37127;
var G__37135 = chunk__37122_37128;
var G__37136 = count__37123_37129;
var G__37137 = (i__37124_37130 + 1);
seq__37121_37127 = G__37134;
chunk__37122_37128 = G__37135;
count__37123_37129 = G__37136;
i__37124_37130 = G__37137;
continue;
}
} else
{var temp__4092__auto___37138 = cljs.core.seq.call(null,seq__37121_37127);if(temp__4092__auto___37138)
{var seq__37121_37139__$1 = temp__4092__auto___37138;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37121_37139__$1))
{var c__4148__auto___37140 = cljs.core.chunk_first.call(null,seq__37121_37139__$1);{
var G__37141 = cljs.core.chunk_rest.call(null,seq__37121_37139__$1);
var G__37142 = c__4148__auto___37140;
var G__37143 = cljs.core.count.call(null,c__4148__auto___37140);
var G__37144 = 0;
seq__37121_37127 = G__37141;
chunk__37122_37128 = G__37142;
count__37123_37129 = G__37143;
i__37124_37130 = G__37144;
continue;
}
} else
{var vec__37126_37145 = cljs.core.first.call(null,seq__37121_37139__$1);var name_37146 = cljs.core.nth.call(null,vec__37126_37145,0,null);var value_37147 = cljs.core.nth.call(null,vec__37126_37145,1,null);domina.set_style_BANG_.call(null,content,name_37146,value_37147);
{
var G__37148 = cljs.core.next.call(null,seq__37121_37139__$1);
var G__37149 = null;
var G__37150 = 0;
var G__37151 = 0;
seq__37121_37127 = G__37148;
chunk__37122_37128 = G__37149;
count__37123_37129 = G__37150;
i__37124_37130 = G__37151;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__37158_37164 = cljs.core.seq.call(null,attrs);var chunk__37159_37165 = null;var count__37160_37166 = 0;var i__37161_37167 = 0;while(true){
if((i__37161_37167 < count__37160_37166))
{var vec__37162_37168 = cljs.core._nth.call(null,chunk__37159_37165,i__37161_37167);var name_37169 = cljs.core.nth.call(null,vec__37162_37168,0,null);var value_37170 = cljs.core.nth.call(null,vec__37162_37168,1,null);domina.set_attr_BANG_.call(null,content,name_37169,value_37170);
{
var G__37171 = seq__37158_37164;
var G__37172 = chunk__37159_37165;
var G__37173 = count__37160_37166;
var G__37174 = (i__37161_37167 + 1);
seq__37158_37164 = G__37171;
chunk__37159_37165 = G__37172;
count__37160_37166 = G__37173;
i__37161_37167 = G__37174;
continue;
}
} else
{var temp__4092__auto___37175 = cljs.core.seq.call(null,seq__37158_37164);if(temp__4092__auto___37175)
{var seq__37158_37176__$1 = temp__4092__auto___37175;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37158_37176__$1))
{var c__4148__auto___37177 = cljs.core.chunk_first.call(null,seq__37158_37176__$1);{
var G__37178 = cljs.core.chunk_rest.call(null,seq__37158_37176__$1);
var G__37179 = c__4148__auto___37177;
var G__37180 = cljs.core.count.call(null,c__4148__auto___37177);
var G__37181 = 0;
seq__37158_37164 = G__37178;
chunk__37159_37165 = G__37179;
count__37160_37166 = G__37180;
i__37161_37167 = G__37181;
continue;
}
} else
{var vec__37163_37182 = cljs.core.first.call(null,seq__37158_37176__$1);var name_37183 = cljs.core.nth.call(null,vec__37163_37182,0,null);var value_37184 = cljs.core.nth.call(null,vec__37163_37182,1,null);domina.set_attr_BANG_.call(null,content,name_37183,value_37184);
{
var G__37185 = cljs.core.next.call(null,seq__37158_37176__$1);
var G__37186 = null;
var G__37187 = 0;
var G__37188 = 0;
seq__37158_37164 = G__37185;
chunk__37159_37165 = G__37186;
count__37160_37166 = G__37187;
i__37161_37167 = G__37188;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__37193_37197 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__37194_37198 = null;var count__37195_37199 = 0;var i__37196_37200 = 0;while(true){
if((i__37196_37200 < count__37195_37199))
{var node_37201 = cljs.core._nth.call(null,chunk__37194_37198,i__37196_37200);goog.dom.classes.add(node_37201,class$);
{
var G__37202 = seq__37193_37197;
var G__37203 = chunk__37194_37198;
var G__37204 = count__37195_37199;
var G__37205 = (i__37196_37200 + 1);
seq__37193_37197 = G__37202;
chunk__37194_37198 = G__37203;
count__37195_37199 = G__37204;
i__37196_37200 = G__37205;
continue;
}
} else
{var temp__4092__auto___37206 = cljs.core.seq.call(null,seq__37193_37197);if(temp__4092__auto___37206)
{var seq__37193_37207__$1 = temp__4092__auto___37206;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37193_37207__$1))
{var c__4148__auto___37208 = cljs.core.chunk_first.call(null,seq__37193_37207__$1);{
var G__37209 = cljs.core.chunk_rest.call(null,seq__37193_37207__$1);
var G__37210 = c__4148__auto___37208;
var G__37211 = cljs.core.count.call(null,c__4148__auto___37208);
var G__37212 = 0;
seq__37193_37197 = G__37209;
chunk__37194_37198 = G__37210;
count__37195_37199 = G__37211;
i__37196_37200 = G__37212;
continue;
}
} else
{var node_37213 = cljs.core.first.call(null,seq__37193_37207__$1);goog.dom.classes.add(node_37213,class$);
{
var G__37214 = cljs.core.next.call(null,seq__37193_37207__$1);
var G__37215 = null;
var G__37216 = 0;
var G__37217 = 0;
seq__37193_37197 = G__37214;
chunk__37194_37198 = G__37215;
count__37195_37199 = G__37216;
i__37196_37200 = G__37217;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__37222_37226 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__37223_37227 = null;var count__37224_37228 = 0;var i__37225_37229 = 0;while(true){
if((i__37225_37229 < count__37224_37228))
{var node_37230 = cljs.core._nth.call(null,chunk__37223_37227,i__37225_37229);goog.dom.classes.remove(node_37230,class$);
{
var G__37231 = seq__37222_37226;
var G__37232 = chunk__37223_37227;
var G__37233 = count__37224_37228;
var G__37234 = (i__37225_37229 + 1);
seq__37222_37226 = G__37231;
chunk__37223_37227 = G__37232;
count__37224_37228 = G__37233;
i__37225_37229 = G__37234;
continue;
}
} else
{var temp__4092__auto___37235 = cljs.core.seq.call(null,seq__37222_37226);if(temp__4092__auto___37235)
{var seq__37222_37236__$1 = temp__4092__auto___37235;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37222_37236__$1))
{var c__4148__auto___37237 = cljs.core.chunk_first.call(null,seq__37222_37236__$1);{
var G__37238 = cljs.core.chunk_rest.call(null,seq__37222_37236__$1);
var G__37239 = c__4148__auto___37237;
var G__37240 = cljs.core.count.call(null,c__4148__auto___37237);
var G__37241 = 0;
seq__37222_37226 = G__37238;
chunk__37223_37227 = G__37239;
count__37224_37228 = G__37240;
i__37225_37229 = G__37241;
continue;
}
} else
{var node_37242 = cljs.core.first.call(null,seq__37222_37236__$1);goog.dom.classes.remove(node_37242,class$);
{
var G__37243 = cljs.core.next.call(null,seq__37222_37236__$1);
var G__37244 = null;
var G__37245 = 0;
var G__37246 = 0;
seq__37222_37226 = G__37243;
chunk__37223_37227 = G__37244;
count__37224_37228 = G__37245;
i__37225_37229 = G__37246;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__37251_37255 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__37252_37256 = null;var count__37253_37257 = 0;var i__37254_37258 = 0;while(true){
if((i__37254_37258 < count__37253_37257))
{var node_37259 = cljs.core._nth.call(null,chunk__37252_37256,i__37254_37258);goog.dom.classes.toggle(node_37259,class$);
{
var G__37260 = seq__37251_37255;
var G__37261 = chunk__37252_37256;
var G__37262 = count__37253_37257;
var G__37263 = (i__37254_37258 + 1);
seq__37251_37255 = G__37260;
chunk__37252_37256 = G__37261;
count__37253_37257 = G__37262;
i__37254_37258 = G__37263;
continue;
}
} else
{var temp__4092__auto___37264 = cljs.core.seq.call(null,seq__37251_37255);if(temp__4092__auto___37264)
{var seq__37251_37265__$1 = temp__4092__auto___37264;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37251_37265__$1))
{var c__4148__auto___37266 = cljs.core.chunk_first.call(null,seq__37251_37265__$1);{
var G__37267 = cljs.core.chunk_rest.call(null,seq__37251_37265__$1);
var G__37268 = c__4148__auto___37266;
var G__37269 = cljs.core.count.call(null,c__4148__auto___37266);
var G__37270 = 0;
seq__37251_37255 = G__37267;
chunk__37252_37256 = G__37268;
count__37253_37257 = G__37269;
i__37254_37258 = G__37270;
continue;
}
} else
{var node_37271 = cljs.core.first.call(null,seq__37251_37265__$1);goog.dom.classes.toggle(node_37271,class$);
{
var G__37272 = cljs.core.next.call(null,seq__37251_37265__$1);
var G__37273 = null;
var G__37274 = 0;
var G__37275 = 0;
seq__37251_37255 = G__37272;
chunk__37252_37256 = G__37273;
count__37253_37257 = G__37274;
i__37254_37258 = G__37275;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_37284__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__37280_37285 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__37281_37286 = null;var count__37282_37287 = 0;var i__37283_37288 = 0;while(true){
if((i__37283_37288 < count__37282_37287))
{var node_37289 = cljs.core._nth.call(null,chunk__37281_37286,i__37283_37288);goog.dom.classes.set(node_37289,classes_37284__$1);
{
var G__37290 = seq__37280_37285;
var G__37291 = chunk__37281_37286;
var G__37292 = count__37282_37287;
var G__37293 = (i__37283_37288 + 1);
seq__37280_37285 = G__37290;
chunk__37281_37286 = G__37291;
count__37282_37287 = G__37292;
i__37283_37288 = G__37293;
continue;
}
} else
{var temp__4092__auto___37294 = cljs.core.seq.call(null,seq__37280_37285);if(temp__4092__auto___37294)
{var seq__37280_37295__$1 = temp__4092__auto___37294;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37280_37295__$1))
{var c__4148__auto___37296 = cljs.core.chunk_first.call(null,seq__37280_37295__$1);{
var G__37297 = cljs.core.chunk_rest.call(null,seq__37280_37295__$1);
var G__37298 = c__4148__auto___37296;
var G__37299 = cljs.core.count.call(null,c__4148__auto___37296);
var G__37300 = 0;
seq__37280_37285 = G__37297;
chunk__37281_37286 = G__37298;
count__37282_37287 = G__37299;
i__37283_37288 = G__37300;
continue;
}
} else
{var node_37301 = cljs.core.first.call(null,seq__37280_37295__$1);goog.dom.classes.set(node_37301,classes_37284__$1);
{
var G__37302 = cljs.core.next.call(null,seq__37280_37295__$1);
var G__37303 = null;
var G__37304 = 0;
var G__37305 = 0;
seq__37280_37285 = G__37302;
chunk__37281_37286 = G__37303;
count__37282_37287 = G__37304;
i__37283_37288 = G__37305;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__37310_37314 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__37311_37315 = null;var count__37312_37316 = 0;var i__37313_37317 = 0;while(true){
if((i__37313_37317 < count__37312_37316))
{var node_37318 = cljs.core._nth.call(null,chunk__37311_37315,i__37313_37317);goog.dom.setTextContent(node_37318,value);
{
var G__37319 = seq__37310_37314;
var G__37320 = chunk__37311_37315;
var G__37321 = count__37312_37316;
var G__37322 = (i__37313_37317 + 1);
seq__37310_37314 = G__37319;
chunk__37311_37315 = G__37320;
count__37312_37316 = G__37321;
i__37313_37317 = G__37322;
continue;
}
} else
{var temp__4092__auto___37323 = cljs.core.seq.call(null,seq__37310_37314);if(temp__4092__auto___37323)
{var seq__37310_37324__$1 = temp__4092__auto___37323;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37310_37324__$1))
{var c__4148__auto___37325 = cljs.core.chunk_first.call(null,seq__37310_37324__$1);{
var G__37326 = cljs.core.chunk_rest.call(null,seq__37310_37324__$1);
var G__37327 = c__4148__auto___37325;
var G__37328 = cljs.core.count.call(null,c__4148__auto___37325);
var G__37329 = 0;
seq__37310_37314 = G__37326;
chunk__37311_37315 = G__37327;
count__37312_37316 = G__37328;
i__37313_37317 = G__37329;
continue;
}
} else
{var node_37330 = cljs.core.first.call(null,seq__37310_37324__$1);goog.dom.setTextContent(node_37330,value);
{
var G__37331 = cljs.core.next.call(null,seq__37310_37324__$1);
var G__37332 = null;
var G__37333 = 0;
var G__37334 = 0;
seq__37310_37314 = G__37331;
chunk__37311_37315 = G__37332;
count__37312_37316 = G__37333;
i__37313_37317 = G__37334;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__37339_37343 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__37340_37344 = null;var count__37341_37345 = 0;var i__37342_37346 = 0;while(true){
if((i__37342_37346 < count__37341_37345))
{var node_37347 = cljs.core._nth.call(null,chunk__37340_37344,i__37342_37346);goog.dom.forms.setValue(node_37347,value);
{
var G__37348 = seq__37339_37343;
var G__37349 = chunk__37340_37344;
var G__37350 = count__37341_37345;
var G__37351 = (i__37342_37346 + 1);
seq__37339_37343 = G__37348;
chunk__37340_37344 = G__37349;
count__37341_37345 = G__37350;
i__37342_37346 = G__37351;
continue;
}
} else
{var temp__4092__auto___37352 = cljs.core.seq.call(null,seq__37339_37343);if(temp__4092__auto___37352)
{var seq__37339_37353__$1 = temp__4092__auto___37352;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37339_37353__$1))
{var c__4148__auto___37354 = cljs.core.chunk_first.call(null,seq__37339_37353__$1);{
var G__37355 = cljs.core.chunk_rest.call(null,seq__37339_37353__$1);
var G__37356 = c__4148__auto___37354;
var G__37357 = cljs.core.count.call(null,c__4148__auto___37354);
var G__37358 = 0;
seq__37339_37343 = G__37355;
chunk__37340_37344 = G__37356;
count__37341_37345 = G__37357;
i__37342_37346 = G__37358;
continue;
}
} else
{var node_37359 = cljs.core.first.call(null,seq__37339_37353__$1);goog.dom.forms.setValue(node_37359,value);
{
var G__37360 = cljs.core.next.call(null,seq__37339_37353__$1);
var G__37361 = null;
var G__37362 = 0;
var G__37363 = 0;
seq__37339_37343 = G__37360;
chunk__37340_37344 = G__37361;
count__37341_37345 = G__37362;
i__37342_37346 = G__37363;
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
{var value_37374 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__37370_37375 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__37371_37376 = null;var count__37372_37377 = 0;var i__37373_37378 = 0;while(true){
if((i__37373_37378 < count__37372_37377))
{var node_37379 = cljs.core._nth.call(null,chunk__37371_37376,i__37373_37378);node_37379.innerHTML = value_37374;
{
var G__37380 = seq__37370_37375;
var G__37381 = chunk__37371_37376;
var G__37382 = count__37372_37377;
var G__37383 = (i__37373_37378 + 1);
seq__37370_37375 = G__37380;
chunk__37371_37376 = G__37381;
count__37372_37377 = G__37382;
i__37373_37378 = G__37383;
continue;
}
} else
{var temp__4092__auto___37384 = cljs.core.seq.call(null,seq__37370_37375);if(temp__4092__auto___37384)
{var seq__37370_37385__$1 = temp__4092__auto___37384;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37370_37385__$1))
{var c__4148__auto___37386 = cljs.core.chunk_first.call(null,seq__37370_37385__$1);{
var G__37387 = cljs.core.chunk_rest.call(null,seq__37370_37385__$1);
var G__37388 = c__4148__auto___37386;
var G__37389 = cljs.core.count.call(null,c__4148__auto___37386);
var G__37390 = 0;
seq__37370_37375 = G__37387;
chunk__37371_37376 = G__37388;
count__37372_37377 = G__37389;
i__37373_37378 = G__37390;
continue;
}
} else
{var node_37391 = cljs.core.first.call(null,seq__37370_37385__$1);node_37391.innerHTML = value_37374;
{
var G__37392 = cljs.core.next.call(null,seq__37370_37385__$1);
var G__37393 = null;
var G__37394 = 0;
var G__37395 = 0;
seq__37370_37375 = G__37392;
chunk__37371_37376 = G__37393;
count__37372_37377 = G__37394;
i__37373_37378 = G__37395;
continue;
}
}
} else
{}
}
break;
}
}catch (e37369){if((e37369 instanceof Error))
{var e_37396 = e37369;domina.replace_children_BANG_.call(null,content,value_37374);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e37369;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__37403_37407 = cljs.core.seq.call(null,children);var chunk__37404_37408 = null;var count__37405_37409 = 0;var i__37406_37410 = 0;while(true){
if((i__37406_37410 < count__37405_37409))
{var child_37411 = cljs.core._nth.call(null,chunk__37404_37408,i__37406_37410);frag.appendChild(child_37411);
{
var G__37412 = seq__37403_37407;
var G__37413 = chunk__37404_37408;
var G__37414 = count__37405_37409;
var G__37415 = (i__37406_37410 + 1);
seq__37403_37407 = G__37412;
chunk__37404_37408 = G__37413;
count__37405_37409 = G__37414;
i__37406_37410 = G__37415;
continue;
}
} else
{var temp__4092__auto___37416 = cljs.core.seq.call(null,seq__37403_37407);if(temp__4092__auto___37416)
{var seq__37403_37417__$1 = temp__4092__auto___37416;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37403_37417__$1))
{var c__4148__auto___37418 = cljs.core.chunk_first.call(null,seq__37403_37417__$1);{
var G__37419 = cljs.core.chunk_rest.call(null,seq__37403_37417__$1);
var G__37420 = c__4148__auto___37418;
var G__37421 = cljs.core.count.call(null,c__4148__auto___37418);
var G__37422 = 0;
seq__37403_37407 = G__37419;
chunk__37404_37408 = G__37420;
count__37405_37409 = G__37421;
i__37406_37410 = G__37422;
continue;
}
} else
{var child_37423 = cljs.core.first.call(null,seq__37403_37417__$1);frag.appendChild(child_37423);
{
var G__37424 = cljs.core.next.call(null,seq__37403_37417__$1);
var G__37425 = null;
var G__37426 = 0;
var G__37427 = 0;
seq__37403_37407 = G__37424;
chunk__37404_37408 = G__37425;
count__37405_37409 = G__37426;
i__37406_37410 = G__37427;
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
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__37397_SHARP_,p2__37398_SHARP_){return f.call(null,p1__37397_SHARP_,p2__37398_SHARP_);
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
{if((function (){var G__37429 = list_thing;if(G__37429)
{var bit__4050__auto__ = (G__37429.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__37429.cljs$core$ISeqable$))
{return true;
} else
{if((!G__37429.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__37429);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__37429);
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
{if((function (){var G__37430 = content;if(G__37430)
{var bit__4050__auto__ = (G__37430.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__37430.cljs$core$ISeqable$))
{return true;
} else
{if((!G__37430.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__37430);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__37430);
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
{if((function (){var G__37431 = content;if(G__37431)
{var bit__4050__auto__ = (G__37431.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__37431.cljs$core$ISeqable$))
{return true;
} else
{if((!G__37431.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__37431);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__37431);
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
