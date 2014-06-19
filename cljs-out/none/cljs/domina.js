// Compiled by ClojureScript 0.0-2227
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
var opt_wrapper_29024 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_29025 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_29026 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",2558708147),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_29026,opt_wrapper_29024,table_section_wrapper_29025,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),opt_wrapper_29024,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),table_section_wrapper_29025,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_29025,cell_wrapper_29026,table_section_wrapper_29025,table_section_wrapper_29025]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3527__auto__ = div.firstChild;if(cljs.core.truth_(and__3527__auto__))
{return div.firstChild.childNodes;
} else
{return and__3527__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__29031 = cljs.core.seq.call(null,tbody);var chunk__29032 = null;var count__29033 = 0;var i__29034 = 0;while(true){
if((i__29034 < count__29033))
{var child = cljs.core._nth.call(null,chunk__29032,i__29034);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__29035 = seq__29031;
var G__29036 = chunk__29032;
var G__29037 = count__29033;
var G__29038 = (i__29034 + 1);
seq__29031 = G__29035;
chunk__29032 = G__29036;
count__29033 = G__29037;
i__29034 = G__29038;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__29031);if(temp__4126__auto__)
{var seq__29031__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29031__$1))
{var c__4295__auto__ = cljs.core.chunk_first.call(null,seq__29031__$1);{
var G__29039 = cljs.core.chunk_rest.call(null,seq__29031__$1);
var G__29040 = c__4295__auto__;
var G__29041 = cljs.core.count.call(null,c__4295__auto__);
var G__29042 = 0;
seq__29031 = G__29039;
chunk__29032 = G__29040;
count__29033 = G__29041;
i__29034 = G__29042;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__29031__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__29043 = cljs.core.next.call(null,seq__29031__$1);
var G__29044 = null;
var G__29045 = 0;
var G__29046 = 0;
seq__29031 = G__29043;
chunk__29032 = G__29044;
count__29033 = G__29045;
i__29034 = G__29046;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))).toLowerCase();var vec__29048 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__29048,0,null);var start_wrap = cljs.core.nth.call(null,vec__29048,1,null);var end_wrap = cljs.core.nth.call(null,vec__29048,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(start_wrap)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(html__$1)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(end_wrap));
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__29049 = wrapper.lastChild;
var G__29050 = (level - 1);
wrapper = G__29049;
level = G__29050;
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
if(cljs.core.truth_((function (){var and__3527__auto__ = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);if(and__3527__auto__)
{return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__$1);
} else
{return and__3527__auto__;
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
domina.DomContent = (function (){var obj29052 = {};return obj29052;
})();
domina.nodes = (function nodes(content){if((function (){var and__3527__auto__ = content;if(and__3527__auto__)
{return content.domina$DomContent$nodes$arity$1;
} else
{return and__3527__auto__;
}
})())
{return content.domina$DomContent$nodes$arity$1(content);
} else
{var x__4166__auto__ = (((content == null))?null:content);return (function (){var or__3539__auto__ = (domina.nodes[goog.typeOf(x__4166__auto__)]);if(or__3539__auto__)
{return or__3539__auto__;
} else
{var or__3539__auto____$1 = (domina.nodes["_"]);if(or__3539__auto____$1)
{return or__3539__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){if((function (){var and__3527__auto__ = nodeseq;if(and__3527__auto__)
{return nodeseq.domina$DomContent$single_node$arity$1;
} else
{return and__3527__auto__;
}
})())
{return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else
{var x__4166__auto__ = (((nodeseq == null))?null:nodeseq);return (function (){var or__3539__auto__ = (domina.single_node[goog.typeOf(x__4166__auto__)]);if(or__3539__auto__)
{return or__3539__auto__;
} else
{var or__3539__auto____$1 = (domina.single_node["_"]);if(or__3539__auto____$1)
{return or__3539__auto____$1;
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
var log_debug__delegate = function (mesg){if(cljs.core.truth_((function (){var and__3527__auto__ = domina._STAR_debug_STAR_;if(cljs.core.truth_(and__3527__auto__))
{return !(cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3527__auto__;
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
log_debug.cljs$lang$applyTo = (function (arglist__29053){
var mesg = cljs.core.seq(arglist__29053);
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
log.cljs$lang$applyTo = (function (arglist__29054){
var mesg = cljs.core.seq(arglist__29054);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__29055){
var contents = cljs.core.seq(arglist__29055);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__29056_SHARP_){return p1__29056_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__29057_SHARP_,p2__29058_SHARP_){return goog.dom.insertChildAt(p1__29057_SHARP_,p2__29058_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__29060_SHARP_,p2__29059_SHARP_){return goog.dom.insertSiblingBefore(p2__29059_SHARP_,p1__29060_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__29062_SHARP_,p2__29061_SHARP_){return goog.dom.insertSiblingAfter(p2__29061_SHARP_,p1__29062_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__29064_SHARP_,p2__29063_SHARP_){return goog.dom.replaceNode(p2__29063_SHARP_,p1__29064_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__29069_29073 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__29070_29074 = null;var count__29071_29075 = 0;var i__29072_29076 = 0;while(true){
if((i__29072_29076 < count__29071_29075))
{var n_29077 = cljs.core._nth.call(null,chunk__29070_29074,i__29072_29076);goog.style.setStyle(n_29077,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__29078 = seq__29069_29073;
var G__29079 = chunk__29070_29074;
var G__29080 = count__29071_29075;
var G__29081 = (i__29072_29076 + 1);
seq__29069_29073 = G__29078;
chunk__29070_29074 = G__29079;
count__29071_29075 = G__29080;
i__29072_29076 = G__29081;
continue;
}
} else
{var temp__4126__auto___29082 = cljs.core.seq.call(null,seq__29069_29073);if(temp__4126__auto___29082)
{var seq__29069_29083__$1 = temp__4126__auto___29082;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29069_29083__$1))
{var c__4295__auto___29084 = cljs.core.chunk_first.call(null,seq__29069_29083__$1);{
var G__29085 = cljs.core.chunk_rest.call(null,seq__29069_29083__$1);
var G__29086 = c__4295__auto___29084;
var G__29087 = cljs.core.count.call(null,c__4295__auto___29084);
var G__29088 = 0;
seq__29069_29073 = G__29085;
chunk__29070_29074 = G__29086;
count__29071_29075 = G__29087;
i__29072_29076 = G__29088;
continue;
}
} else
{var n_29089 = cljs.core.first.call(null,seq__29069_29083__$1);goog.style.setStyle(n_29089,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__29090 = cljs.core.next.call(null,seq__29069_29083__$1);
var G__29091 = null;
var G__29092 = 0;
var G__29093 = 0;
seq__29069_29073 = G__29090;
chunk__29070_29074 = G__29091;
count__29071_29075 = G__29092;
i__29072_29076 = G__29093;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__29094){
var content = cljs.core.first(arglist__29094);
arglist__29094 = cljs.core.next(arglist__29094);
var name = cljs.core.first(arglist__29094);
var value = cljs.core.rest(arglist__29094);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__29099_29103 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__29100_29104 = null;var count__29101_29105 = 0;var i__29102_29106 = 0;while(true){
if((i__29102_29106 < count__29101_29105))
{var n_29107 = cljs.core._nth.call(null,chunk__29100_29104,i__29102_29106);n_29107.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__29108 = seq__29099_29103;
var G__29109 = chunk__29100_29104;
var G__29110 = count__29101_29105;
var G__29111 = (i__29102_29106 + 1);
seq__29099_29103 = G__29108;
chunk__29100_29104 = G__29109;
count__29101_29105 = G__29110;
i__29102_29106 = G__29111;
continue;
}
} else
{var temp__4126__auto___29112 = cljs.core.seq.call(null,seq__29099_29103);if(temp__4126__auto___29112)
{var seq__29099_29113__$1 = temp__4126__auto___29112;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29099_29113__$1))
{var c__4295__auto___29114 = cljs.core.chunk_first.call(null,seq__29099_29113__$1);{
var G__29115 = cljs.core.chunk_rest.call(null,seq__29099_29113__$1);
var G__29116 = c__4295__auto___29114;
var G__29117 = cljs.core.count.call(null,c__4295__auto___29114);
var G__29118 = 0;
seq__29099_29103 = G__29115;
chunk__29100_29104 = G__29116;
count__29101_29105 = G__29117;
i__29102_29106 = G__29118;
continue;
}
} else
{var n_29119 = cljs.core.first.call(null,seq__29099_29113__$1);n_29119.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__29120 = cljs.core.next.call(null,seq__29099_29113__$1);
var G__29121 = null;
var G__29122 = 0;
var G__29123 = 0;
seq__29099_29103 = G__29120;
chunk__29100_29104 = G__29121;
count__29101_29105 = G__29122;
i__29102_29106 = G__29123;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__29124){
var content = cljs.core.first(arglist__29124);
arglist__29124 = cljs.core.next(arglist__29124);
var name = cljs.core.first(arglist__29124);
var value = cljs.core.rest(arglist__29124);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__29129_29133 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__29130_29134 = null;var count__29131_29135 = 0;var i__29132_29136 = 0;while(true){
if((i__29132_29136 < count__29131_29135))
{var n_29137 = cljs.core._nth.call(null,chunk__29130_29134,i__29132_29136);n_29137.removeAttribute(cljs.core.name.call(null,name));
{
var G__29138 = seq__29129_29133;
var G__29139 = chunk__29130_29134;
var G__29140 = count__29131_29135;
var G__29141 = (i__29132_29136 + 1);
seq__29129_29133 = G__29138;
chunk__29130_29134 = G__29139;
count__29131_29135 = G__29140;
i__29132_29136 = G__29141;
continue;
}
} else
{var temp__4126__auto___29142 = cljs.core.seq.call(null,seq__29129_29133);if(temp__4126__auto___29142)
{var seq__29129_29143__$1 = temp__4126__auto___29142;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29129_29143__$1))
{var c__4295__auto___29144 = cljs.core.chunk_first.call(null,seq__29129_29143__$1);{
var G__29145 = cljs.core.chunk_rest.call(null,seq__29129_29143__$1);
var G__29146 = c__4295__auto___29144;
var G__29147 = cljs.core.count.call(null,c__4295__auto___29144);
var G__29148 = 0;
seq__29129_29133 = G__29145;
chunk__29130_29134 = G__29146;
count__29131_29135 = G__29147;
i__29132_29136 = G__29148;
continue;
}
} else
{var n_29149 = cljs.core.first.call(null,seq__29129_29143__$1);n_29149.removeAttribute(cljs.core.name.call(null,name));
{
var G__29150 = cljs.core.next.call(null,seq__29129_29143__$1);
var G__29151 = null;
var G__29152 = 0;
var G__29153 = 0;
seq__29129_29133 = G__29150;
chunk__29130_29134 = G__29151;
count__29131_29135 = G__29152;
i__29132_29136 = G__29153;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__29155 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__29155,0,null);var v = cljs.core.nth.call(null,vec__29155,1,null);if(cljs.core.truth_((function (){var and__3527__auto__ = k;if(cljs.core.truth_(and__3527__auto__))
{return v;
} else
{return and__3527__auto__;
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
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,((function (node,attrs__$1){
return (function (p1__29156_SHARP_){var attr = attrs__$1.item(p1__29156_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
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
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__29163_29169 = cljs.core.seq.call(null,styles);var chunk__29164_29170 = null;var count__29165_29171 = 0;var i__29166_29172 = 0;while(true){
if((i__29166_29172 < count__29165_29171))
{var vec__29167_29173 = cljs.core._nth.call(null,chunk__29164_29170,i__29166_29172);var name_29174 = cljs.core.nth.call(null,vec__29167_29173,0,null);var value_29175 = cljs.core.nth.call(null,vec__29167_29173,1,null);domina.set_style_BANG_.call(null,content,name_29174,value_29175);
{
var G__29176 = seq__29163_29169;
var G__29177 = chunk__29164_29170;
var G__29178 = count__29165_29171;
var G__29179 = (i__29166_29172 + 1);
seq__29163_29169 = G__29176;
chunk__29164_29170 = G__29177;
count__29165_29171 = G__29178;
i__29166_29172 = G__29179;
continue;
}
} else
{var temp__4126__auto___29180 = cljs.core.seq.call(null,seq__29163_29169);if(temp__4126__auto___29180)
{var seq__29163_29181__$1 = temp__4126__auto___29180;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29163_29181__$1))
{var c__4295__auto___29182 = cljs.core.chunk_first.call(null,seq__29163_29181__$1);{
var G__29183 = cljs.core.chunk_rest.call(null,seq__29163_29181__$1);
var G__29184 = c__4295__auto___29182;
var G__29185 = cljs.core.count.call(null,c__4295__auto___29182);
var G__29186 = 0;
seq__29163_29169 = G__29183;
chunk__29164_29170 = G__29184;
count__29165_29171 = G__29185;
i__29166_29172 = G__29186;
continue;
}
} else
{var vec__29168_29187 = cljs.core.first.call(null,seq__29163_29181__$1);var name_29188 = cljs.core.nth.call(null,vec__29168_29187,0,null);var value_29189 = cljs.core.nth.call(null,vec__29168_29187,1,null);domina.set_style_BANG_.call(null,content,name_29188,value_29189);
{
var G__29190 = cljs.core.next.call(null,seq__29163_29181__$1);
var G__29191 = null;
var G__29192 = 0;
var G__29193 = 0;
seq__29163_29169 = G__29190;
chunk__29164_29170 = G__29191;
count__29165_29171 = G__29192;
i__29166_29172 = G__29193;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__29200_29206 = cljs.core.seq.call(null,attrs);var chunk__29201_29207 = null;var count__29202_29208 = 0;var i__29203_29209 = 0;while(true){
if((i__29203_29209 < count__29202_29208))
{var vec__29204_29210 = cljs.core._nth.call(null,chunk__29201_29207,i__29203_29209);var name_29211 = cljs.core.nth.call(null,vec__29204_29210,0,null);var value_29212 = cljs.core.nth.call(null,vec__29204_29210,1,null);domina.set_attr_BANG_.call(null,content,name_29211,value_29212);
{
var G__29213 = seq__29200_29206;
var G__29214 = chunk__29201_29207;
var G__29215 = count__29202_29208;
var G__29216 = (i__29203_29209 + 1);
seq__29200_29206 = G__29213;
chunk__29201_29207 = G__29214;
count__29202_29208 = G__29215;
i__29203_29209 = G__29216;
continue;
}
} else
{var temp__4126__auto___29217 = cljs.core.seq.call(null,seq__29200_29206);if(temp__4126__auto___29217)
{var seq__29200_29218__$1 = temp__4126__auto___29217;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29200_29218__$1))
{var c__4295__auto___29219 = cljs.core.chunk_first.call(null,seq__29200_29218__$1);{
var G__29220 = cljs.core.chunk_rest.call(null,seq__29200_29218__$1);
var G__29221 = c__4295__auto___29219;
var G__29222 = cljs.core.count.call(null,c__4295__auto___29219);
var G__29223 = 0;
seq__29200_29206 = G__29220;
chunk__29201_29207 = G__29221;
count__29202_29208 = G__29222;
i__29203_29209 = G__29223;
continue;
}
} else
{var vec__29205_29224 = cljs.core.first.call(null,seq__29200_29218__$1);var name_29225 = cljs.core.nth.call(null,vec__29205_29224,0,null);var value_29226 = cljs.core.nth.call(null,vec__29205_29224,1,null);domina.set_attr_BANG_.call(null,content,name_29225,value_29226);
{
var G__29227 = cljs.core.next.call(null,seq__29200_29218__$1);
var G__29228 = null;
var G__29229 = 0;
var G__29230 = 0;
seq__29200_29206 = G__29227;
chunk__29201_29207 = G__29228;
count__29202_29208 = G__29229;
i__29203_29209 = G__29230;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__29235_29239 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__29236_29240 = null;var count__29237_29241 = 0;var i__29238_29242 = 0;while(true){
if((i__29238_29242 < count__29237_29241))
{var node_29243 = cljs.core._nth.call(null,chunk__29236_29240,i__29238_29242);goog.dom.classes.add(node_29243,class$);
{
var G__29244 = seq__29235_29239;
var G__29245 = chunk__29236_29240;
var G__29246 = count__29237_29241;
var G__29247 = (i__29238_29242 + 1);
seq__29235_29239 = G__29244;
chunk__29236_29240 = G__29245;
count__29237_29241 = G__29246;
i__29238_29242 = G__29247;
continue;
}
} else
{var temp__4126__auto___29248 = cljs.core.seq.call(null,seq__29235_29239);if(temp__4126__auto___29248)
{var seq__29235_29249__$1 = temp__4126__auto___29248;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29235_29249__$1))
{var c__4295__auto___29250 = cljs.core.chunk_first.call(null,seq__29235_29249__$1);{
var G__29251 = cljs.core.chunk_rest.call(null,seq__29235_29249__$1);
var G__29252 = c__4295__auto___29250;
var G__29253 = cljs.core.count.call(null,c__4295__auto___29250);
var G__29254 = 0;
seq__29235_29239 = G__29251;
chunk__29236_29240 = G__29252;
count__29237_29241 = G__29253;
i__29238_29242 = G__29254;
continue;
}
} else
{var node_29255 = cljs.core.first.call(null,seq__29235_29249__$1);goog.dom.classes.add(node_29255,class$);
{
var G__29256 = cljs.core.next.call(null,seq__29235_29249__$1);
var G__29257 = null;
var G__29258 = 0;
var G__29259 = 0;
seq__29235_29239 = G__29256;
chunk__29236_29240 = G__29257;
count__29237_29241 = G__29258;
i__29238_29242 = G__29259;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__29264_29268 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__29265_29269 = null;var count__29266_29270 = 0;var i__29267_29271 = 0;while(true){
if((i__29267_29271 < count__29266_29270))
{var node_29272 = cljs.core._nth.call(null,chunk__29265_29269,i__29267_29271);goog.dom.classes.remove(node_29272,class$);
{
var G__29273 = seq__29264_29268;
var G__29274 = chunk__29265_29269;
var G__29275 = count__29266_29270;
var G__29276 = (i__29267_29271 + 1);
seq__29264_29268 = G__29273;
chunk__29265_29269 = G__29274;
count__29266_29270 = G__29275;
i__29267_29271 = G__29276;
continue;
}
} else
{var temp__4126__auto___29277 = cljs.core.seq.call(null,seq__29264_29268);if(temp__4126__auto___29277)
{var seq__29264_29278__$1 = temp__4126__auto___29277;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29264_29278__$1))
{var c__4295__auto___29279 = cljs.core.chunk_first.call(null,seq__29264_29278__$1);{
var G__29280 = cljs.core.chunk_rest.call(null,seq__29264_29278__$1);
var G__29281 = c__4295__auto___29279;
var G__29282 = cljs.core.count.call(null,c__4295__auto___29279);
var G__29283 = 0;
seq__29264_29268 = G__29280;
chunk__29265_29269 = G__29281;
count__29266_29270 = G__29282;
i__29267_29271 = G__29283;
continue;
}
} else
{var node_29284 = cljs.core.first.call(null,seq__29264_29278__$1);goog.dom.classes.remove(node_29284,class$);
{
var G__29285 = cljs.core.next.call(null,seq__29264_29278__$1);
var G__29286 = null;
var G__29287 = 0;
var G__29288 = 0;
seq__29264_29268 = G__29285;
chunk__29265_29269 = G__29286;
count__29266_29270 = G__29287;
i__29267_29271 = G__29288;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__29293_29297 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__29294_29298 = null;var count__29295_29299 = 0;var i__29296_29300 = 0;while(true){
if((i__29296_29300 < count__29295_29299))
{var node_29301 = cljs.core._nth.call(null,chunk__29294_29298,i__29296_29300);goog.dom.classes.toggle(node_29301,class$);
{
var G__29302 = seq__29293_29297;
var G__29303 = chunk__29294_29298;
var G__29304 = count__29295_29299;
var G__29305 = (i__29296_29300 + 1);
seq__29293_29297 = G__29302;
chunk__29294_29298 = G__29303;
count__29295_29299 = G__29304;
i__29296_29300 = G__29305;
continue;
}
} else
{var temp__4126__auto___29306 = cljs.core.seq.call(null,seq__29293_29297);if(temp__4126__auto___29306)
{var seq__29293_29307__$1 = temp__4126__auto___29306;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29293_29307__$1))
{var c__4295__auto___29308 = cljs.core.chunk_first.call(null,seq__29293_29307__$1);{
var G__29309 = cljs.core.chunk_rest.call(null,seq__29293_29307__$1);
var G__29310 = c__4295__auto___29308;
var G__29311 = cljs.core.count.call(null,c__4295__auto___29308);
var G__29312 = 0;
seq__29293_29297 = G__29309;
chunk__29294_29298 = G__29310;
count__29295_29299 = G__29311;
i__29296_29300 = G__29312;
continue;
}
} else
{var node_29313 = cljs.core.first.call(null,seq__29293_29307__$1);goog.dom.classes.toggle(node_29313,class$);
{
var G__29314 = cljs.core.next.call(null,seq__29293_29307__$1);
var G__29315 = null;
var G__29316 = 0;
var G__29317 = 0;
seq__29293_29297 = G__29314;
chunk__29294_29298 = G__29315;
count__29295_29299 = G__29316;
i__29296_29300 = G__29317;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_29326__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__29322_29327 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__29323_29328 = null;var count__29324_29329 = 0;var i__29325_29330 = 0;while(true){
if((i__29325_29330 < count__29324_29329))
{var node_29331 = cljs.core._nth.call(null,chunk__29323_29328,i__29325_29330);goog.dom.classes.set(node_29331,classes_29326__$1);
{
var G__29332 = seq__29322_29327;
var G__29333 = chunk__29323_29328;
var G__29334 = count__29324_29329;
var G__29335 = (i__29325_29330 + 1);
seq__29322_29327 = G__29332;
chunk__29323_29328 = G__29333;
count__29324_29329 = G__29334;
i__29325_29330 = G__29335;
continue;
}
} else
{var temp__4126__auto___29336 = cljs.core.seq.call(null,seq__29322_29327);if(temp__4126__auto___29336)
{var seq__29322_29337__$1 = temp__4126__auto___29336;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29322_29337__$1))
{var c__4295__auto___29338 = cljs.core.chunk_first.call(null,seq__29322_29337__$1);{
var G__29339 = cljs.core.chunk_rest.call(null,seq__29322_29337__$1);
var G__29340 = c__4295__auto___29338;
var G__29341 = cljs.core.count.call(null,c__4295__auto___29338);
var G__29342 = 0;
seq__29322_29327 = G__29339;
chunk__29323_29328 = G__29340;
count__29324_29329 = G__29341;
i__29325_29330 = G__29342;
continue;
}
} else
{var node_29343 = cljs.core.first.call(null,seq__29322_29337__$1);goog.dom.classes.set(node_29343,classes_29326__$1);
{
var G__29344 = cljs.core.next.call(null,seq__29322_29337__$1);
var G__29345 = null;
var G__29346 = 0;
var G__29347 = 0;
seq__29322_29327 = G__29344;
chunk__29323_29328 = G__29345;
count__29324_29329 = G__29346;
i__29325_29330 = G__29347;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__29352_29356 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__29353_29357 = null;var count__29354_29358 = 0;var i__29355_29359 = 0;while(true){
if((i__29355_29359 < count__29354_29358))
{var node_29360 = cljs.core._nth.call(null,chunk__29353_29357,i__29355_29359);goog.dom.setTextContent(node_29360,value);
{
var G__29361 = seq__29352_29356;
var G__29362 = chunk__29353_29357;
var G__29363 = count__29354_29358;
var G__29364 = (i__29355_29359 + 1);
seq__29352_29356 = G__29361;
chunk__29353_29357 = G__29362;
count__29354_29358 = G__29363;
i__29355_29359 = G__29364;
continue;
}
} else
{var temp__4126__auto___29365 = cljs.core.seq.call(null,seq__29352_29356);if(temp__4126__auto___29365)
{var seq__29352_29366__$1 = temp__4126__auto___29365;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29352_29366__$1))
{var c__4295__auto___29367 = cljs.core.chunk_first.call(null,seq__29352_29366__$1);{
var G__29368 = cljs.core.chunk_rest.call(null,seq__29352_29366__$1);
var G__29369 = c__4295__auto___29367;
var G__29370 = cljs.core.count.call(null,c__4295__auto___29367);
var G__29371 = 0;
seq__29352_29356 = G__29368;
chunk__29353_29357 = G__29369;
count__29354_29358 = G__29370;
i__29355_29359 = G__29371;
continue;
}
} else
{var node_29372 = cljs.core.first.call(null,seq__29352_29366__$1);goog.dom.setTextContent(node_29372,value);
{
var G__29373 = cljs.core.next.call(null,seq__29352_29366__$1);
var G__29374 = null;
var G__29375 = 0;
var G__29376 = 0;
seq__29352_29356 = G__29373;
chunk__29353_29357 = G__29374;
count__29354_29358 = G__29375;
i__29355_29359 = G__29376;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__29381_29385 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__29382_29386 = null;var count__29383_29387 = 0;var i__29384_29388 = 0;while(true){
if((i__29384_29388 < count__29383_29387))
{var node_29389 = cljs.core._nth.call(null,chunk__29382_29386,i__29384_29388);goog.dom.forms.setValue(node_29389,value);
{
var G__29390 = seq__29381_29385;
var G__29391 = chunk__29382_29386;
var G__29392 = count__29383_29387;
var G__29393 = (i__29384_29388 + 1);
seq__29381_29385 = G__29390;
chunk__29382_29386 = G__29391;
count__29383_29387 = G__29392;
i__29384_29388 = G__29393;
continue;
}
} else
{var temp__4126__auto___29394 = cljs.core.seq.call(null,seq__29381_29385);if(temp__4126__auto___29394)
{var seq__29381_29395__$1 = temp__4126__auto___29394;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29381_29395__$1))
{var c__4295__auto___29396 = cljs.core.chunk_first.call(null,seq__29381_29395__$1);{
var G__29397 = cljs.core.chunk_rest.call(null,seq__29381_29395__$1);
var G__29398 = c__4295__auto___29396;
var G__29399 = cljs.core.count.call(null,c__4295__auto___29396);
var G__29400 = 0;
seq__29381_29385 = G__29397;
chunk__29382_29386 = G__29398;
count__29383_29387 = G__29399;
i__29384_29388 = G__29400;
continue;
}
} else
{var node_29401 = cljs.core.first.call(null,seq__29381_29395__$1);goog.dom.forms.setValue(node_29401,value);
{
var G__29402 = cljs.core.next.call(null,seq__29381_29395__$1);
var G__29403 = null;
var G__29404 = 0;
var G__29405 = 0;
seq__29381_29385 = G__29402;
chunk__29382_29386 = G__29403;
count__29383_29387 = G__29404;
i__29384_29388 = G__29405;
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
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){var allows_inner_html_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));var leading_whitespace_QMARK_ = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string)))).toLowerCase();var special_tag_QMARK_ = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name);if(cljs.core.truth_((function (){var and__3527__auto__ = allows_inner_html_QMARK_;if(and__3527__auto__)
{var and__3527__auto____$1 = (function (){var or__3539__auto__ = domina.support.leading_whitespace_QMARK_;if(cljs.core.truth_(or__3539__auto__))
{return or__3539__auto__;
} else
{return cljs.core.not.call(null,leading_whitespace_QMARK_);
}
})();if(cljs.core.truth_(and__3527__auto____$1))
{return !(special_tag_QMARK_);
} else
{return and__3527__auto____$1;
}
} else
{return and__3527__auto__;
}
})()))
{var value_29416 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__29412_29417 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__29413_29418 = null;var count__29414_29419 = 0;var i__29415_29420 = 0;while(true){
if((i__29415_29420 < count__29414_29419))
{var node_29421 = cljs.core._nth.call(null,chunk__29413_29418,i__29415_29420);node_29421.innerHTML = value_29416;
{
var G__29422 = seq__29412_29417;
var G__29423 = chunk__29413_29418;
var G__29424 = count__29414_29419;
var G__29425 = (i__29415_29420 + 1);
seq__29412_29417 = G__29422;
chunk__29413_29418 = G__29423;
count__29414_29419 = G__29424;
i__29415_29420 = G__29425;
continue;
}
} else
{var temp__4126__auto___29426 = cljs.core.seq.call(null,seq__29412_29417);if(temp__4126__auto___29426)
{var seq__29412_29427__$1 = temp__4126__auto___29426;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29412_29427__$1))
{var c__4295__auto___29428 = cljs.core.chunk_first.call(null,seq__29412_29427__$1);{
var G__29429 = cljs.core.chunk_rest.call(null,seq__29412_29427__$1);
var G__29430 = c__4295__auto___29428;
var G__29431 = cljs.core.count.call(null,c__4295__auto___29428);
var G__29432 = 0;
seq__29412_29417 = G__29429;
chunk__29413_29418 = G__29430;
count__29414_29419 = G__29431;
i__29415_29420 = G__29432;
continue;
}
} else
{var node_29433 = cljs.core.first.call(null,seq__29412_29427__$1);node_29433.innerHTML = value_29416;
{
var G__29434 = cljs.core.next.call(null,seq__29412_29427__$1);
var G__29435 = null;
var G__29436 = 0;
var G__29437 = 0;
seq__29412_29417 = G__29434;
chunk__29413_29418 = G__29435;
count__29414_29419 = G__29436;
i__29415_29420 = G__29437;
continue;
}
}
} else
{}
}
break;
}
}catch (e29411){if((e29411 instanceof Error))
{var e_29438 = e29411;domina.replace_children_BANG_.call(null,content,value_29416);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e29411;
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
var get_data__3 = (function (node,key,bubble){var m = domina.single_node.call(null,node).__domina_data;var value = (cljs.core.truth_(m)?cljs.core.get.call(null,m,key):null);if(cljs.core.truth_((function (){var and__3527__auto__ = bubble;if(cljs.core.truth_(and__3527__auto__))
{return (value == null);
} else
{return and__3527__auto__;
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
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){var m = (function (){var or__3539__auto__ = domina.single_node.call(null,node).__domina_data;if(cljs.core.truth_(or__3539__auto__))
{return or__3539__auto__;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__29445_29449 = cljs.core.seq.call(null,children);var chunk__29446_29450 = null;var count__29447_29451 = 0;var i__29448_29452 = 0;while(true){
if((i__29448_29452 < count__29447_29451))
{var child_29453 = cljs.core._nth.call(null,chunk__29446_29450,i__29448_29452);frag.appendChild(child_29453);
{
var G__29454 = seq__29445_29449;
var G__29455 = chunk__29446_29450;
var G__29456 = count__29447_29451;
var G__29457 = (i__29448_29452 + 1);
seq__29445_29449 = G__29454;
chunk__29446_29450 = G__29455;
count__29447_29451 = G__29456;
i__29448_29452 = G__29457;
continue;
}
} else
{var temp__4126__auto___29458 = cljs.core.seq.call(null,seq__29445_29449);if(temp__4126__auto___29458)
{var seq__29445_29459__$1 = temp__4126__auto___29458;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29445_29459__$1))
{var c__4295__auto___29460 = cljs.core.chunk_first.call(null,seq__29445_29459__$1);{
var G__29461 = cljs.core.chunk_rest.call(null,seq__29445_29459__$1);
var G__29462 = c__4295__auto___29460;
var G__29463 = cljs.core.count.call(null,c__4295__auto___29460);
var G__29464 = 0;
seq__29445_29449 = G__29461;
chunk__29446_29450 = G__29462;
count__29447_29451 = G__29463;
i__29448_29452 = G__29464;
continue;
}
} else
{var child_29465 = cljs.core.first.call(null,seq__29445_29459__$1);frag.appendChild(child_29465);
{
var G__29466 = cljs.core.next.call(null,seq__29445_29459__$1);
var G__29467 = null;
var G__29468 = 0;
var G__29469 = 0;
seq__29445_29449 = G__29466;
chunk__29446_29450 = G__29467;
count__29447_29451 = G__29468;
i__29448_29452 = G__29469;
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
return cljs.core.doall.call(null,cljs.core.map.call(null,((function (parents,children,first_child,other_children){
return (function (p1__29439_SHARP_,p2__29440_SHARP_){return f.call(null,p1__29439_SHARP_,p2__29440_SHARP_);
});})(parents,children,first_child,other_children))
,cljs.core.rest.call(null,parents),other_children));
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
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){var and__3527__auto__ = obj;if(cljs.core.truth_(and__3527__auto__))
{var and__3527__auto____$1 = cljs.core.not.call(null,obj.nodeName);if(and__3527__auto____$1)
{return obj.length;
} else
{return and__3527__auto____$1;
}
} else
{return and__3527__auto__;
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
{if((function (){var G__29471 = list_thing;if(G__29471)
{var bit__4189__auto__ = (G__29471.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4189__auto__) || (G__29471.cljs$core$ISeqable$))
{return true;
} else
{if((!G__29471.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__29471);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__29471);
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
{if((function (){var G__29472 = content;if(G__29472)
{var bit__4189__auto__ = (G__29472.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4189__auto__) || (G__29472.cljs$core$ISeqable$))
{return true;
} else
{if((!G__29472.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__29472);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__29472);
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
{if((function (){var G__29473 = content;if(G__29473)
{var bit__4189__auto__ = (G__29473.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4189__auto__) || (G__29473.cljs$core$ISeqable$))
{return true;
} else
{if((!G__29473.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__29473);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__29473);
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

//# sourceMappingURL=domina.js.map